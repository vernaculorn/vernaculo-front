import Image from "next/image";
import { leagueGothic } from "./fonts";

export default function Footer() {
    return (
        <>
            <footer className="bg-zinc-400 p-8 text-white">
                <div className="container mx-auto flex flex-col justify-center md:flex-row gap-8">
                    <div className="flex flex-col ">
                        <div className="border-b-2">
                            <h3 className={leagueGothic.className + ` text-[2rem]`}>APOIO</h3>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <Image src="/logo/ufrn1.png" alt="Logo da Universidade Federal do Rio Grande do Norte" width={145} height={60} />
                            <Image src="/logo/cchla1.png" alt="Logo do CCHLA" width={145} height={60} />
                            <Image src="/logo/deart1.png" alt="Logo Departamento de Artes" width={145} height={60} />
                            <Image src="/logo/mcc11.png" alt="Logo do Museu Câmara Cascudo" width={145} height={60} />
                            <Image src="/logo/proex1.png" alt="Logo da PROEX" width={145} height={60} />
                            <Image src="/logo/propesq1.png" alt="Logo da PROPESQ" width={145} height={60} />
                        </div>
                    </div>
                    <div className="flex flex-col border-2 p-2">
                        <h3 className="font-semibold">vernaculo.rn@ufrn.edu.br</h3>
                        <p>84 3215-3550</p>
                        <p>Departamento de Artes da UFRN</p>
                        <p>Av. Senador Salgado Filho, 3000</p>
                        <p>Campus Universitário</p>
                        <p>CEP 59.078-900 - Natal/RN - Brasil</p>
                    </div>
                </div>
            </footer>
        </>
    );
}