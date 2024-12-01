'use client'
import React, { useEffect, useState } from 'react'
interface TextInformationProps {
    idMap?: string;
    setIdMap?: (id: string) => void;
    className?: string
    text: string;
    images: string[];
}

const TextInformation: React.FC<TextInformationProps> = ({ text, images, className, idMap, setIdMap, }) => {
    const [textShow, settextShow] = useState(1)

    function TextShow(props: number) {
        if (textShow == props) {
        } else {
            settextShow(props);
        }
    }

    return (
        <div className={className}>
            <div className='w-full my-10 flex gap-2'>
                <button onClick={() => TextShow(1)} className={`text-[#D2CFCC] border-solid w-24 border-t-4 border-l-2 pt-1  ${textShow == 1 ? 'border-slate-700 text-slate-700' : 'border-slate-500/50'}`}>SOBRE</button>
                <button onClick={() => TextShow(2)} className={`text-[#D2CFCC] border-solid w-24 border-t-4 border-l-2 pt-1  ${textShow == 2 ? 'border-slate-700 text-slate-700' : 'border-slate-500/50'}`}>GALERIA</button>
            </div>
            <div className='flex flex-col my-16'>
                <div className='w-full'>
                    <p dangerouslySetInnerHTML={{ __html: text }} className={`overflow-auto ${textShow == 1 ? '' : 'hidden'}`}></p>
                </div>
                <div className={`flex flex-wrap gap-4 w-full ${textShow == 2 ? '' : 'hidden'}`}>
                    {images.map((img, index) => (
                        <div key={index} style={{backgroundImage: `url(${img})`}} className='w-28 h-28 bg-cover bg-center flex bg-slate-600/25'></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TextInformation