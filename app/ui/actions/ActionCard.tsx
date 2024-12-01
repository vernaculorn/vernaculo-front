import { Action } from '@/app/types/action';
import Link from 'next/link'
import React from 'react'

const ActionCard: React.FC<{ action: Action }> = ({ action }) => {

  return (
    <div className='flex flex-col lg:flex-row justify-center w-full px-0 lg:px-5'>
      <div style={{ backgroundImage: `url(${action.image.file_url})` }} className='bg-no-repeat bg-center bg-cover w-full lg:w-100 lg:min-h-96 max-h-full flex relative'>
        <div style={{ background: `${action.primary_color}99` }} className='absolute w-full h-full'></div>
        <div className='flex flex-col w-full h-full my-5 md:my-7'>
          <div className='z-10 mt-auto w-full'>
            <h1 style={{ borderBottomColor: action.secondary_color, color: action.secondary_color }} className='w-96 mx-auto font-bold text-2xl text-center border-solid border-b-[8px]'>{action.title}</h1>
          </div>
          <div style={{ color: action.secondary_color }} className='z-10 mb-auto w-96 mx-auto text-center'>
            <p>{action.coordinator}</p>
            <p>{action.place} , {action.year}</p>
          </div>
        </div>
      </div>

      <div style={{ background: action.primary_color }} className='flex flex-col relative overflow-hidden text-xl justify-center items-center p-10 [&>div]:p-0 lg:mx-2 w-full lg:w-[50rem] lg:min-h-96 h-full'>
        <p className='w-full' style={{ color: action.secondary_color }}>{action.description}</p>
        <div className='p-1 w-full justify-end flex bottom-0'>
          <Link
            style={{ borderColor: action.secondary_color, color: action.secondary_color }}
            className={`w-40 text-center bg-transparent border-solid border-4 `}
            href={`/acoes/${action.slug}`}
          >Conhecer +</Link>
        </div>
      </div>
    </div>
  )
}
export default ActionCard