'use client';
import { Action } from '@/app/types/action';
import Carrossel from '@/app/ui/about/carrossel';
import React from 'react';

export default function Tipografia({ params }: { params: { slug: string } }) {
  const [slug, setSlug] = React.useState<string>(params.slug);  
  const [action, setAction] = React.useState<Action | null>(null);

  const getAction = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/actions/${slug}`);
    const json = await response.json();
    setAction(json);
  }

  React.useEffect(() => {
    getAction()
  }, [slug]);

  return (
    <div className='flex flex-col w-full lg:p-10 md:p-10 pt-0 bg-slate-100 gap-5'>
      <div className='container w-full mx-auto'>
        <div style={{backgroundImage: `url(${action?.image?.file_url})` }} className='bg-no-repeat bg-center bg-cover w-full h-80 flex relative'>
          <div style={{background: `${action?.primary_color}90`}} className='absolute w-full h-full'></div>
          <div className='flex flex-col w-full h-full absolute z-[1]' style={{color: action?.secondary_color}}>
            <div className='z-10 mt-auto w-full'>
              <h1 style={{borderBottomColor: action?.secondary_color}} className='w-96 mx-auto font-bold text-2xl text-center border-solid  border-b-[8px]'>{action?.title}</h1>
            </div>
            <div className='z-10 mb-auto w-96 mx-auto text-center'>
              <p>{action?.coordinator}</p>
              <p>{action?.place} , {action?.year}</p>
            </div>
          </div>
        </div>
        <div className='mx-2 md:mx-0 lg:mx-0'>
          {(action?.files && action?.files.length > 0)
            ? <Carrossel images={action?.files?.map((file) => ({src: file?.file_url, id: file?.id}))} />
            : <div className='flex flex-col p-8 border-solid border-4 w-full'>
                <p>Este projeto não possui imagens</p>
              </div>
          }
        </div>
        <div className='m-5 lg:mx-32 md:mx-10'>
          <div className='flex flex-col p-8 border-solid border-4 w-full' style={{borderColor: action?.primary_color}}>
            {action && <div style={{ color: '#000000' }} dangerouslySetInnerHTML={{__html: action?.content}}></div>}
          </div>
        </div>
      </div>
    </div>
  )
}
