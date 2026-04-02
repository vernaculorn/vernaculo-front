'use client';
import { Action } from '@/app/types/action';
import Carrossel from '@/app/ui/about/carrossel';
import { leagueGothic } from '@/app/ui/fonts';
import Image from 'next/image';
import React from 'react';

export default function Tipografia({ params }: { params: { slug: string } }) {
  const [action, setAction] = React.useState<Action | null>(null);

  const getAction = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/actions/${params.slug}`);
    const json = await response.json();
    setAction(json);
  }

  React.useEffect(() => {
    getAction()
  }, [params.slug]);

  return (
    <div className='bg-[#1E1E1E] flex flex-col relative'>

      {/* BANNER */}
      <div className="relative w-full h-64 md:h-[600px] overflow-hidden">
        <Image
          src="/bg/meninosJogandoBola.webp"
          alt="Banner postagens"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute bottom-0 left-0 w-full bg-black/50">
          <div className="max-w-4xl mx-auto pb-4">
            <p className="text-center pt-8 text-white md:text-xl">
              Encontre aqui conteúdos diversos sobre a arte e o artefato popular,
              como: ações do Projeto Vernáculo, reflexões sobre temas tratados
              no âmbito do projeto, notícias relacionadas a esses temas,
              resenhas de publicações, entre outros.
            </p>
          </div>
        </div>
      </div>

      {/* TÍTULO */}
      <div className='w-full py-10 px-6'>
        <div className='max-w-5xl mx-auto p-2 border-b-4 text-white' style={{ backgroundColor: `${action?.primary_color}40`, borderBottomColor: action?.primary_color }}>
          <h2
            className={`${leagueGothic.className} text-5xl md:text-3xl uppercase leading-tight pb-3`}
          >
            {action?.title}
          </h2>
          <p className='text-sm uppercase tracking-widest mt-4'>
            {action?.coordinator}
          </p>
          <p className='text-sm uppercase tracking-widest'>
            {action?.place}
          </p>
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className='w-full py-12 px-6'>
        <div className='max-w-5xl mx-auto'>
          {action && (
            <div
              className='text-white/80 leading-relaxed md:columns-2 gap-10'
              dangerouslySetInnerHTML={{ __html: action.content }}
            />
          )}
        </div>
      </div>

      {/* CARROSSEL DE FOTOS */}
      {action?.files && action.files.length > 0 && (
        <div className='w-full pb-16'>
          <Carrossel images={action.files.map((file) => ({ src: file.file_url, id: file.id }))} />
        </div>
      )}

    </div>
  )
}

