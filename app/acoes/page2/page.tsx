import Carrossel from '@/app/ui/about/carrossel'
import React from 'react'

export default function tipografia() {
  return (
    <div className='relative flex flex-col w-full lg:p-10 md:p-10 pt-0 bg-slate-100 gap-5'>
      <div className='bg-[url("/images/action/imgBG2.png")] bg-no-repeat bg-center bg-cover w-full h-80 flex relative'>
        <div className='absolute w-full h-full bg-[#4b6ddb]/75'></div>
        <div className='flex flex-col w-full h-full'>
          <div className='z-10 mt-auto w-full'>
            <h1 className='w-96 mx-auto font-bold text-2xl text-center border-solid border-b-[#f2f2f2] text-[#f2f2f2] border-b-[8px]'>ARGILA NÃO É PALHA</h1>
          </div>
          <div className='z-10 mb-auto w-96 mx-auto text-right text-[#f2f2f2]'>
            <p>coordenador: Profo Coelho Bezerra<br />
              Natal, 2016</p>
          </div>
        </div>
      </div>
      <div className='mx-2 md:mx-0 lg:mx-0'>
        <Carrossel />
      </div>
      <div className='m-5 lg:mx-32 md:mx-10'>
        <div className='flex flex-col m-auto p-8 border-solid border-4 border-[#4b6ddb] w-full'>
          <div>
            <h1 className='m-10 ml-24'>ÍNÍCIO DA PESQUISA</h1>
            <p>O Rio Grande do Norte guarda tesouros que ainda não foram descobertos. Eles estão em
              todas as regiões do estado, do extenso litoral à vasta zona do Sertão, nas mãos de inúmeros
              artistas e artesãos que criam, a partir de materiais da natureza local (argila, madeira, fibras,
              couro, pedra, areia, entre outros), objetos com diferentes formas e diversas funções
              (utilitária, decorativa, ritualística, lúdica, poética).<br /><br />
              São homens e mulheres que reproduzem conhecimentos e gestos ancestrais,
              perpetuando-os de geração em geração, ou que atualizam a tradição com elementos da
              contemporaneidade, provando a impressionante capacidade de adaptação e renovação da
              criação popular.O Rio Grande do Norte guarda tesouros que ainda não foram descobertos.
              Eles estão em todas as regiões do estado, do extenso litoral à vasta zona do Sertão, nas
              mãos de inúmeros artistas e artesãos que criam, a partir de materiais da natureza local
              (argila, madeira, fibras, couro, pedra, areia, entre outros), objetos com diferentes formas e
              diversas funções (utilitária, decorativa, ritualística, lúdica, poética).</p></div>
          <div>
            <h1 className='m-10 ml-24'>DESCOBERTAS NA PESQUISA</h1>
            <p>
              São homens e mulheres que reproduzem conhecimentos e gestos ancestrais,
              perpetuando-os de geração em geração, ou que atualizam a tradição com elementos da
              contemporaneidade, provando a impressionante capacidade de adaptação e renovação da
              criação popular.<br /><br />
              O Rio Grande do Norte guarda tesouros que ainda não foram descobertos. Eles estão em
              todas as regiões do estado, do extenso litoral à vasta zona do Sertão, nas mãos de inúmeros
              artistas e artesãos que criam, a partir de materiais da natureza local (argila, madeira, fibras,
              couro, pedra, areia, entre outros), objetos com diferentes formas e diversas funções
              (utilitária, decorativa, ritualística, lúdica, poética).
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}