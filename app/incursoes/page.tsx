'use client'
import React, { useState } from 'react'
import Area1 from '../ui/incursion/Area1'
import Area2 from '../ui/incursion/Area2'


export default function Incursion() {

  // STATE ID ALTERADO NO SVG PARA REQUISIÇÕES
  const [idMap, setIdMap] = useState<number>(0)

  return (
    <div className='flex gap-5 relative justify-center bg-no-repeat min-h-screen h-full w-full bg-center bg-cover bg-[url("/images/action/imgBG3.png")]'>
      <div className=' h-full absolute bg-cover bg-no-repeat bg-[url("/images/incursion/MascaraBG1.png")]'></div>

      <div className='gap-2 h-full px-2 lg:px-5 md:px-5 flex flex-col lg:flex-row'>
        <div className='lg:max-w-[30rem] py-5 w-full'>

          {/* PRIMEIRA BOX CONTENDO MAPA E LISTAS */}
          <div className='relative bg-black/50 flex flex-col h-full'>
            <Area1 idMap={idMap} setIdMap={setIdMap}/>
          </div>
          {/* |||||||||||||||||||| */}
        </div>

          {/* SEGUNDA BOX VIDEO, SOBRE E GALERIA */}
        <div className='w-full mx-auto py-5'>
          <Area2 idMap={idMap} setIdMap={setIdMap} />
        </div>
          {/* |||||||||||||||||||| */}
      </div>

    </div>
  )
}