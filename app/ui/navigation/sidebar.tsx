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
        <div className="flex flex-col items-center w-full">

            <div className="flex w-full">
                <Image src={'/logo/vernaculo.png'} className="w-32 mx-auto" alt="logo" width={1688} height={718} />
            </div>
            <XMarkIcon onClick={handleOpen} className={`h-8 w-8 absolute right-0 text-black ${isOpen ? 'block' : 'hidden'}`} />
            <Bars3Icon onClick={handleOpen} className={`h-8 w-8  absolute right-0 text-black ${isOpen ? 'hidden' : 'block'}`} />
            {isOpen && (
                <div className="">
                    <div className="max-h-8 flex gap-2 mx-auto justify-center">
                        <a className="max-w-6" href="#"><Image src="/icons/email.png" alt="User" width={114} height={114} /></a>
                        <a className="max-w-6" href="#"><Image src="/icons/facebook.png" alt="User" width={114} height={114} /></a>
                        <a className="max-w-6" href="#"><Image src="/icons/instagram.png" alt="User" width={114} height={114} /></a>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-right text-black text-xl p-8">
                        <NavLinks />
                    </div>
                </div>
            )}
        </div>
    )
}