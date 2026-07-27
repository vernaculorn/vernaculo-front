import https from 'https'
import { NextRequest, NextResponse } from 'next/server'

const UPSTREAM = 'https://projetovernaculo.ufrn.br'
const insecureAgent = new https.Agent({ rejectUnauthorized: false })

function upstreamRequest(
  target: URL,
  method: string,
  headers: Headers,
  body?: Buffer,
): Promise<{ status: number; headers: Headers; body: Buffer }> {
  return new Promise((resolve, reject) => {
    const req = https.request(
      target,
      {
        method,
        headers: Object.fromEntries(headers.entries()),
        agent: insecureAgent,
      },
      (res) => {
        const chunks: Buffer[] = []
        res.on('data', (chunk) => chunks.push(chunk))
        res.on('end', () => {
          resolve({
            status: res.statusCode ?? 502,
            headers: new Headers(
              Object.entries(res.headers).flatMap(([key, value]) => {
                if (value == null) return []
                return Array.isArray(value)
                  ? value.map((v) => [key, v] as [string, string])
                  : [[key, value] as [string, string]]
              }),
            ),
            body: Buffer.concat(chunks),
          })
        })
      },
    )
    req.on('error', reject)
    if (body) req.write(body)
    req.end()
  })
}

async function proxy(req: NextRequest, path: string[]) {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json(
      { error: 'Proxy inseguro só disponível em desenvolvimento' },
      { status: 404 },
    )
  }

  const target = new URL(`${UPSTREAM}/${path.join('/')}`)
  req.nextUrl.searchParams.forEach((value, key) => {
    target.searchParams.set(key, value)
  })

  const headers = new Headers(req.headers)
  headers.delete('host')
  headers.delete('connection')
  headers.delete('content-length')
  // Evita resposta gzip: precisamos reescrever URLs no JSON em texto puro
  headers.delete('accept-encoding')

  const body =
    req.method === 'GET' || req.method === 'HEAD'
      ? undefined
      : Buffer.from(await req.arrayBuffer())

  const upstream = await upstreamRequest(target, req.method, headers, body)
  const contentType = upstream.headers.get('content-type') ?? ''
  const localOrigin = req.nextUrl.origin
  const rewriteOrigin = `${localOrigin}/api/insecure`

  // Reescreve URLs absolutas do upstream (API JSON e redirects) para o proxy local
  const shouldRewrite =
    contentType.includes('json') ||
    contentType.includes('text/') ||
    path[0] === 'api'

  if (shouldRewrite) {
    const escapedUpstream = UPSTREAM.replaceAll('/', '\\/')
    const escapedRewrite = rewriteOrigin.replaceAll('/', '\\/')
    const text = upstream.body
      .toString('utf8')
      .split(UPSTREAM)
      .join(rewriteOrigin)
      .split(escapedUpstream)
      .join(escapedRewrite)
    return new NextResponse(text, {
      status: upstream.status,
      headers: {
        'content-type': contentType || 'application/json',
        'cache-control': 'no-store',
      },
    })
  }

  return new NextResponse(new Uint8Array(upstream.body), {
    status: upstream.status,
    headers: {
      'content-type': contentType || 'application/octet-stream',
      'cache-control': upstream.headers.get('cache-control') ?? 'no-store',
    },
  })
}

type Params = { params: { path: string[] } }

export async function GET(req: NextRequest, { params }: Params) {
  return proxy(req, params.path)
}

export async function POST(req: NextRequest, { params }: Params) {
  return proxy(req, params.path)
}

export async function PUT(req: NextRequest, { params }: Params) {
  return proxy(req, params.path)
}

export async function PATCH(req: NextRequest, { params }: Params) {
  return proxy(req, params.path)
}

export async function DELETE(req: NextRequest, { params }: Params) {
  return proxy(req, params.path)
}
