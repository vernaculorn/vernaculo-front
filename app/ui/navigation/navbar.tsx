'use client'

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import NavLinks from "./nav-links";
import Sidebar from "./sidebar";
import Link from "next/link";

export default function Navbar() {
    const [show, setShow] = useState(true);
    const lastScroll = useRef(0);
    const pathname = usePathname();

    useEffect(() => {
        function handleScroll() {
            const currentScroll = window.scrollY;

            if (Math.abs(currentScroll - lastScroll.current) < 10) return;

            if (currentScroll > lastScroll.current && currentScroll > 80) {
                setShow(false);
            } else {
                setShow(true);
            }

            lastScroll.current = currentScroll;
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`
                bg-[#1E1E1E] w-full h-20 fixed top-0 left-0 z-[60]
                transition-transform duration-300
                ${show ? "translate-y-0" : "-translate-y-full"}
            `}
        >
            <div className="max-w-7xl mx-auto flex justify-between px-4 h-full">

                {/* ESQUERDA */}
                <div className="flex items-end gap-8 h-full pb-[10px]">
                    <Link href="/" className="flex items-end relative z-[60]">
                        <span className="text-white font-extrabold text-3xl tracking-widest leading-none">
                            VERNÁCULO
                        </span>
                    </Link>

                    <div className="hidden lg:flex items-end gap-6">
                        <NavLinks currentPath={pathname} />
                    </div>
                </div>

                {/* DIREITA */}
                <div className="flex items-center gap-4 h-full">
                    <div className="lg:hidden">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </nav>
    );
}