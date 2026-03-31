'use client'

import Image from "next/image";
import { useState } from "react";
import { leagueGothic } from "./ui/fonts";
import SVGBorder from "./icons/SVGBorder";

export default function About() {
    const [active, setActive] = useState(1);

    const items = [
        {
            label: "PRESERVAÇÃO",
            icon: "/icons/camera.webp",
            description: "O Rio Grande do Norte guarda tesouros que ainda não foram descobertos. Eles estão em todas as regiões do estado, do extenso litoral à vasta zona do Sertão, nas mãos de inúmeros artistas e artesãos que criam, a partir de materiais da natureza local (argila, madeira, fibras, couro, pedra, areia, entre outros), objetos com diferentes formas e diversas funções (utilitária, decorativa, ritualística, lúdica, poética)."
        },
        {
            label: "ESTUDO",
            icon: "/icons/luminaria.webp",
            description: "O cuidado em identificar pontos críticos no consenso sobre a necessidade de qualificação deve passar por modificações independentemente das direções preferenciais no sentido do progresso. Ainda assim, existem dúvidas a respeito de como a determinação clara de objetivos acarreta um processo de reformulação e modernização do retorno esperado a longo prazo."
        },
        {
            label: "DIVULGAÇÃO",
            icon: "/icons/megafone.webp",
            description: "A certificação de metodologias que nos auxiliam a lidar com o início da atividade geral de formação de atitudes aponta para a melhoria das diretrizes de desenvolvimento para o futuro. Pensando mais a longo prazo, o desafiador cenário globalizado pode nos levar a considerar a reestruturação do investimento em reciclagem técnica."
        },
        {
            label: "PROMOÇÃO",
            icon: "/icons/rede-pessoas.webp",
            description: "As experiências acumuladas demonstram que o desenvolvimento contínuo de distintas formas de atuação talvez venha a ressaltar a relatividade do remanejamento dos quadros funcionais. O incentivo ao avanço tecnológico, assim como a estrutura atual da organização não pode mais se dissociar das condições financeiras e administrativas exigidas."
        },
    ];

    return (
        <div className="w-full bg-[#1E1E1E] text-white">

            {/* HERO */}
            <section
                className="relative w-full h-[450px] lg:h-[600px] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('/images/about/hero1.webp')" }}
            >
                {/* OVERLAY CORRETO */}
                <div className="absolute inset-0 bg-[#6F2C00]/40" />

                <h1 className={`${leagueGothic.className} relative z-10 text-center text-4xl md:text-7xl px-4`}>
                    ARTE E ARTEFATO POPULAR <br />
                    DO RIO GRANDE DO NORTE
                </h1>
            </section>

            {/* PROJETO */}
            <section className="py-10 px-4 flex flex-col items-center justify-center">
                <SVGBorder invert={true} />
                <div className="w-full max-w-5xl py-6 border-y-4 border-white">
                    <h2 className={`${leagueGothic.className} text-5xl mb-8`}>
                        PROJETO VERNÁCULO
                    </h2>

                    <div className="flex flex-col md:flex-row gap-10 text-sm md:text-base leading-relaxed mb-16">
                        <p className="md:w-1/2">
                            O Rio Grande do Norte guarda tesouros que ainda não foram descobertos. Eles estão em  todas a regiões do estado, do extenso litoral à vasta zona do Sertão, nas mãos de inúmeros artistas e artesãos que criam, a partir de materiais da natureza local (argila, madeira, fibras, couro, pedra, areia, entre outros), objetos com diferentes formas e diversas funções (utilitária, decorativa, ritualística, lúdica, poética).
                        </p>
                        <p className="md:w-1/2">
                            São homens e mulheres que reproduzem conhecimentos e gestos ancestrais, perpetuando-os de geração em geração, ou que atualizam a tradição com elementos da contemporaneidade, provando a impressionante capacidade de adaptação e renovação da criação popular.
                        </p>
                    </div>

                    {/* TIMELINE */}
                    <div className="flex justify-between items-start">

                        {items.map((item, index) => {
                            const isActive = active === index;

                            return (
                                <div
                                    key={index}
                                    onClick={() => setActive(index)}
                                    className="flex flex-col items-center cursor-pointer"
                                >
                                    <div className="relative flex flex-col items-center">

                                        <div className={`
                                            w-24 h-24 flex flex-col items-center justify-center rounded-full border-2 text-center px-2
                                            ${isActive ? "border-orange-500" : "border-white/30"}
                                        `}>
                                            <Image src={item.icon} width={24} height={24} alt="" />
                                            <span className={`mt-1 text-[10px] ${isActive ? "text-orange-500" : "text-white"}`}>
                                                {item.label}
                                            </span>
                                        </div>

                                        {/* BARRA */}
                                        <div className="absolute top-full w-[2px] h-[32px] overflow-hidden">
                                            <div className={`
                                                w-full h-full bg-orange-500 origin-top
                                                transition-transform duration-500
                                                ${isActive ? "scale-y-100" : "scale-y-0"}
                                            `}/>
                                        </div>

                                    </div>
                                </div>
                            );
                        })}

                    </div>

                    {/* LINHA */}
                    <div className="w-full h-[2px] bg-white/20 mt-8 relative">
                        <div
                            className="absolute top-0 h-[2px] bg-orange-500 transition-all duration-500"
                            style={{
                                left: `${(active * 100) / items.length}%`,
                                width: `${100 / items.length}%`
                            }}
                        />
                    </div>

                    {/* TEXTO */}
                    <div className="flex justify-center mt-6">
                        <div className="max-w-xl text-center">
                            <p className="text-sm leading-relaxed">
                                {items[active].description}
                            </p>
                        </div>
                    </div>
                </div>
                <SVGBorder />
            </section>

            {/* FRASE */}
            <section
                className="relative h-[700px] md:h-[1200px] w-full flex flex-col items-center justify-start bg-cover"
                style={{ backgroundImage: "url('/images/about/hero1.webp')" }}
            >
                <div className="absolute inset-0 bg-[#1E1E1E]/60" />

                <div className="relative z-10 w-full max-w-5xl flex justify-start p-8 md:p-16 md:ml-48">
                  <h3 className={`${leagueGothic.className} relative z-10 text-right text-3xl md:text-4xl mb-8`}>
                    MÃOS QUE, EM <br />
                    CADA GESTO, CRIAM <br />
                    BELEZA E POESIA
                  </h3>
                </div>

                <div className="w-full text-center bg-[#1E1E1E] p-4 md:p-16 z-50">
                    <SVGBorder invert={true} />
                    <div className="max-w-3xl mx-auto py-10 px-4 border-y-4 border-white">
                        <div className="max-w-3xl mx-auto">
                            <iframe
                            className="w-full aspect-video"
                            src="https://www.youtube.com/embed/09OwlbbsqCQ"
                            allowFullScreen
                            />

                        </div>
                    </div>
                    <SVGBorder />
                </div>
            </section>

        </div>
    );
}