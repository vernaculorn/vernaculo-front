'use client'

import React, { useEffect, useState } from 'react'
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
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

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

    setCarouselIndex(0)
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

  useEffect(() => {
    if (!item?.files || item.files.length <= 1) return
    const interval = setInterval(() => {
      setCarouselIndex((prev) =>
        prev === item.files.length - 1 ? 0 : prev + 1
      )
    }, 3000)
    return () => clearInterval(interval)
  }, [item])

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
          <div className="max-w-7xl mx-auto py-20 backdrop-blur-sm bg-black/20 rounded">

            <div className="relative flex items-center justify-center">

              {/* BOTÃO ESQ */}
              <button
                onClick={() =>
                  setCarouselIndex((prev) =>
                    prev === 0 ? item.files.length - 1 : prev - 1
                  )
                }
                className="absolute left-0 z-20 bg-black/60 px-3 py-2"
              >
                ◀
              </button>

              {/* TRACK CENTRAL */}
              <div className="relative w-[900px] h-[350px] flex items-center justify-center overflow-hidden">

                {item.files.map((img, index) => {
                  const offset = index - carouselIndex

                  // loop infinito
                  const total = item.files.length
                  const realOffset =
                    ((offset + total + total / 2) % total) - total / 2

                  return (
                    <div
                      key={index}
                      className="absolute transition-all duration-500 ease-in-out"
                      style={{
                        transform: `
                          translateX(${realOffset * 260}px)
                          scale(${realOffset === 0 ? 1 : 0.7})
                        `,
                        opacity: Math.abs(realOffset) > 1 ? 0 : 1,
                        zIndex: realOffset === 0 ? 10 : 5,
                      }}
                    >
                      <Image
                        src={img.file_url}
                        alt=""
                        width={realOffset === 0 ? 320 : 220}
                        height={300}
                        className="rounded object-cover cursor-pointer"
                        onClick={() => realOffset === 0 && setLightboxIndex(index)}
                      />
                    </div>
                  )
                })}

              </div>

              {/* BOTÃO DIR */}
              <button
                onClick={() =>
                  setCarouselIndex((prev) =>
                    prev === item.files.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute right-0 z-20 bg-black/60 px-3 py-2"
              >
                ▶
              </button>

            </div>

          </div>
        )}

        {/* ================= LIGHTBOX ================= */}
        {lightboxIndex !== null && item?.files && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={() => setLightboxIndex(null)}
          >
            {/* BOTÃO FECHAR */}
            <button
              className="absolute top-4 right-6 text-white text-3xl font-bold z-10"
              onClick={() => setLightboxIndex(null)}
            >
              ✕
            </button>

            {/* BOTÃO ESQ */}
            <button
              className="absolute left-4 text-white text-4xl z-10 bg-black/40 px-3 py-2 rounded"
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex((prev) =>
                  prev === null ? 0 : prev === 0 ? item.files.length - 1 : prev - 1
                )
              }}
            >
              ◀
            </button>

            {/* IMAGEM */}
            <div onClick={(e) => e.stopPropagation()}>
              <Image
                src={item.files[lightboxIndex].file_url}
                alt=""
                width={1200}
                height={800}
                className="max-h-[90vh] max-w-[90vw] object-contain rounded"
              />
            </div>

            {/* BOTÃO DIR */}
            <button
              className="absolute right-4 text-white text-4xl z-10 bg-black/40 px-3 py-2 rounded"
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex((prev) =>
                  prev === null ? 0 : prev === item.files.length - 1 ? 0 : prev + 1
                )
              }}
            >
              ▶
            </button>

            {/* CONTADOR */}
            <span className="absolute bottom-4 text-white/60 text-sm">
              {lightboxIndex + 1} / {item.files.length}
            </span>
          </div>
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