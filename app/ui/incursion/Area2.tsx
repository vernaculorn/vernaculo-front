import React from 'react'
import Image from "next/image";
import TextInformation from './TextInformation'

// TIPAGEM PARA SUPORTE DE PROPS
interface Area2Props {
  idMap: number;
  setIdMap: (id: number) => void;
}

const Area2:React.FC<Area2Props> = ({idMap, setIdMap}) => {
  return (
    <div className='relative py-5 px-10 gap-5 min-h-screen bg-slate-200 flex flex-col'>
      <div className='flex flex-col h-full w-full'>

        {/* VÍDEO */}
        <div className='mx-auto mt-10'>
          <Image src="/images/homepage/video.png" className="object-cover object-center rounded-3xl" alt="Logo" width={1022} height={657} />
        </div>
        {/* ||||||| */}

        {/* TEXT INFORMATION E GALERIA */}
        <div className='max-w-full mx-auto mb-auto'>
          <TextInformation idMap={idMap} setIdMap={setIdMap}/>
        </div>
        {/* |||||||||||||||||||||||||| */}
      </div>
    </div>
  )
}

export default Area2