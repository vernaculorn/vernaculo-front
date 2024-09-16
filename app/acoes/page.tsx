import LineComponent1 from "../ui/actions/lineComponent1";
import LineComponent2 from "../ui/actions/lineComponent2";
import LineComponent3 from "../ui/actions/lineComponent3";

export default function Action() {
    return (
        <div className='bg-stone-200 top-0 left-0 flex flex-col relative'>
            <div className=" text-center font-bold text-4xl mt-20 mb-11">OUTRAS AÇÕES</div>
            <div className="mx-auto justify-center w-full px-10 md:px-24 lg:px-80">
                <p className=" text-center">O Rio Grande do Norte guarda tesouros que ainda não foram descobertos. Eles estão em
                    todas as regiões do estado, do extenso litoral à vasta zona do Sertão, nas mãos de
                    inúmeros artistas e artesãos que criam, a partir de materiais da natureza local.</p>
            </div>
            {/* COMPONENTES INFORMATIVOS */}
            <div className="flex flex-col my-32 gap-5">
                <div className="relative"><LineComponent1 /></div>
                <div className="relative"><LineComponent2 /></div>
                <div className="relative"><LineComponent3 /></div>
            </div>
        </div>
    );
}
