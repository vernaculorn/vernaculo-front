'use client'

import Image from "next/image"
import { useState } from "react"

export default function AboutInfo() {

    const [activeCardId, setActiveCardId] = useState(0);

    function handleActivation(cardId: number) {
        if (activeCardId === cardId) {
            setActiveCardId(0);
        } else {
            setActiveCardId(cardId);
        }
    }

    return (
        <div className="container mx-auto w-auto flex flex-col items-center gap-4 justify-center ">
            {/* BUTTONS ANIMADOS (2° SECTION) */}
            <div className={`container mx-auto w-auto gap-1 flex flex-wrap justify-center ${activeCardId != 0 ? '[&>div]:w-16 [&>div]:h-16' : ''}`} >
                <div onClick={() => handleActivation(1)} className={`flex flex-col justify-center items-center gap-4 border-4 p-4 rounded-full w-32 h-32 transition-all duration-300 ${activeCardId != 0 ? '[&>p]:hidden' : ''} ${activeCardId == 1 ? 'border-purple-500' : ''}`}>
                    <Image src="/icons/maquina-fotografica.png" className="" alt="Logo" width={32} height={32} />
                    <p className="text-white text-sm tracking-wide font-semi">PRESERVAÇÃO</p>
                </div>
                <div onClick={() => handleActivation(2)} className={`flex flex-col justify-center items-center gap-4 border-4 p-4 rounded-full w-32 h-32 transition-all duration-300 ${activeCardId != 0 ? '[&>p]:hidden' : ''} ${activeCardId == 2 ? 'border-purple-500' : ''}`}>
                    <Image src="/icons/luminaria.png" className="" alt="Logo" width={32} height={32} />
                    <p className="text-white text-sm tracking-wide font-semi">ESTUDO</p>
                </div>
                <div onClick={() => handleActivation(3)} className={`flex flex-col justify-center items-center gap-4 border-4 p-4 rounded-full w-32 h-32 transition-all duration-300 ${activeCardId != 0 ? '[&>p]:hidden' : ''} ${activeCardId == 3 ? 'border-purple-500' : ''}`}>
                    <Image src="/icons/luminaria.png" className="" alt="Logo" width={32} height={32} />
                    <p className="text-white text-sm tracking-wide font-semi">DIVULGAÇÃO</p>
                </div>
                <div onClick={() => handleActivation(4)} className={`flex flex-col justify-center items-center gap-4 border-4 p-4 rounded-full w-32 h-32 transition-all duration-300 ${activeCardId != 0 ? '[&>p]:hidden' : ''} ${activeCardId == 4 ? 'border-purple-500' : ''}`}>
                    <Image src="/icons/rede-pessoas.png" className="" alt="Logo" width={32} height={32} />
                    <p className="text-white text-sm tracking-wide font-semi">PROMOÇÃO</p>
                </div>
            </div>
            {/*|||||||||||||||||||||||||||||||||*/}

            {/* INFORMAÇÕES DOS BUTTONS (2° SECTION) */}
            <div className="container w-full gap-1 flex flex-wrap">

                <div className={`flex flex-col lg:flex-row  w-full justify-center items-center px-auto  gap-2 transition-all ${activeCardId != 1 ? 'hidden' : 'block'}`}>
                    <div onClick={() => handleActivation(1)} className="flex flex-col border-4 text-center border-purple-500 p-4 rounded-full max-w-32 h-32 justify-center items-center gap-4 ">
                        <Image src="/icons/maquina-fotografica.png" className="" alt="Logo" width={32} height={32} />
                        <p className="text-white text-sm tracking-wide font-semi">PRESERVAÇÃO</p>
                    </div>
                    <p className={`text-white text-sm`}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde et aliquid, blanditiis quisquam,
                        eaque ullam illo nesciunt aperiam facere quibusdam possimus nulla tempore repudiandae sapiente
                        magni architecto quo voluptate accusantium!
                        Inventore, aspernatur numquam ad earum labore accusantium similique dignissimos? Nisi illum perspiciatis
                        atque facere eos cumque nobis nemo, architecto nam, maxime recusandae repellat iste ipsa modi voluptatem
                        nihil autem dignissimos?
                    </p>
                </div>
                <div className={`flex flex-col lg:flex-row w-full justify-center items-center px-auto  gap-2 transition-all ${activeCardId != 2 ? 'hidden' : 'block'}`}>
                    <div onClick={() => handleActivation(2)} className="flex flex-col border-4 text-center border-purple-500 p-4 rounded-full min-w-32 max-w-32 h-32 justify-center items-center gap-4 ">
                        <Image src="/icons/luminaria.png" className="" alt="Logo" width={32} height={32} />
                        <p className="text-white text-sm tracking-wide min-w-full font-semi">ESTUDO</p>
                    </div>
                    <p className={`transition-all w-full duration-1000 text-white text-sm`}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde et aliquid, blanditiis quisquam,
                        eaque ullam illo nesciunt aperiam facere quibusdam possimus nulla tempore repudiandae sapiente
                        magni architecto quo voluptate accusantium!
                        Inventore, aspernatur numquam ad earum labore accusantium similique dignissimos? Nisi illum perspiciatis
                        atque facere eos cumque nobis nemo, architecto nam, maxime recusandae repellat iste ipsa modi voluptatem
                        nihil autem dignissimos?
                    </p>
                </div>
                <div className={`flex flex-col lg:flex-row w-full justify-center items-center px-auto  gap-2 transition-all ${activeCardId != 3 ? 'hidden' : 'block'}`}>
                    <div onClick={() => handleActivation(3)} className="flex flex-col border-4 text-center border-purple-500 p-4 rounded-full min-w-32 max-w-32 h-32 justify-center items-center gap-4 ">
                        <Image src="/icons/luminaria.png" className="" alt="Logo" width={32} height={32} />
                        <p className="text-white text-sm tracking-wide font-semi">DIVULGAÇÃO</p>
                    </div>
                    <p className={`transition-all duration-1000 text-white text-sm`}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde et aliquid, blanditiis quisquam,
                        eaque ullam illo nesciunt aperiam facere quibusdam possimus nulla tempore repudiandae sapiente
                        magni architecto quo voluptate accusantium!
                        Inventore, aspernatur numquam ad earum labore accusantium similique dignissimos? Nisi illum perspiciatis
                        atque facere eos cumque nobis nemo, architecto nam, maxime recusandae repellat iste ipsa modi voluptatem
                        nihil autem dignissimos?
                    </p>
                </div>
                <div className={`flex flex-col lg:flex-row w-full justify-center items-center px-auto gap-2 transition-all ${activeCardId != 4 ? 'hidden' : 'block'}`}>
                    <div onClick={() => handleActivation(4)} className="flex flex-col border-4 text-center border-purple-500 p-4 rounded-full max-w-32 h-32 justify-center items-center gap-4">
                        <Image src="/icons/rede-pessoas.png" className="" alt="Logo" width={32} height={32} />
                        <p className="text-white tracking-wide font-semi">PROMOÇÃO</p>
                    </div>
                    <p className={`transition-all duration-1000 text-white text-sm`}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde et aliquid, blanditiis quisquam,
                        eaque ullam illo nesciunt aperiam facere quibusdam possimus nulla tempore repudiandae sapiente
                        magni architecto quo voluptate accusantium!
                        Inventore, aspernatur numquam ad earum labore accusantium similique dignissimos? Nisi illum perspiciatis
                        atque facere eos cumque nobis nemo, architecto nam, maxime recusandae repellat iste ipsa modi voluptatem
                        nihil autem dignissimos?
                    </p>
                </div>
            </div>
            {/*|||||||||||||||||||||||||||||||||*/}


        </div>
    )
}