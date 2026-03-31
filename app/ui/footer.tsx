import Image from "next/image";
import { leagueGothic } from "./fonts";
import { EmailIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from "./SvgSocialIcons";

export default function Footer() {
    return (
        <footer className="bg-[#D4550A] text-white px-6 py-10">
            <div className="max-w-7xl mx-auto">

                {/* TOPO */}
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">

                    {/* BLOCO APOIO */}
                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                            <h3 className={`${leagueGothic.className} text-4xl`}>
                                APOIO
                            </h3>
                            <div className="flex-1 h-[2px] bg-white/70"></div>
                        </div>

                        <div className="flex flex-wrap items-center gap-6">
                            <Image src="/logo/ufrn1.webp" alt="" width={140} height={60} />
                            <Image src="/logo/cchla1.webp" alt="" width={120} height={60} />
                            <Image src="/logo/deart1.webp" alt="" width={120} height={60} />
                            <Image src="/logo/proex1.webp" alt="" width={120} height={60} />
                            <Image src="/logo/mcc11.webp" alt="" width={120} height={60} />
                        </div>
                    </div>

                    {/* CONTATO + REDES */}
                    <div className="flex flex-col gap-4 min-w-[260px]">

                        {/* TOPO DIREITA */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <span className="font-semibold">
                                vernaculo.rn@gmail.com
                            </span>

                            {/* ICONES */}
                            <div className="flex gap-3">
                                <div className="bg-white text-[#D4550A] rounded-full w-8 h-8 flex items-center justify-center">
                                    <InstagramIcon />
                                </div>
                                <div className="bg-white text-[#D4550A] rounded-full w-8 h-8 flex items-center justify-center">
                                    <EmailIcon />
                                </div>
                                <div className="bg-white text-[#D4550A] rounded-full w-8 h-8 flex items-center justify-center">
                                    <FacebookIcon />
                                </div>
                                <div className="bg-white text-[#D4550A] rounded-full w-8 h-8 flex items-center justify-center">
                                    <YoutubeIcon />
                                </div>
                            </div>
                        </div>

                        {/* INFOS */}
                        <div className="text-sm leading-relaxed text-white/90">
                            <p>84 3215-3550</p>
                            <p>Departamento de Artes da UFRN</p>
                            <p>Av. Senador Salgado Filho, 3000</p>
                            <p>Campus Universitário</p>
                            <p>CEP 59.078-900 — Natal/RN — Brasil</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}