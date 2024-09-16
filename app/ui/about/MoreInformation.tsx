import React from 'react'
import Image from "next/image";
import { leagueGothic } from '../fonts';


const MoreInformation = () => {
    return (
        <div className='flex overflow-hidden justify-center bg-[url("/images/about/imgBG1.png")] bg-no-repeat bg-cover bg-center [&>div]:py-10 h-full brightness-100'>
            <Image src="/images/about/Mascara2.png" className="w-full h-full object-cover absolute" alt="img3" width={1022} height={657} />

            <div className='lg:my-10 md:my-5 my-5 z-10 gap-5 border-dashed border-t-[5px] border-b-[5px] border-white w-full md:w-3/4 lg:w-3/4 h-3/4 flex flex-col justify-around max-w-[95%]'>
                <div className={`w-full text-center text-bold text-white text-lg md:text-xl lg:text-3xl`}>EQUIPE</div>
                <div className='flex w-full justify-center gap-8 text-[8px] md:text-sm lg:text-lg'>
                    <div className='w-full '>
                        <ul className='text-stone-400 text-right w-full'>
                            <li>Coordenação geral e científica</li>
                            <li>Museologia, Conservação e Restauro</li>
                            <li>Produção audiovisual</li>
                            <li>Apoio técnico e científico</li>
                            <li>Web design</li>
                        </ul>
                    </div>
                    <div className='w-full'>
                        <ul className='text-white w-full'>
                            <li>Everardo Ramos, Olavo Bessa e Helena Rugai</li>
                            <li>Alexandre Santos e Vitor Casquín dos Santos</li>
                            <li>Jéssica, Amanda Silva, Taynara Mendonza</li>
                            <li>Elisa Sampaio e Mário Bandeira</li>
                        </ul>
                    </div>
                </div>
                <div className='w-full text-center text-bold text-white text-lg md:text-xl lg:text-3xl'>AGRADECIMENTOS</div>
                <div className='flex w-full justify-center gap-8 text-[8px] md:text-sm lg:text-lg'>
                    <div className='w-full'>
                        <ul className='text-stone-400 text-right w-full h-full'>
                            <li>Prefeitura Municipal de Ceará Mirim</li>
                            <li>Luíza Maria Moreira Pinheiro</li>
                            <li>Lourena Kallahan Soares Pequeno</li>
                            <li>Habib Chalita</li>
                            <li>Luiz Cláudio Penha da Silva</li>
                            <li>Maria Augusta Amaral de Oliveira</li>
                            <li>Prefeitura municipal de Martins</li>
                        </ul>
                    </div>
                    <div className='w-full'>
                        <ul className='text-white w-full'>
                            <li>Secretaria Municipal de Educação de Martins</li>
                            <li>Helena Lúcia</li>
                            <li>Ivanúcia Lópes</li>
                            <li>Romualdo Carneiro</li>
                            <li>Prefeitura Municipal de Pau dos Ferros</li>
                            <li>Maria de Fátima Morais Souza</li>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MoreInformation