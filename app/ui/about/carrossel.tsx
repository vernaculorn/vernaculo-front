'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type CarrosselProps = {
  images: { src: string, id: number }[]
}

const Carrossel = ({ images }: CarrosselProps) => {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Reset index when images change (ex: troca de item em incursões)
  useEffect(() => {
    setCarouselIndex(0)
  }, [images])

  // Auto-play
  useEffect(() => {
    if (images.length <= 1) return
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, 3000)
    return () => clearInterval(interval)
  }, [images])

  if (!images || images.length === 0) return null

  return (
    <>
      {/* CARROSSEL */}
      <div className="max-w-7xl mx-auto py-20 backdrop-blur-sm bg-black/20 rounded">
        <div className="relative flex items-center justify-center">

          {/* BOTÃO ESQ */}
          <button
            onClick={() => setCarouselIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
            className="absolute left-0 z-20 bg-black/60 px-3 py-2 text-white"
          >
            ◀
          </button>

          {/* TRACK CENTRAL */}
          <div className="relative w-[900px] h-[350px] flex items-center justify-center overflow-hidden">
            {images.map((img, index) => {
              const offset = index - carouselIndex
              const total = images.length
              const realOffset = ((offset + total + total / 2) % total) - total / 2

              return (
                <div
                  key={img.id}
                  className="absolute transition-all duration-500 ease-in-out"
                  style={{
                    transform: `translateX(${realOffset * 260}px) scale(${realOffset === 0 ? 1 : 0.7})`,
                    opacity: Math.abs(realOffset) > 1 ? 0 : 1,
                    zIndex: realOffset === 0 ? 10 : 5,
                  }}
                >
                  <Image
                    src={img.src}
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
            onClick={() => setCarouselIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
            className="absolute right-0 z-20 bg-black/60 px-3 py-2 text-white"
          >
            ▶
          </button>

        </div>
      </div>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setLightboxIndex(null)}
        >
          {/* FECHAR */}
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
                prev === null ? 0 : prev === 0 ? images.length - 1 : prev - 1
              )
            }}
          >
            ◀
          </button>

          {/* IMAGEM */}
          <div onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[lightboxIndex].src}
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
                prev === null ? 0 : prev === images.length - 1 ? 0 : prev + 1
              )
            }}
          >
            ▶
          </button>

          {/* CONTADOR */}
          <span className="absolute bottom-4 text-white/60 text-sm">
            {lightboxIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  )
}

export default Carrossel

