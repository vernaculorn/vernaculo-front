import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative w-full max-h-[800px] overflow-hidden">
        <Image src="/images/homepage/1.jpg" className="w-full max-h-screen object-cover" alt="Logo" width={1022} height={657} />
        {/* <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 via-transparent">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFF" fill-opacity="1" d="M0,96L40,101.3C80,107,160,117,240,154.7C320,192,400,256,480,256C560,256,640,192,720,176C800,160,880,192,960,192C1040,192,1120,160,1200,160C1280,160,1360,192,1400,208L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        </div> */}
      </div>
      <div>
        
      </div>
    </main>
  );
}
