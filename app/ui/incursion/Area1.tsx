import React from 'react'
import SVGMap from './SVGMap'
import Listbox1 from './Listbox1'

// TIPAGEM PARA SUPORTE DE PROPS
interface Area1Props {
  idMap: number;
  setIdMap: (id: number) => void;
}
const Area1: React.FC<Area1Props> = ({ idMap, setIdMap }) => {
  return (
    <div className='relative border-2 border-slate-400 p-10 gap-10 bg-black/50 flex flex-col w-full h-full'>

      {/* LISTAGEM DINAMICA DE DADOS */}
      <div className='mt-auto'><Listbox1 idMap={idMap} CardName='Materiais' /></div>
      <div className=''><Listbox1 idMap={idMap} CardName='Artifices' /></div>
      {/* |||||||||||||||||||| */}

      {/* SVG "BUTTONS" PARA ALTERAÇÃO DE DADOS */}
      <div className='mb-auto'><SVGMap idMap={idMap} setIdMap={setIdMap} /></div>
    </div>
  )
}

export default Area1