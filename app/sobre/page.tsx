import Image from "next/image";
import { leagueGothic } from "../ui/fonts";
import AboutInfo from "../ui/about/about-info";

export default function About() {
    return (
        <div className="relative">
            <div className="absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-bl from-violet-600/60 via-blue-400/60 to-blue-400/60"></div>
            <div className="relative flex flex-col justify-center items-center bg-[url('/images/about/hero.png')] bg-cover h-screen px-8">
                <div className="relative z-10 flex flex-col items-center">
                    <Image src="/assets/barra_superior_pontilhada.png" className="w-full object-cover" alt="Logo" width={1022} height={657} />
                    <div className="text-white p-8 max-w-4xl">
                        <div className={leagueGothic.className + `tracking-wide text-4xl mb-4`}>
                            <h1>SOBRE O VERNÁCULO</h1>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, optio. Quae, harum id 
                                cum rerum inventore voluptas explicabo exercitationem minus totam eaque alias soluta natus 
                                obcaecati facere. Illum, aperiam vel.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, optio. Quae, harum id 
                                cum rerum inventore voluptas explicabo exercitationem minus totam eaque alias soluta natus 
                                obcaecati facere. Illum, aperiam vel.
                            </p>
                        </div>
                    </div>
                    <Image src="/assets/barra_inferior_completa.png" className="w-full object-cover" alt="Logo" width={1022} height={657} />
                </div>
            </div>
            <div className="relative z-10 px-4 py-24">
                <AboutInfo />
            </div>
        </div>
    );
}