'use client'
import React, { useEffect, useState } from 'react'
interface TextInformationProps {
    idMap: number;
    setIdMap: (id: number) => void;
  }

const TextInformation:React.FC<TextInformationProps> = (idMap, setIdMap) => {
    const [textShow, settextShow] = useState(1)

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

    
    function TextShow(props: number) {
        if (textShow == props) {
        } else {
            settextShow(props);
        }
    }




    return (
        <div className='relative'>
            <div className='w-full my-10 flex gap-2'>
                <button onClick={() => TextShow(1)} className={`border-solid w-24 border-t-4 border-l-2 pt-1  ${textShow == 1 ? 'border-slate-700': 'border-slate-500/50' }`}>SOBRE</button>
                <button onClick={() => TextShow(2)} className={`border-solid w-24 border-t-4 border-l-2 pt-1  ${textShow == 2 ? 'border-slate-700': 'border-slate-500/50' }`}>GALERIA</button>
            </div>
            <div className='flex flex-col my-16'>
                <p className={`overflow-auto ${textShow == 1 ? '' : 'hidden'}`}>O Rio Grande do Norte guarda tesouros que ainda não foram descobertos. Eles estão em
                    todas as regiões do estado, do extenso litoral à vasta zona do Sertão, nas mãos de
                    inúmeros artistas e artesãos que criam, a partir de materiais da natureza local (argila,
                    madeira, fibras, couro, pedra, areia, entre outros), objetos com diferentes formas e
                    diversas funções (utilitária, decorativa, ritualística, lúdica, poética).<br /><br />
                    São homens e mulheres que reproduzem conhecimentos e gestos ancestrais,
                    perpetuando-os de geração em geração, ou que atualizam a tradição com elementos da
                    contemporaneidade, provando a impressionante capacidade de adaptação e renovação da
                    criação popular.<br /><br />
                    Eles estão em todas as regiões do estado, do extenso litoral à vasta zona do Sertão, nas
                    mãos de inúmeros artistas e artesãos que criam, a partir de materiais da natureza local
                    (argila, madeira, fibras, couro, pedra, areia, entre outros), objetos com diferentes formas e
                    diversas funções (utilitária, decorativa, ritualística, lúdica, poética).</p>
                <div className={`flex flex-wrap gap-5 overflow-auto ${textShow == 2 ? '' : 'hidden'}`}>

                    <div className='w-32 h-32 bg-slate-600/25'></div>
                    <div className='w-32 h-32 bg-slate-600/25'></div>
                    <div className='w-32 h-32 bg-slate-600/25'></div>
                    <div className='w-32 h-32 bg-slate-600/25'></div>
                </div>
            </div>

        </div>
    )
}

export default TextInformation