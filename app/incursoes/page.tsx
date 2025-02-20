'use client'
import React, { useEffect, useState } from 'react'
import SVGMap from '../ui/incursion/SVGMap'
import { Material } from '../types/material'
import { Craftsman } from '../types/craftsman'
import { leagueGothic } from '../ui/fonts'
import { FileProps } from '../types/file'
import Image from 'next/image'
import { Region } from '../types/region'
import { it } from 'node:test'

type ItemProps = {
  name: string,
  slug: string,
  type: string,
  content: string,
  image: FileProps;
  files: FileProps[];
}

export default function Incursion() {
  const [materials, setMaterials] = useState<Material[]>([])
  const [craftsmans, setCraftsmans] = useState<Craftsman[]>([])
  const [regions, setRegions] = useState<Region[]>([])
  const [selectedRegions, setSelectedRegions] = useState<Region[]>([])
  const [item, setItem] = useState<ItemProps | null>(null)
  const [region, setRegion] = useState<Region|undefined>(undefined)
  const [tab, setTab] = useState(1)

  const getMaterials = async () => {
    let url = '/materials?'

    if ((region != undefined) && (region?.slug != 'rio-grande-do-norte')) {
      url += 'region=' + region?.slug + '&'
    }

    if ((item != undefined) && (item?.type == 'craftsman') && (item?.slug != 'artifices')) {
      url += 'craftsman=' + item.slug
    }

    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + url)
    const data = await response.json()

    if (item?.type == 'material') {
      setSelectedRegions(data.find((material: Material) => material.slug == item.slug)?.regions)
    }

    setMaterials(data.filter((material: Material) => material.slug != 'materiais'))
  }

  const getCraftsmans = async () => {
    let url = '/craftsmans?';

    if ((region != undefined) && (region?.slug != 'rio-grande-do-norte')) {
      url += 'region=' + region?.slug + '&'
    }
    
    if ((item != undefined) && (item?.type == 'material') && (item?.slug != 'materiais')) {
      url += 'material=' + item.slug
    }

    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + url)
    const data = await response.json()

    if (item?.type == 'craftsman') {
      setSelectedRegions([data.find((craftsman: Craftsman) => craftsman.slug == item.slug)?.region])
    }

    setCraftsmans(data.filter((craftsman: Craftsman) => craftsman.slug != 'artifices'))
  }

  const getRegions = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/regions')
    const data = await response.json()

    setRegions(data)
  }

  const getItem = async (slug: string, route: string) => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/' + route + '/' + slug)
    const data = await response.json()

    let itemType = '';

    switch (route) {
      case 'materials':
        itemType = 'material'
        break;
      case 'craftsmans':
        itemType = 'craftsman'
        break;
      default:
        itemType = 'region'
        break;
    } 

    setItem({
      name: data.name,
      slug: data.slug,
      type: itemType,
      content: data.content,
      image: data.image,
      files: data.files
    })
  }

  useEffect(() => {
    getMaterials()
    getCraftsmans()
  }, [region, item])

  useEffect(() => {
    getRegions()
  }, [])

  const materialList = (<div className='min-w-full mx-auto my-5 relative'>
    <div className='p-2 w-full bg-[#C5C5C5] rounded-t cursor-pointer' onClick={() => getItem('materiais', 'materials')}>
      <h1 className={leagueGothic.className + `text-lg`}>Materiais</h1>
    </div>
    <div className='min-w-full h-[100px] bg-[black/70] rounded-b border-solid border-[1px] border-slate-400 overflow-hidden overflow-y-auto'>
      <ul className='px-2 text-white overflow-hidden overflow-y-auto list-inside list-image-checkmark'>
        {materials.map((material) => (
          <li className={`hover:bg-slate-600/50 cursor-pointer ${item?.slug == material.slug ? 'bg-slate-600/50' : ''}`}
            key={material.slug}
            onClick={() => getItem(material.slug, 'materials')}>{material.name}</li>
        ))}
      </ul>
    </div>
  </div>)

  const craftsmanList = (<div className='min-w-full mx-auto my-5 relative'>
    <div className='p-2 w-full bg-[#C5C5C5] rounded-t cursor-pointer' onClick={() => getItem('artifices', 'craftsmans')}>
      <h1 className={leagueGothic.className + `text-lg`}>Artífices</h1>
    </div>
    <div className='min-w-full h-[100px] bg-[black/70] rounded-b border-solid border-[1px] border-slate-400 overflow-hidden overflow-y-auto'>
      <ul className='px-2 text-white overflow-hidden overflow-y-auto list-inside list-image-checkmark'>
        {craftsmans.map((craftsman) => (
          <li className={`hover:bg-slate-600/50 cursor-pointer ${item?.slug == craftsman.slug ? 'bg-slate-600/50' : ''}`}
            key={craftsman.slug}
            onClick={() => getItem(craftsman.slug, 'craftsmans')}>{craftsman.name}</li>
        ))}
      </ul>
    </div>
  </div>)

  return (
    <div className='flex gap-5 relative justify-center bg-no-repeat min-h-screen w-full bg-center bg-cover bg-[url("/images/action/imgBG3.png")]'>
      <div className='h-full absolute bg-cover bg-no-repeat bg-[url("/images/incursion/MascaraBG1.png")]'></div>
      <div className='max-w-[1140px] w-full gap-2 h-[700px] px-3 lg:px-5 md:px-5 flex flex-col lg:flex-row'>
        <div className='lg:max-w-[40%] py-5 w-full'>
          <div className='relative bg-black/50 flex flex-col h-[full]'>
            <div className='relative border-2 border-slate-400 p-5 py-2 bg-black/50 flex flex-col  md:min-w-[40rem] lg:min-w-96 w-full h-full'>
              <div>
                <div className='w-full'>{materialList}</div>
                <div className='w-full'>{craftsmanList}</div>
                <div className='mb-auto'><SVGMap regions={regions} getItem={getItem} selectedRegions={selectedRegions} setSelectedRegions={setSelectedRegions} setRegion={setRegion} /></div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full mx-auto py-5 flex-1'>
          <div className='w-full bg-[#C5C5C5] rounded-lg md:p-8 p-3'>
            <div className='p-2 w-full bg-[#C5C5C5] rounded-t h-[250px]'>
              {item?.image && <Image src={item.image.file_url} alt={item.name} width={0} height={0} sizes="100vw" style={{width: '100%', height: 'auto', maxHeight: '250px'}} />}
            </div>
            
            <div className='relative text-white flex-1'>
              <div className='w-full my-10 flex gap-2'>
                  <button onClick={() => setTab(1)} className={`text-[#D2CFCC] border-solid w-24 border-t-4 border-l-2 pt-1 ${tab == 1 ? 'border-slate-700 text-slate-700' : 'border-slate-500/50'}`}>SOBRE</button>
                  <button onClick={() => setTab(2)} className={`text-[#D2CFCC] border-solid w-24 border-t-4 border-l-2 pt-1 ${tab == 2 ? 'border-slate-700 text-slate-700' : 'border-slate-500/50'}`}>GALERIA</button>
              </div>
              <div className='flex flex-col my-16'>
                  <div className={`w-full text-black overflow-y-scroll h-[320px] ${tab == 1 ? '' : 'hidden'}`}>
                      {item?.content && <p dangerouslySetInnerHTML={{ __html: item?.content }} className="overflow-auto"></p>}
                  </div>
                  <div className={`flex flex-wrap gap-4 w-full ${tab == 2 ? '' : 'hidden'}`}>
                      {item?.files && item.files.map((image, index) => (
                        <div key={index} style={{backgroundImage: `url(${image.file_url})`}} className='w-28 h-28 bg-cover bg-center flex bg-slate-600/25'></div>
                      ))}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
