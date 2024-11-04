import React from 'react'
import SVGMap from './SVGMap'
import Listbox1 from './Listbox1'
import TextInformation from './TextInformation';

// TIPAGEM PARA SUPORTE DE PROPS
interface Area1Props {
  idMap: number;
  setIdMap: (id: number) => void;
}
const Area1: React.FC<Area1Props> = ({ idMap, setIdMap }) => {
  
  // Region GET por id
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

  return (
    <div className='relative border-2 border-slate-400 p-5 py-10 bg-black/50 flex flex-col  md:min-w-[40rem] lg:min-w-96 w-full h-full'>
      <div>
        {/* SVG "BUTTONS" PARA ALTERAÇÃO DE DADOS */}
        <div className='mb-auto'><SVGMap idMap={idMap} setIdMap={setIdMap} /></div>

        {/* images= {data.images} (Region data) */}
        <TextInformation className='relative text-white' idMap={idMap} setIdMap={setIdMap} text={'data.content'} images={[]} />
      </div>
    </div>
  )
}

export default Area1