
import Link from 'next/link'
import React from 'react'


// Tipagem das Ações
interface Acao {
  title: string;
  coordinator: string;
  year: string;
  place: string;
  content: string;
  primary_color: string;
  secondary_color: string;
  image: string;
  gallery: string[]
}

const LineComponent1: React.FC<{ acao: Acao }> = ({ acao }) => {

  return (
    <div className='flex flex-col lg:flex-row justify-center w-full px-0 lg:px-5'>

      {/* PRIMEIRA BOX (TITLE) */}
      <div style={{ backgroundImage: `url(${acao.image})` }} className='bg-no-repeat bg-center bg-cover w-full lg:w-100 lg:min-h-96 max-h-full flex relative'>
        <div style={{ background: `${acao.primary_color}80` }} className='absolute w-full h-full'></div>
        <div className='flex flex-col w-full h-full my-5 md:my-7'>
          <div className='z-10 mt-auto w-full'>
            <h1 style={{ borderBottomColor: acao.secondary_color, color: acao.secondary_color }} className='w-96 mx-auto font-bold text-2xl text-center border-solid border-b-[8px]'>{acao.title}</h1>
          </div>
          <div style={{ color: acao.secondary_color }} className='z-10 mb-auto w-96 mx-auto text-center'>
            <p>{acao.coordinator}</p>
            <p>{acao.place} , {acao.year}</p>
          </div>
        </div>
      </div>

      {/* SEGUNDA BOX (CONTENT) */}
      <div style={{ background: acao.primary_color }} className='flex flex-col relative overflow-hidden text-xl justify-center items-center p-10 [&>div]:p-0 lg:mx-2 w-full lg:w-[50rem] lg:min-h-96 h-full'>
        <p className='w-full' dangerouslySetInnerHTML={{ __html: acao.content }}></p>
        <div className='p-1 w-full justify-end flex bottom-0'>
          <Link
            style={{ borderColor: acao.secondary_color, color: acao.secondary_color }}
            className={`w-40 text-center bg-transparent border-solid border-4 `}
            //  Link com parâmetros para page1 dinâmica
            href={{
              pathname: '/acoes/page1',
              query: {
                title: acao.title,
                coordinator: acao.coordinator,
                year: acao.year,
                place: acao.place,
                content: acao.content,
                primary_color: acao.primary_color,
                secondary_color: acao.secondary_color,
                image: acao.image,
                gallery: acao.gallery,
              },
            }}
          >Conhecer +</Link>
        </div>
      </div>
    </div>
  )
}
export default LineComponent1