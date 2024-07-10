'use client'

import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import NavLinks from "./nav-links";

export default function Sidebar() {

    const [ isOpen, setIsOpen ] = useState(true);

    function handleOpen() {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Bars3Icon onClick={handleOpen} className="h-8 w-8 text-black" />
            {   isOpen && (
                <div className="absolute z-50 top-0 left-0 w-screen h-screen bg-white">
                    <div className="relative z-10 flex items-center justify-end p-4">
                        {/* <div className="w-64">
                            <Image src={'/logo/vernaculo.png' } alt="logo" width={1688} height={718} />
                        </div> */}
                        <XMarkIcon onClick={handleOpen} className="h-8 w-8 text-black" />
                    </div>
                    <div className="flex flex-col gap-4 text-right mt-16 text-xl p-8">
                        <NavLinks />
                    </div>
                </div>
            )}
        </div>
    )
}