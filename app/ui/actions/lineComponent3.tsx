import Link from 'next/link'
import React from 'react'

const LineComponent3 = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center w-full px-0 lg:px-5'>

      {/* PRIMEIRA BOX (TITLE) */}
      <div className='bg-[url("/images/action/imgBG3.png")] bg-no-repeat bg-center bg-cover w-full lg:w-100 lg:min-h-96 max-h-full flex relative'>
        <div className='absolute w-full h-full bg-[#8260ad]/75'></div>
        <div className='flex flex-col w-full h-full my-5 md:my-7'>
          <div className='z-10 mt-auto w-full'>
            <h1 className='w-96 mx-auto font-bold text-2xl text-center border-solid border-b-[#f2f2f2] text-[#f2f2f2] border-b-[8px]'>ESSA NÃO É OZELITA</h1>
          </div>
          <div className='z-10 mb-auto w-96 mx-auto text-right text-[#f2f2f2]'>
            <p>coordenador: Profo Coelho Bezerra<br/>
            Natal, 2016</p>
          </div>
        </div>
      </div>
 
      {/* SEGUNDA BOX (CONTENT) */}
      <div className='flex flex-col relative overflow-hidden text-xl justify-center items-center p-10 [&>div]:p-0 lg:mx-2 bg-[#8260ad] w-full lg:w-[50rem] lg:min-h-96 h-full'>
        <p className='w-full text-white'>O Rio Grande do Norte guarda tesouros que ainda não foram descobertos. Eles estão em
          todas as regiões do estado, do extenso litoral à vasta zona do Sertão, nas mãos de inúmeros
          artistas e artesãos que criam, a partir de materiais da natureza local (argila, madeira, fibras,
          couro, pedra, areia, entre outros), objetos com diferentes formas e diversas funções
          (utilitária, decorativa, ritualística, lúdica, poética).<br />
          <br />
          São homens e mulheres que reproduzem conhecimentos e gestos ancestrais,
          perpetuando-os de geração em geração, ou que atualizam a tradição com elementos da
          contemporaneidade, provando a impressionante capacidade de adaptação e renovação da
          criação popular.</p>
          <div className='p-1 w-full justify-end flex  bottom-0'>
          <Link  className='w-40 text-center bg-transparent border-solid border-4 border-[#333333] text-[#333333]' href={'/acoes/page3'}>Conhecer +</Link>
        </div>
      </div>
    </div>
  )
}
export default LineComponent3