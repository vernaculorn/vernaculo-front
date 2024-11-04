import React from 'react'
import Image from "next/image";
import TextInformation from './TextInformation'
import Listbox1 from './Listbox1';

// TIPAGEM PARA SUPORTE DE PROPS
interface Area2Props {
  idMap: number;
  setIdMap: (id: number) => void;
}

const Area2: React.FC<Area2Props> = ({ idMap, setIdMap }) => {
  return (
    <div className='relative py-5 w-full max-w-screen-lg md:min-w-[30rem] lg:min-w-[30rem] mx-auto min-h-screen bg-slate-200 flex flex-col'>
      <div className='flex flex-col  h-full w-full'>

        {/* TEXT INFORMATION E GALERIA */}
        <div className='w-full  px-5 flex flex-col gap-5 mx-auto mb-auto'>
          {/* LISTAGEM DINAMICA DE DADOS */}
          <div className='w-full'><Listbox1 idMap={idMap} CardName='Artifices' /></div>

          <div className='min-w-full'><Listbox1 idMap={idMap} CardName='Materiais' /></div>
        </div>
        {/* |||||||||||||||||||||||||| */}
      </div>
    </div>
  )
}

export default Area2