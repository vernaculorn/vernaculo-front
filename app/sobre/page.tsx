import Image from "next/image";
import { leagueGothic } from "../ui/fonts";
import AboutInfo from "../ui/about/about-info";
import Carrossel from "../ui/about/carrossel";
import MoreInformation from "../ui/about/MoreInformation";
import SVGBorder1 from "../icons/SVGBorder1";

export default function About() {
    const images = [
        { src: '/images/about/img2.png', id: 1 },
        { src: '/images/about/img3.png', id: 2 },
        { src: '/images/about/img4.png', id: 3 },
    
        // IMAGES EXTRAS
        { src: '/images/about/img2.png', id: 4 },
        { src: '/images/about/img3.png', id: 5 },
        { src: '/images/about/img4.png', id: 6 },
        { src: '/images/about/img2.png', id: 7 },
        { src: '/images/about/img3.png', id: 8 },
        { src: '/images/about/img4.png', id: 9 },
    ]

    return (
        <div className="relative">
            <div className="absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-bl from-violet-600/60 via-blue-400/60 to-blue-400/60"></div>

            <div className="relative flex flex-col py-10 md:px-20 lg:px-40 justify-center items-center bg-[url('/images/about/hero.png')] bg-cover min-h-screen h-full">
                <div className="relative z-20 flex flex-col items-center">
                    <Image src="/assets/barra_superior.png" className="w-full object-cover" alt="Logo" width={1022} height={657} />
                    <div className="text-white p-8 w-full">
                        <div className={leagueGothic.className + `tracking-wide text-4xl mb-4`}>
                            <h1>SOBRE O VERNÁCULO</h1>
                        </div>
                        <div className={`flex flex-col md:flex-row gap-4`}>
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
                    <Image src="/assets/barra_inferior.png" className="w-full object-cover" alt="Logo" width={1022} height={657} />
                </div>
                <SVGBorder1 className="absolute bottom-0 fill-current text-white " />
            </div>
            
            <div className="relative z-10 px-4 py-24">
                <AboutInfo />
            </div>

            <div className="relative z-10">
                <Carrossel images={images} />
            </div>

            <div className="relative z-10">
                <MoreInformation />
            </div>
        </div>
    );
}