'use client'
import { useEffect, useState } from "react";
import ActionCard from "../ui/actions/ActionCard";
import { Action } from "../types/action";

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
    const [actions, setActions] = useState<Actions|null>({
        current_page: 1,
        data: [],
        first_page_url: '',
        from: 1,
        last_page: 1,
        last_page_url: '',
        links: [],
        next_page_url: '',
        path: '',
        per_page: 1,
        prev_page_url: '',
        to: 1,
        total: 1
    })

    const handleFetch = async () => {
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/actions')
            if (!response.ok) {
                throw new Error('Erro ao buscar dados')
            } else {
                let json = await response.json()
                let data = json
                console.log(data)
                setActions(data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        handleFetch();
    }, [])

    return (
        <div className='bg-stone-200 top-0 left-0 flex flex-col relative'>
            <div className=" text-center font-bold text-4xl mt-20 mb-11">OUTRAS AÇÕES</div>
            <div className="mx-auto justify-center w-full px-10 md:px-24 lg:px-80">
                <p className=" text-center">O Rio Grande do Norte guarda tesouros que ainda não foram descobertos. Eles estão em
                    todas as regiões do estado, do extenso litoral à vasta zona do Sertão, nas mãos de
                    inúmeros artistas e artesãos que criam, a partir de materiais da natureza local.</p>
            </div>
            <div className="flex flex-col my-32 gap-5">
                {actions?.data?.map((action, index) => (
                    <div key={index} className="relative"><ActionCard action={action} /></div>
                ))}
            </div>
        </div>
    );
}
