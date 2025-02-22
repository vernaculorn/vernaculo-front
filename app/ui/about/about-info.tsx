'use client'

import Image from "next/image"
import { useState } from "react"

export default function AboutInfo() {

    const [activeCardId, setActiveCardId] = useState(1);

    function handleActivation(cardId: number) {
        if (activeCardId !== cardId) {
            setActiveCardId(cardId);
        }
    }

    const activeClasses = {
        "active-left": 'border-[#FFD700] border-4',
        "active-right": 'border-[#FFD700] border-4',
        "active-top": 'border-[#FFD700] border-4', 
    }


    return (
        <div className="container mx-auto w-auto flex flex-col items-center gap-4 justify-center">
            {/* BUTTONS ANIMADOS (2° SECTION) */}
            <div className={`container flex-row justify-center items-center sm:hidden flex`}>
                <div onClick={() => handleActivation(1)} className={`flex flex-col cursor-pointer justify-center items-center gap-4 border-4 p-4 rounded-full w-20 h-20 transition-all duration-300 ${activeCardId === 1 ? activeClasses["active-left"] : ''} relative`}>
                    <Image src="/icons/maquina-fotografica.png" className="" alt="Logo" width={18} height={18} />
                    <p className="text-white text-[8px] tracking-wide font-semi">PRESERVAÇÃO</p>
                    <span className={`w-[4px] bg-[#FFD700] absolute transition-all duration-300 ${(activeCardId === 1) ? 'h-[20px] bottom-[-20px]' : 'h-[0px] bottom-0'}`}></span>
                </div>
                <hr className="w-[60px] h-[4px] bg-[#FFFFFF]" />
                <div onClick={() => handleActivation(2)} className={`flex flex-col cursor-pointer justify-center items-center gap-4 border-4 p-4 rounded-full w-20 h-20 transition-all duration-300 ${(activeCardId === 2) ? activeClasses["active-top"] : ''} relative`}>
                    <Image src="/icons/luminaria.png" className="" alt="Logo" width={18} height={18} />
                    <p className="text-white text-[8px] tracking-wide font-semi">ESTUDO</p>
                    <span className={`w-[4px] bg-[#FFD700] absolute transition-all duration-300 ${(activeCardId === 2) ? 'h-[20px] bottom-[-20px]' : 'h-[0] bottom-0'}`}></span>
                </div>
                <hr className="w-[60px] h-[4px] bg-[#FFFFFF]" />
                <div onClick={() => handleActivation(3)} className={`flex flex-col cursor-pointer justify-center items-center gap-4 border-4 p-4 rounded-full w-20 h-20 transition-all duration-300 ${(activeCardId === 3) ? activeClasses["active-top"] : ''} relative`}>
                    <Image src="/icons/megafone.png" className="" alt="Logo" width={18} height={18} />
                    <p className="text-white text-[8px] tracking-wide font-semi">DIVULGAÇÃO</p>
                    <span className={`w-[4px] bg-[#FFD700] absolute transition-all duration-300 ${(activeCardId === 3) ? 'h-[20px] bottom-[-20px]' : 'h-[0] bottom-0'}`}></span>
                </div>
                <hr className="w-[60px] h-[4px] bg-[#FFFFFF]" />
                <div onClick={() => handleActivation(4)} className={`flex flex-col cursor-pointer justify-center items-center gap-4 border-4 p-4 rounded-full w-20 h-20 transition-all duration-300 ${(activeCardId === 4) ? activeClasses["active-right"] : ''} relative`}>
                    <Image src="/icons/rede-pessoas.png" className="" alt="Logo" width={18} height={18} />
                    <p className="text-white text-[8px] tracking-wide font-semi">PROMOÇÃO</p>
                    <span className={`w-[4px] bg-[#FFD700] absolute transition-all duration-300 ${(activeCardId === 4) ? 'h-[20px] bottom-[-20px]' : 'h-[0] bottom-0'}`}></span>
                </div>
            </div>


            <div className={`container flex-row justify-center items-center sm:flex hidden`}>
                <div onClick={() => handleActivation(1)} className={`flex flex-col cursor-pointer justify-center items-center gap-4 border-4 p-4 rounded-full w-36 h-36 transition-all duration-300 ${activeCardId === 1 ? activeClasses["active-left"] : ''} relative`}>
                    <Image src="/icons/maquina-fotografica.png" className="" alt="Logo" width={26} height={26} />
                    <p className="text-white text-[16px] tracking-wide font-semi">PRESERVAÇÃO</p>
                    <span className={`w-[4px] bg-[#FFD700] absolute transition-all duration-300 ${activeCardId === 1 ? 'h-[20px] bottom-[-20px]' : 'h-[0] bottom-0'}`}></span>
                </div>
                <hr className="w-[60px] h-[4px] bg-[#FFFFFF]" />
                <div onClick={() => handleActivation(2)} className={`flex flex-col cursor-pointer justify-center items-center gap-4 border-4 p-4 rounded-full w-36 h-36 transition-all duration-300 ${activeCardId === 2 ? activeClasses["active-top"] : ''} relative`}>
                    <Image src="/icons/luminaria.png" className="" alt="Logo" width={26} height={26} />
                    <p className="text-white text-[16px] tracking-wide font-semi">ESTUDO</p>
                    <span className={`w-[4px] bg-[#FFD700] absolute transition-all duration-300 ${activeCardId === 2 ? 'h-[20px] bottom-[-20px]' : 'h-[0] bottom-0'}`}></span>
                </div>
                <hr className="w-[60px] h-[4px] bg-[#FFFFFF]" />
                <div onClick={() => handleActivation(3)} className={`flex flex-col cursor-pointer justify-center items-center gap-4 border-4 p-4 rounded-full w-36 h-36 transition-all duration-300 ${activeCardId === 3 ? activeClasses["active-top"] : ''} relative`}>
                    <Image src="/icons/megafone.png" className="" alt="Logo" width={26} height={26} />
                    <p className="text-white text-[16px] tracking-wide font-semi">DIVULGAÇÃO</p>
                    <span className={`w-[4px] bg-[#FFD700] absolute transition-all duration-300 ${activeCardId === 3 ? 'h-[20px] bottom-[-20px]' : 'h-[0] bottom-0'}`}></span>
                </div>
                <hr className="w-[60px] h-[4px] bg-[#FFFFFF]" />
                <div onClick={() => handleActivation(4)} className={`flex flex-col cursor-pointer justify-center items-center gap-4 border-4 p-4 rounded-full w-36 h-36 transition-all duration-300 ${activeCardId === 4 ? activeClasses["active-right"] : ''} relative`}>
                    <Image src="/icons/rede-pessoas.png" className="" alt="Logo" width={26} height={26} />
                    <p className="text-white text-[16px] tracking-wide font-semi">PROMOÇÃO</p>
                    <span className={`w-[4px] bg-[#FFD700] absolute transition-all duration-300 ${activeCardId === 4 ? 'h-[20px] bottom-[-20px]' : 'h-[0] bottom-0'}`}></span>
                </div>
            </div>
            {/*|||||||||||||||||||||||||||||||||*/}

            {/* INFORMAÇÕES DOS BUTTONS (2° SECTION) */}
            <div className="container w-full gap-1 flex justify-center items-center">
                <div className={`flex flex-col lg:flex-row w-full justify-center items-center px-auto max-w-[800px] pt-3 gap-2 transition-all durantion-500 ${activeCardId != 1 ? 'hidden' : 'block'} border-t-4 border-[#FFD700]`}>
                    <p className={`text-white text-sm`}>
                        O Rio Grande do Norte guarda tesouros que ainda não foram descobertos. Eles estão em todas as regiões do estado, do extenso litoral à vasta zona do Sertão, nas mãos de inúmeros artistas e artesãos que criam, a partir de materiais da natureza local (argila, madeira, fibras, couro, pedra, areia, entre outros), objetos com diferentes formas e diversas funções (utilitária, decorativa, ritualística, lúdica, poética).
                    </p>
                </div>
                <div className={`flex flex-col lg:flex-row w-full justify-center items-center px-auto max-w-[800px] pt-3 gap-2 transition-all durantion-500 ${activeCardId != 2 ? 'hidden' : 'block'} border-t-4 border-[#FFD700]`}>
                    <p className={`transition-all w-full duration-1000 text-white text-sm`}>
                        O cuidado em identificar pontos críticos no consenso sobre a necessidade de qualificação deve passar por modificações independentemente das direções preferenciais no sentido do progresso. Ainda assim, existem dúvidas a respeito de como a determinação clara de objetivos acarreta um processo de reformulação e modernização do retorno esperado a longo prazo.
                    </p>
                </div>
                <div className={`flex flex-col lg:flex-row w-full justify-center items-center px-auto max-w-[800px] pt-3 gap-2 transition-all durantion-500 ${activeCardId != 3 ? 'hidden' : 'block'} border-t-4 border-[#FFD700]`}>
                    <p className={`transition-all duration-1000 text-white text-sm`}>
                        A certificação de metodologias que nos auxiliam a lidar com o início da atividade geral de formação de atitudes aponta para a melhoria das diretrizes de desenvolvimento para o futuro. Pensando mais a longo prazo, o desafiador cenário globalizado pode nos levar a considerar a reestruturação do investimento em reciclagem técnica.
                    </p>
                </div>
                <div className={`flex flex-col lg:flex-row w-full justify-center items-center px-auto max-w-[800px] pt-3 gap-2 transition-all durantion-500 ${activeCardId != 4 ? 'hidden' : 'block'} border-t-4 border-[#FFD700]`}>
                    <p className={`transition-all duration-1000 text-white text-sm`}>
                        As experiências acumuladas demonstram que o desenvolvimento contínuo de distintas formas de atuação talvez venha a ressaltar a relatividade do remanejamento dos quadros funcionais. O incentivo ao avanço tecnológico, assim como a estrutura atual da organização não pode mais se dissociar das condições financeiras e administrativas exigidas.
                    </p>
                </div>
            </div>
            {/*|||||||||||||||||||||||||||||||||*/}


        </div>
    )
}