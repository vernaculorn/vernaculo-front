import Image from "next/image";
import NavLinks from "./nav-links";
import Search from "./searchbar";
import Sidebar from "./sidebar";

export default function Navbar() {
    return (
        <>
            <nav className="p-0 lg:p-8 bg-white">
                <div className="max-w-6xl mx-auto lg:flex items-center relative">
                    <Image src="/logo/vernaculo.png" className="w-40 hidden lg:flex" alt="Logo" width={280} height={60} />
                    <div className="hidden w-full lg:flex justify-end gap-8 items-center">
                        <div className="flex items-center mx-20 gap-4 text-lg">
                            <NavLinks />
                        </div>

                        <div className="flex items-center w-full gap-4 text-lg">
                            <div className="mx-auto">
                                <Search placeholder="Pesquisar" />
                            </div>

                            <div className="max-h-8 w-full flex justify-end gap-2">
                                <a className="min-w-8 max-w-8 hover:" href="#"><Image src="/icons/email.png" alt="User" width={114} height={114} /></a>
                                <a  className="min-w-8 max-w-8" href="#"><Image src="/icons/facebook.png" alt="User" width={114} height={114} /></a>
                                <a className="min-w-8 max-w-8" href="#"><Image src="/icons/instagram.png" alt="User" width={114} height={114} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <Sidebar />
                    </div>
                </div>
            </nav>

        </>
    );
}