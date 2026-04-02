'use client'

import React, { useEffect, useState } from 'react'
import Carrossel from '../ui/about/carrossel'
import SVGMap from '../ui/incursion/SVGMap'
import { Material } from '../types/material'
import { Craftsman } from '../types/craftsman'
import { leagueGothic } from '../ui/fonts'
import { FileProps } from '../types/file'
import Image from 'next/image'
import { Region } from '../types/region'
import SVGBorder from '../icons/SVGBorder'

type ItemProps = {
  name: string,
  slug: string,
  type: string,
  video?: string,
  image: FileProps;
  content: string,
  files: FileProps[];
}

export default function Incursion() {

  const [materials, setMaterials] = useState<Material[]>([])
  const [craftsmans, setCraftsmans] = useState<Craftsman[]>([])
  const [regions, setRegions] = useState<Region[]>([])
  const [selectedRegions, setSelectedRegions] = useState<Region[]>([])
  const [item, setItem] = useState<ItemProps | null>(null)
  const [region, setRegion] = useState<Region | null>(null)

  // ================= FETCH =================

  const getMaterials = async () => {
    let url = '/materials?'

    if (region && region.slug !== 'rio-grande-do-norte') {
      url += 'region=' + region.slug + '&'
    }

    if (!region && item?.type === 'craftsman') {
      url += 'craftsman=' + item.slug
    }

    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + url)
    const data = await res.json()

    const filtered = data.filter((m: Material) => m.slug !== 'materiais')
    setMaterials(filtered)

    if (!item && !region && filtered.length > 0) {
      getItem(filtered[0].slug, 'materials')
    }
  }

  const getCraftsmans = async () => {
    let url = '/craftsmans?'

    if (region && region.slug !== 'rio-grande-do-norte') {
      url += 'region=' + region.slug + '&'
    }

    if (!region && item?.type === 'material') {
      url += 'material=' + item.slug
    }

    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + url)
    const data = await res.json()

    const filtered = data.filter((c: Craftsman) => c.slug !== 'artifices')
    setCraftsmans(filtered)
  }

  const getRegions = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/regions')
    const data = await res.json()
    setRegions(data)
  }

  const getItem = async (slug: string, route: string) => {
    if (!slug) return

    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/' + route + '/' + slug)
    const data = await res.json()

    setItem({
      name: data.name,
      slug: data.slug,
      type: route === 'materials' ? 'material' : 'craftsman',
      video: data.video,
      image: data.image,
      content: data.content,
      files: data.files
    })
  }

  // ================= EFFECTS =================

  useEffect(() => {
    getRegions()
    getMaterials()
    getCraftsmans()
  }, [])

  useEffect(() => {
    getMaterials()
    getCraftsmans()
  }, [region, item])

  // ================= HELPERS =================

  const videoId =
    item?.video && item.video.includes('youtube')
      ? new URLSearchParams(new URL(item.video).search).get('v')
      : null

  // ================= UI =================

  return (
    <div className="text-white min-h-screen" style={{ backgroundImage: 'url(/bg/palmeiras.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-black/20 w-full h-full py-64">
        {/* ================= CONTEÚDO ================= */}
        {item && (
          <div className="w-full mx-auto bg-black">

            <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
              {/* BLOCO LARANJA */}
              <div className="bg-orange-600 p-6 flex flex-col items-center text-center">
                <SVGBorder invert />

                <div className="flex flex-col gap-6 w-full">

                  {/* MATERIAL */}
                  <select
                    onChange={(e) => {
                      const value = e.target.value

                      if (value === 'all') {
                        if (materials.length > 0) {
                          getItem(materials[0].slug, 'materials')
                        }
                        return
                      }

                      getItem(value, 'materials')
                    }}
                    className="p-3 bg-white text-black rounded"
                  >
                    <option value="all">Todos materiais</option>
                    {materials.map(m => (
                      <option key={m.slug} value={m.slug}>{m.name}</option>
                    ))}
                  </select>

                  {/* ARTIFICES */}
                  <select
                    onChange={(e) => {
                      const value = e.target.value

                      if (value === 'all') {
                        if (craftsmans.length > 0) {
                          getItem(craftsmans[0].slug, 'craftsmans')
                        }
                        return
                      }

                      getItem(value, 'craftsmans')
                    }}
                    className="p-3 bg-white text-black rounded"
                  >
                    <option value="all">Todos artífices</option>
                    {craftsmans.map(c => (
                      <option key={c.slug} value={c.slug}>{c.name}</option>
                    ))}
                  </select>

                  {/* MAPA */}
                  <SVGMap
                    regions={regions}
                    getItem={getItem}
                    setItem={setItem}
                    selectedRegions={selectedRegions}
                    setSelectedRegions={setSelectedRegions}
                    setRegion={setRegion}
                  />

                </div>

                <SVGBorder />
              </div>

              {/* TEXTO */}
              <div className="lg:col-span-2 px-2 py-8">
                <h1 className={`${leagueGothic.className} text-5xl`}>
                  {item.name}
                </h1>

                <div
                  className="mt-6 text-white/80 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            </div>
          </div>
        )}

        {/* ================= CARROSSEL ================= */}
        {item?.files && item.files.length > 0 && (
          <Carrossel images={item.files.map((f) => ({ src: f.file_url, id: f.id }))} />
        )}

        {/* ================= VIDEO ================= */}
        {videoId && (
          <div className="w-full mx-auto py-4 bg-black">
            <SVGBorder invert />
            <div className="max-w-4xl mx-auto py-4 px-4 border-y-4 border-white">
              <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${videoId}`}
                allowFullScreen
              />
            </div>
            <SVGBorder />
          </div>
        )}

      </div>
    </div>
  )
}