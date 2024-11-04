'use client';
import Carrossel from '@/app/ui/about/carrossel';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function Tipografia() {
  const searchParams = useSearchParams();

  const title = searchParams.get('title') || 'Título não disponível';
  const coordinator = searchParams.get('coordinator') || 'Coordenador não disponível';
  const year = searchParams.get('year') || 'Ano não disponível';
  const place = searchParams.get('place') || 'Local não disponível';
  const content = searchParams.get('content') || 'Conteúdo não disponível';
  const primary_color = searchParams.get('primary_color') || '#FFFFFF';
  const secondary_color = searchParams.get('secondary_color') || '#000000';
  const image = searchParams.get('image') || 'Imagem não Disponível';

  return (
    <div style={{color: secondary_color}} className='relative flex flex-col w-full lg:p-10 md:p-10 pt-0 bg-slate-100 gap-5'>
      <div style={{backgroundImage: `url(${image})`}} className=' bg-no-repeat bg-center bg-cover w-full h-80 flex  relative'>
        <div style={{background: `${primary_color}80`}} className='absolute w-full h-full'></div>
        <div className='flex flex-col w-full h-full'>
          <div className='z-10 mt-auto w-full'>
            <h1 style={{borderBottomColor: secondary_color}} className='w-96 mx-auto font-bold text-2xl text-center border-solid  border-b-[8px]'>{title}</h1>
          </div>
          <div className='z-10 mb-auto w-96 mx-auto text-center'>
            <p>{coordinator}</p>
            <p>{place} , {year}</p>
          </div>
        </div>
      </div>
      <div className='mx-2 md:mx-0 lg:mx-0'>
        <Carrossel />
      </div>
      <div className='m-5 lg:mx-32 md:mx-10'>
        <div style={{borderColor: secondary_color}} className='flex flex-col p-8 border-solid border-4 w-full'>
          <p dangerouslySetInnerHTML={{ __html: content }}></p>
        </div>
      </div>

    </div>
  )
}