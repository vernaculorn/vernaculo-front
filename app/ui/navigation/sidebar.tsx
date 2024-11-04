'use client'
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import NavLinks from "./nav-links";

export default function Sidebar() {

    const [isOpen, setIsOpen] = useState(true);

    function handleOpen() {
        setIsOpen(!isOpen);
    }

    // VERSÃO RESPONSIVA DO HEADER

    return (
        <div className="flex flex-col w-full">
            <div className="">
                <XMarkIcon onClick={handleOpen} className={`h-8 w-8 fixed p-1 m-3 z-50 rounded-full bg-white/50 right-5 text-black ${isOpen ? 'block' : 'hidden'}`} />
                <Bars3Icon onClick={handleOpen} className={`h-8 w-8 fixed p-1 m-3 z-50 rounded-full bg-white/50 right-5 text-black ${isOpen ? 'hidden' : 'block'}`} />
            </div>
            <nav className={`transition-all duration-300 transform ease-in-out fixed h-screen z-50 items-start w-full max-w-60 bg-slate-300/80 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex justify-center my-5">
                    <Image src={'/logo/vernaculo.png'} className="w-32" alt="logo" width={1688} height={718} />
                </div>
                <div className="max-h-8 flex gap-2 justify-center">
                    <a className="max-w-6" href="#"><Image src="/icons/email.png" alt="User" width={114} height={114} /></a>
                    <a className="max-w-6" href="#"><Image src="/icons/facebook.png" alt="User" width={114} height={114} /></a>
                    <a className="max-w-6" href="#"><Image src="/icons/instagram.png" alt="User" width={114} height={114} /></a>
                </div>
                <div className="flex flex-col text-start justify gap-10 text-black text-xl p-8">
                    <NavLinks />
                </div>
            </nav>
        </div>
    )
}