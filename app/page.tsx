import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative w-full">
        <Image src="/images/homepage/1.jpg" className="w-full h-full object-cover" alt="Logo" width={1022} height={657} />
        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black/60 via-transparent"></div>
        <Image src="/assets/wave_top.png" className="absolute bottom-0 w-full" alt="Logo" width={1022} height={657} />
      </div>
    </main>
  );
}
