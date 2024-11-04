import Image from "next/image";
import SVGRaiz from "./icons/SVGRaiz";
import SVGBorder1 from "./icons/SVGBorder1";
import SVGBorder2 from "./icons/SVGBorder2";
import homepageCarousel from "./ui/allcarousels/homepageCarousel";
import HomepageCarousel from "./ui/homepage/HomepageCarousel";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="w-full h-full">
      {/* FIRST CONTENT */}
      <HomepageCarousel/>
      <div className="px-10 lg:px-28 my-32">

        {/* BOX VÍDEO */}
        <div className="relative flex border-[10px] lg:border-[17px] border-box_video p-10 m-auto">
          <div className="absolute w-80 lg:w-100 -translate-x-1/2 left-1/2 -translate-y-[8rem] lg:-translate-y-[170px]">
            <SVGRaiz className="fill-current text-box_video object-cover w-full" />
          </div>
          <Image src="/images/homepage/video.png" className="m-auto object-cover" alt="video" width={1022} height={657} />
        </div>
        {/* |||||||||||||||||| */}
      </div>
      </div>


    </main>
  );
}
