import Image from "next/image";
import NavLinks from "./nav-links";
import Search from "./searchbar";
import Sidebar from "./sidebar";

export default function Navbar() {
    return (
        <>
            <nav className="p-8 bg-white">
                <div className="max-w-6xl mx-auto flex items-center justify-between"> 
                    <Image src="/logo/vernaculo.png" className="w-40" alt="Logo" width={280} height={60} />
                    <div className="hidden w-full lg:flex justify-end gap-8 items-center">
                        <div className="flex items-center gap-4 text-lg">
                            <NavLinks />
                        </div>
                        <Search placeholder="Pesquisar" />
                        {/* <div className="flex gap-2">
                            <Image src="/icons/email.png" className="w-10" alt="User" width={114} height={114} />
                            <Image src="/icons/facebook.png" className="w-10" alt="User" width={114} height={114} />
                            <Image src="/icons/instagram.png" className="w-10" alt="User" width={114} height={114} />
                        </div> */}
                    </div>
                    <div className="lg:hidden">
                        <Sidebar />
                    </div>
                </div>
            </nav>

        </>
    );
}