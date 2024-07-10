'use client'

import Image from "next/image"
import { useState } from "react"

export default function AboutInfo () {

     const [activeCardId, setActiveCardId] = useState(1);

    function handleActivation(cardId: number) {
        if (activeCardId === cardId) {
            setActiveCardId(0); // Desativa se o mesmo card for clicado novamente
        } else {
            setActiveCardId(cardId); // Ativa o card clicado
        }
    }

    return (
        <div className="container mx-auto flex flex-col items-center gap-4 justify-center flex-wrap">
            <div onClick={() => handleActivation(1)} className={`flex flex-col justify-center items-center gap-4 border-4 p-4 rounded-xl transition-all duration-1000  ${activeCardId == 1 ? 'border-purple-500' : ''}`}>
                <Image src="/icons/maquina-fotografica.png" className="" alt="Logo" width={32} height={32} />
                <p className="text-white tracking-wide font-semi">PRESERVAÇÃO</p>
                <p className={`transition-all duration-1000 text-white text-sm ${activeCardId == 1 ? 'block' : 'hidden'}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde et aliquid, blanditiis quisquam, 
                    eaque ullam illo nesciunt aperiam facere quibusdam possimus nulla tempore repudiandae sapiente 
                    magni architecto quo voluptate accusantium!
                    Inventore, aspernatur numquam ad earum labore accusantium similique dignissimos? Nisi illum perspiciatis 
                    atque facere eos cumque nobis nemo, architecto nam, maxime recusandae repellat iste ipsa modi voluptatem 
                    nihil autem dignissimos?
                </p>
            </div>
            <div onClick={() => handleActivation(2)} className={`flex flex-col justify-center items-center gap-4 border-4 p-4 rounded-xl transition-all duration-1000  ${activeCardId == 2 ? 'border-purple-500' : ''}`}>
                <Image src="/icons/luminaria.png" className="" alt="Logo" width={32} height={32} />
                <p className="text-white tracking-wide font-semi">ESTUDO</p>
                <p className={`transition-all duration-1000 text-white text-sm ${activeCardId == 2 ? 'block' : 'hidden'}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde et aliquid, blanditiis quisquam, 
                    eaque ullam illo nesciunt aperiam facere quibusdam possimus nulla tempore repudiandae sapiente 
                    magni architecto quo voluptate accusantium!
                    Inventore, aspernatur numquam ad earum labore accusantium similique dignissimos? Nisi illum perspiciatis 
                    atque facere eos cumque nobis nemo, architecto nam, maxime recusandae repellat iste ipsa modi voluptatem 
                    nihil autem dignissimos?
                </p>
            </div>
            <div onClick={() => handleActivation(3)} className={`flex flex-col justify-center items-center gap-4 border-4 p-4 rounded-xl transition-all duration-1000  ${activeCardId == 3 ? 'border-purple-500' : ''}`}>
                <Image src="/icons/luminaria.png" className="" alt="Logo" width={32} height={32} />
                <p className="text-white tracking-wide font-semi">DIVULGAÇÃO</p>
                <p className={`transition-all duration-1000 text-white text-sm ${activeCardId == 3 ? 'block' : 'hidden'}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde et aliquid, blanditiis quisquam, 
                    eaque ullam illo nesciunt aperiam facere quibusdam possimus nulla tempore repudiandae sapiente 
                    magni architecto quo voluptate accusantium!
                    Inventore, aspernatur numquam ad earum labore accusantium similique dignissimos? Nisi illum perspiciatis 
                    atque facere eos cumque nobis nemo, architecto nam, maxime recusandae repellat iste ipsa modi voluptatem 
                    nihil autem dignissimos?
                </p>
            </div>
            <div onClick={() => handleActivation(4)} className={`flex flex-col justify-center items-center gap-4 border-4 p-4 rounded-xl transition-all duration-1000  ${activeCardId == 4 ? 'border-purple-500' : ''}`}>
                <Image src="/icons/rede-pessoas.png" className="" alt="Logo" width={32} height={32} />
                <p className="text-white tracking-wide font-semi">PROMOÇÃO</p>
                <p className={`transition-all duration-1000 text-white text-sm ${activeCardId == 4 ? 'block' : 'hidden'}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde et aliquid, blanditiis quisquam, 
                    eaque ullam illo nesciunt aperiam facere quibusdam possimus nulla tempore repudiandae sapiente 
                    magni architecto quo voluptate accusantium!
                    Inventore, aspernatur numquam ad earum labore accusantium similique dignissimos? Nisi illum perspiciatis 
                    atque facere eos cumque nobis nemo, architecto nam, maxime recusandae repellat iste ipsa modi voluptatem 
                    nihil autem dignissimos?
                </p>
            </div>
            
        </div>
    )
}