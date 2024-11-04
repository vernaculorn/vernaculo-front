'use client'
import LineComponent1 from "../ui/actions/lineComponent1";
interface Acao {
    title: string;
    coordinator: string;
    year: string;
    place: string;
    content: string;
    primary_color: string;
    secondary_color: string;
    image: string;
    gallery: string[];
}
export default function Action() {


    // const [data, setData] = useState([]);

    // const handleFetch = async () => {
    //     try {
    //         const response = await axios.get('endpoint')
    //         setData(response.data.results)
    //     } catch (error) {
    //         console.log(erros)
    //     }
    // }
    // useEffect(() => {
    //     handleFetch();
    // }, [])

    // ------------ Exemplo de entrada Actions ----------
    const ExampleActionsGET: Acao[] = [
        {
            title: 'Teste',
            coordinator: 'Eu mexmo',
            year: '2022',
            place: 'Jucuri',
            content: "O Rio Grande do Norte guarda tesouros que ainda não foram descobertos. Eles estão em...",
            primary_color: '#FFFFFF',
            secondary_color: '#000000',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZrKey5oWV6hb-6cyjEcOWJkEuZ-H-LqVZ3w&s',
            gallery: ['path1.png', 'path2.png']
        },
        {
            title: 'Teste2',
            coordinator: 'Eu mexmo',
            year: '2022',
            place: 'Jucuri',
            content: "O Rio Grande do Norte guarda tesouros que ainda não foram descobertos. Eles estão em...",
            primary_color: '#FFFFFF',
            secondary_color: '#000000',
            image: 'https://cdn.pixabay.com/photo/2016/09/19/21/50/sun-flower-1681385_640.jpg',
            gallery: ['path1.png', 'path2.png']
        }
    ]
    // ------------ Exemplo de entrada Actions ----------

    return (
        <div className='bg-stone-200 top-0 left-0 flex flex-col relative'>

            {/* Texto Fixo da page */}
            <div className=" text-center font-bold text-4xl mt-20 mb-11">OUTRAS AÇÕES</div>
            <div className="mx-auto justify-center w-full px-10 md:px-24 lg:px-80">
                <p className=" text-center">O Rio Grande do Norte guarda tesouros que ainda não foram descobertos. Eles estão em
                    todas as regiões do estado, do extenso litoral à vasta zona do Sertão, nas mãos de
                    inúmeros artistas e artesãos que criam, a partir de materiais da natureza local.</p>
            </div>
            {/* ------------------ */}

            {/* COMPONENTES INFORMATIVOS */}
            <div className="flex flex-col my-32 gap-5">
                {ExampleActionsGET.map((acao, index) => (
                    <div key={index} className="relative"><LineComponent1 acao={acao} /></div>
                ))}
            </div>
        </div>
    );
}
