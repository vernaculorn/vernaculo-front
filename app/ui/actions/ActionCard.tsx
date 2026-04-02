import { Action } from '@/app/types/action';
import Link from 'next/link'
import React from 'react'

const ActionCard: React.FC<{ action: Action }> = ({ action }) => {

  return (
    <div className='flex flex-col lg:flex-row justify-center w-full px-0 lg:px-5'>

      {/* LADO ESQUERDO — imagem com overlay */}
      <div
        style={{ backgroundImage: `url(${action.image.file_url})` }}
        className='bg-no-repeat bg-center bg-cover w-full lg:w-100 h-72 max-h-full flex relative'
      >
        <div className='absolute inset-0 bg-black/50' />
        <div className='flex flex-col w-full h-full py-8 px-6 justify-end gap-2 z-10'>
          <h1
            style={{ borderBottomColor: '#ffffff', color: '#ffffff' }}
            className='font-bold text-3xl uppercase text-center leading-tight border-b-[6px] pb-3'
          >
            {action.title}
          </h1>
          <p style={{ color: '#ffffff' }} className='text-center text-sm font-semibold uppercase tracking-wide mt-1'>
            {action.coordinator}
          </p>
          <p style={{ color: '#ffffff' }} className='text-center text-sm font-semibold uppercase tracking-widest'>
            {action.place}
          </p>
        </div>
      </div>

      {/* LADO DIREITO — borda colorida, fundo branco */}
      <div
        style={{ borderColor: action.primary_color }}
        className='flex flex-col border-4 lg:mx-2 w-full lg:w-[50rem] h-72 p-8 justify-between'
      >
        <p className='text-white text-base leading-relaxed'>
          {action.description}
        </p>
        <div className='flex justify-end mt-6'>
          <Link
            style={{ borderColor: action.primary_color, color: action.primary_color }}
            className='px-5 py-1 border-4 bg-transparent text-center font-semibold'
            href={`/postagens/${action.slug}`}
          >
            conhecer +
          </Link>
        </div>
      </div>

    </div>
  )
}
export default ActionCard