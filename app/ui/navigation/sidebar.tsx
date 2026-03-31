'use client'

import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { usePathname } from "next/navigation";
import NavLinks from "./nav-links";
import { EmailIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from "../SvgSocialIcons";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    function handleOpen() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <button
                onClick={handleOpen}
                className="fixed right-4 top-4 z-[70] bg-white/80 backdrop-blur rounded-full p-2"
            >
                {isOpen ? (
                    <XMarkIcon className="h-6 w-6 text-black" />
                ) : (
                    <Bars3Icon className="h-6 w-6 text-black" />
                )}
            </button>

            <div
                onClick={handleOpen}
                className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            />

            <nav
                className={`
                    fixed top-20 left-0 h-[calc(100vh-5rem)] w-72 z-50
                    bg-neutral-900/95 backdrop-blur-md
                    transform transition-transform duration-300
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                <div className="flex flex-col gap-6 p-6 text-white text-lg">
                    <NavLinks currentPath={pathname} linkClassName="text-white" />
                </div>

                <div className="mt-auto p-6 flex justify-center gap-4 text-black">
                    <a className="bg-white rounded-full w-9 h-9 flex items-center justify-center">
                        <InstagramIcon />
                    </a>
                    <a className="bg-white rounded-full w-9 h-9 flex items-center justify-center">
                        <EmailIcon />
                    </a>
                    <a className="bg-white rounded-full w-9 h-9 flex items-center justify-center">
                        <FacebookIcon />
                    </a>
                    <a className="bg-white rounded-full w-9 h-9 flex items-center justify-center">
                        <YoutubeIcon />
                    </a>
                </div>
            </nav>
        </>
    );
}