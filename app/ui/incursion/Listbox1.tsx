import React, { useEffect, useState } from 'react'
import { leagueGothic } from '../fonts';
import TextInformation from './TextInformation';

interface Listbox1Props {
    CardName: string;
    idMap: number;
}

const Listbox1: React.FC<Listbox1Props> = ({ idMap, CardName }) => {

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
    // Simulação de resposta de um GET
    const data = [
        { id: 1, name: "Luiz", text: "Informação sobre Luiz", images: ["img1.png", "img2.png"] },
        { id: 2, name: "Bernador", text: "Informação sobre Bernador", images: ["img3.png", "img4.png"] },
        { id: 3, name: "Luce", text: "Informação sobre Luce", images: ["img5.png", "img6.png"] },
        { id: 4, name: "nome1", text: "Informação sobre nome1", images: ["img7.png", "img8.png"] },
        { id: 5, name: "nom3", text: "Informação sobre nom3", images: ["img9.png", "img10.png"] },
        { id: 6, name: "nom3", text: "Informação sobre nom3", images: ["img9.png", "img10.png"] },
        { id: 7, name: "nom3", text: "Informação sobre nom3", images: ["img9.png", "img10.png", 'img10.png',"img9.png", "img10.png", 'img10.png'] },
        { id: 8, name: "nom3", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", images: ["img9.png", "img10.png"] },

    ];

    const [text, setText] = useState<string>(''); // Estado para o texto
    const [images, setImages] = useState<string[]>([]); // Estado para o array de imagens

    const handleItemClick = (content: { text: string, images: string[] }) => {
        setText(content.text);
        setImages(content.images);
    };
    return (
            <div className='min-w-full mx-auto my-5 relative'>
                <div className='p-2 w-full bg-slate-400 rounded-t'>
                    <h1 className={leagueGothic.className + `text-lg`}>{CardName}</h1>
                </div>
                <div className='min-w-full h-40 bg-black/70 rounded-b border-solid border-[1px] border-slate-400 overflow-hidden overflow-y-auto'>
                    <ul className='px-2 text-white overflow-hidden overflow-y-auto list-inside list-image-checkmark'>
                        {data.map((content) => (
                            <li onClick={() => handleItemClick({ text: content.text, images: content.images })} className='hover:bg-slate-600/50' key={content.id}>{content.name}</li>
                        ))}
                    </ul>
                </div>
                <TextInformation className='relative' text={text} images={images} />
            </div>
    )
}

export default Listbox1