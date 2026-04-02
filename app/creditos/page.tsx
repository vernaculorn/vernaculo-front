'use client'

import { useState } from 'react'
import SVGBorder from '../icons/SVGBorder'
import { Users, Handshake, ChevronDown, Landmark, Building2 } from 'lucide-react'
import equipe from './equipe.json'
import parceiros from './parceiros.json'

export default function Creditos() {
  const [equipeOpen, setEquipeOpen] = useState(false)
  const [parceirosOpen, setParceirosOpen] = useState(false)

  return (
    <div className='bg-[#1E1E1E]'>
        {/* BANNER */}
        <div
            className="w-full h-64 md:h-96 bg-cover bg-center"
            style={{ backgroundImage: "url('/bg/banner-creditos.webp')" }}
        />

        <div className="py-12">
            <SVGBorder invert />
            <div className="max-w-7xl mx-auto text-white border-t-4 border-b-4 border-[#ffffff] py-12 text-center">
                {/* CARD EQUIPE */}
                <div
                    className="w-full h-72 md:h-96 bg-cover bg-center relative mb-8"
                    style={{ backgroundImage: "url('/bg/banner-equipe.webp')" }}
                >
                    <div
                    className="absolute inset-0 bg-orange-600/80"
                    style={{ clipPath: 'polygon(0 0, 46% 0, 60% 100%, 0 100%)' }}
                    />
                    <div className="absolute left-0 top-0 h-full w-1/2 flex flex-col justify-center px-10 z-10">
                    <p className="text-white text-sm leading-relaxed text-left">
                        Este projeto é composto por profissionais dos Departamentos de Artes e
                        Departamento de Design da UFRN em parceria com profissionais de TI.
                    </p>
                    <button
                        onClick={() => setEquipeOpen(!equipeOpen)}
                        className="mt-5 self-start flex items-center gap-1 px-4 py-1 border-2 border-white text-white text-sm"
                    >
                        {equipeOpen ? 'fechar -' : 'conhecer +'}
                        <ChevronDown
                            size={14}
                            className={`transition-transform duration-300 ${equipeOpen ? 'rotate-180' : ''}`}
                        />
                    </button>
                    </div>
                    <div className="absolute right-0 top-0 h-full w-1/2 flex flex-col items-center justify-center gap-2">
                        <Users className="text-white" size={36} strokeWidth={1.5} />
                        <span className="text-white font-bold text-2xl uppercase tracking-widest">EQUIPE</span>
                    </div>
                </div>

                {/* EQUIPE EXPAND */}
                <div
                    className={`overflow-hidden transition-all duration-500 ${equipeOpen ? 'max-h-[1200px] mb-8' : 'max-h-0'}`}
                >
                    <div>
                        {/* Título */}
                        <div className="bg-orange-600/40 border-b-4 border-orange-600 px-5 py-3 flex items-center gap-3 mb-4">
                            <Users className="text-white shrink-0" size={20} strokeWidth={1.5} />
                            <h2 className="text-white font-bold text-sm uppercase tracking-widest">
                                Membros da Equipe
                            </h2>
                        </div>
                        {/* Lista de membros */}
                        <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                            {equipe.map((membro, i) => (
                                <div key={i} className="bg-[#333333] border-l-4 border-orange-500 px-4 py-3">
                                    <p className="text-white font-bold text-sm">{membro.nome}</p>
                                    <p className="text-orange-400 text-xs mt-1">{membro.cargo}</p>
                                    <p className="text-gray-400 text-xs mt-0.5">{membro.email}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CARD PARCEIROS */}
                <div
                    className="w-full h-72 md:h-96 bg-cover bg-center relative"
                    style={{ backgroundImage: "url('/bg/banner-parceiros-1.webp')" }}
                >
                    <div
                    className="absolute inset-0 bg-teal-600/80"
                    style={{ clipPath: 'polygon(54% 0, 100% 0, 100% 100%, 40% 100%)' }}
                    />
                    <div className="absolute left-0 top-0 h-full w-1/2 flex flex-col items-center justify-center gap-2">
                        <Handshake className="text-white" size={36} strokeWidth={1.5} />
                        <span className="text-white font-bold text-2xl uppercase tracking-widest">PARCEIROS</span>
                    </div>
                    <div className="absolute right-0 top-0 h-full w-1/2 flex flex-col justify-center items-end px-10 text-right z-10">
                    <p className="text-white text-sm leading-relaxed">
                        Empresas e organizações que colaboraram para tornar o Projeto Vernáculo realidade.
                    </p>
                    <button
                        onClick={() => setParceirosOpen(!parceirosOpen)}
                        className="mt-5 self-end flex items-center gap-1 px-4 py-1 border-2 border-white text-white text-sm"
                    >
                        {parceirosOpen ? 'fechar -' : 'conhecer +'}
                        <ChevronDown
                            size={14}
                            className={`transition-transform duration-300 ${parceirosOpen ? 'rotate-180' : ''}`}
                        />
                    </button>
                    </div>
                </div>

                {/* PARCEIROS EXPAND */}
                <div
                    className={`overflow-hidden transition-all duration-500 ${parceirosOpen ? 'max-h-[2400px] mt-8' : 'max-h-0'}`}
                >
                    <div>
                        {/* Parceiros Institucionais */}
                        <div className="bg-teal-600/40 border-b-4 border-teal-600 px-5 py-3 flex items-center gap-3 mb-4">
                            <Landmark className="text-white shrink-0" size={20} strokeWidth={1.5} />
                            <h2 className="text-white font-bold text-sm uppercase tracking-widest">
                                Parceiros Institucionais
                            </h2>
                        </div>
                        <div className="py-4 flex flex-col gap-3 text-left">
                            {parceiros.institucionais.map((p, i) => (
                                <div key={i} className="bg-[#333333] border-l-4 border-teal-500 px-4 py-3 flex items-center justify-between gap-4">
                                    <div className="flex-1">
                                        <p className="text-white font-bold text-xs uppercase tracking-wide">{p.nome}</p>
                                        <p className="text-teal-400 text-xs mt-1">{p.descricao}</p>
                                        {p.url && (
                                            <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 text-xs mt-0.5 hover:text-white block">{p.url}</a>
                                        )}
                                    </div>
                                    {p.logo && (
                                        <img src={p.logo} alt={p.nome} className="h-12 w-auto object-contain shrink-0" />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Banner intermediário */}
                        <div
                            className="w-full h-48 md:h-64 bg-cover bg-center relative my-4"
                            style={{ backgroundImage: "url('/bg/banner-parceiros.webp')" }}
                        >
                            <div className="absolute inset-0 bg-black/50" />
                            <div className="relative h-full flex items-end px-8 pb-8">
                                <p className="text-white font-bold text-2xl md:text-4xl leading-tight max-w-xs">
                                    Por aqueles que empreenderam esforços para tornar o Vernárculo real
                                </p>
                            </div>
                        </div>

                        {/* Parceiros Não Institucionais */}
                        <div className="bg-teal-600/40 border-b-4 border-teal-600 px-5 py-3 flex items-center gap-3 mb-4">
                            <Building2 className="text-white shrink-0" size={20} strokeWidth={1.5} />
                            <h2 className="text-white font-bold text-sm uppercase tracking-widest">
                                Parceiros Não Institucionais
                            </h2>
                        </div>
                        <div className="py-4 flex flex-col gap-3 text-left">
                            {parceiros.nao_institucionais.map((p, i) => (
                                <div key={i} className="bg-[#333333] border-l-4 border-teal-500 px-4 py-3 flex items-center justify-between gap-4">
                                    <div className="flex-1">
                                        <p className="text-white font-bold text-xs uppercase tracking-wide">{p.nome}</p>
                                        <p className="text-teal-400 text-xs mt-1">{p.descricao}</p>
                                        {p.url && (
                                            <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 text-xs mt-0.5 hover:text-white block">{p.url}</a>
                                        )}
                                    </div>
                                    {p.logo && (
                                        <img src={p.logo} alt={p.nome} className="h-12 w-auto object-contain shrink-0" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <SVGBorder />
        </div>
    </div>
  )
}
