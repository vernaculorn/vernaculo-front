'use client'
import { useEffect, useState } from "react";
import ActionCard from "../ui/actions/ActionCard";
import { Action } from "../types/action";
import Image from "next/image";

interface Actions {
    current_page: number;
    data: Action[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: { url: string | null, label: string, active: boolean }[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export default function Actions() {
    const [actions, setActions] = useState<Actions | null>(null)
    const [currentPage, setCurrentPage] = useState(1)

    const handleFetch = async (page: number) => {
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/actions?page=' + page)
            if (!response.ok) throw new Error('Erro ao buscar dados')
            const data = await response.json()
            setActions(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleFetch(currentPage)
    }, [currentPage])

    return (
        <div className='bg-[#1E1E1E] top-0 left-0 flex flex-col relative'>

            {/* BANNER */}
            <div className="relative w-full h-64 md:h-[600px] overflow-hidden">
                <Image
                    src="/bg/meninosJogandoBola.webp"
                    alt="Banner postagens"
                    fill
                    className="object-cover object-center"
                    priority
                />

                {/* DESCRIÇÃO */}
                <div className="absolute bottom-0 left-0 w-full bg-black/50">
                    <div className="max-w-4xl mx-auto pb-4">
                        <p className="text-center pt-8 text-white md:text-xl">Encontre aqui conteúdos diversos sobre a arte e o artefato popular,
                            como: ações do Projeto Vernáculo, reflexões sobre temas tratados
                            no âmbito do projeto, notícias relacionadas a esses temas,
                            resenhas de publicações, entre outros.</p>
                    </div>
                </div>
            </div>

            {/* CARDS */}
            <div className="flex flex-col my-8 gap-5">
                {actions?.data?.map((action, index) => (
                    <div key={index} className="relative"><ActionCard action={action} /></div>
                ))}
            </div>

            {/* PAGINAÇÃO */}
            {actions && actions.last_page > 1 && (
                <div className="flex items-center justify-center gap-1 pb-10">
                    <button
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 bg-stone-300 disabled:opacity-40"
                    >◀</button>

                    {Array.from({ length: actions.last_page }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-3 py-1 ${currentPage === page ? 'bg-orange-500 text-white' : 'bg-stone-300'}`}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage((p) => Math.min(actions.last_page, p + 1))}
                        disabled={currentPage === actions.last_page}
                        className="px-3 py-1 bg-stone-300 disabled:opacity-40"
                    >▶</button>

                    <span className="ml-3 text-stone-600 text-sm">{actions.from}-{actions.to}</span>
                </div>
            )}

        </div>
    );
}
