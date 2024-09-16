import React, { useEffect, useState } from 'react'
import { leagueGothic } from '../fonts';

interface Listbox1Props {
    CardName: string;
    idMap: number;
}

const Listbox1:React.FC<Listbox1Props> = ({ idMap,CardName }) => {

    // GET POR ID

    // const [data, setData] = useState([]);

    // const handleFetch = async () => {
    //     try {
    //         const response = await axios.get('endpoint'+idMap)
    //         setData(response.data.results)
    //     } catch (error) {
    //         console.log(erros)
    //     }
    // }

    // useEffect(() => {
    //     handleFetch();
    // }, [])


    // ESTIMATIVA DE RESPONSE GET
    const data = [
        { id: 1, name: "Luiz" },
        { id: 2, name: "Bernador" },
        { id: 3, name: "Luce" },
        { id: 4, name: "nome1" },
        { id: 5, name: "nom3" },
    ]
    return (
        <div className='w-full h-40 mx-auto my-5 relative'>
            <div className='p-2 w-full bg-slate-400'>
                <h1 className={leagueGothic.className + `text-lg`}>{CardName}</h1>
            </div>
            <div className='w-full h-full border-solid border-[1px] border-slate-400 overflow-hidden overflow-y-auto'>
                <ul className='px-2 text-white overflow-hidden overflow-y-auto list-inside list-image-checkmark'>
                    {data.map((content) => (
                        <li className='hover:bg-slate-600/30' key={content.id}>{content.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Listbox1