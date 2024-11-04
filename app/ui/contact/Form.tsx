'use client'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'



const Form = () => {
    interface FormData {
        name: string;
        email: string;
        message: string;
    }

    // <<<< VALIDAÇÃO DE FORMULÁRIO >>>>

    const MessageSchema = z.object({
        name: z.string().min(1, 'Nome é Obrigatório'),
        email: z.string().min(1, 'Email é Obrigatório').email('Formato de E-mail inválido'),
        message: z.string().min(1, 'Escreva sua mensagem')
    })


    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(MessageSchema),
    })

    // <<<<|||||||||||||||||||||||>>>>


    // <<<< REQUISIÇÃO POST IN SUBMIT >>>>

    // const [post, setPost] = useState(null)

    // useEffect(() => {
    //     axios.get("endpoint").then((response) => {
    //         setPost(response.data);
    //     });
    // }, []);


    function assUser(data: FormData) {
        console.log("Enviado : " + data)
        // axios
        //     .post("endpoint", {
        //         title: "Cadastro de Mensagem",
        //         body: "Nova mensagem em cadastro."
        //     })
        //     .then((response) => {
        //         setPost(response.data);
        //     });
    }

    // <<<<|||||||||||||||||||||||>>>>
    return (
        <form onSubmit={handleSubmit(assUser)} className='flex flex-col p-2 gap-5'>

            <div className='flex flex-col'> {/* INPUT NOME */}

                <label className='peer transition-all duration-500 text-xs text-slate-500'>Nome:</label>

                <input type="text" className='rounded-md p-2 placeholder-shown:bg-slate-600/20h-7 bg-slate-600/20 peer-hover:bg-slate-600/20 hover:bg-slate-600/20 focus:bg-slate-600/20 transition-all duration-300'
                    {...register("name")}
                    placeholder='' />

                {errors.name && <span className='text-red-600 text-xs'>{errors.name.message}</span>}

            </div>

            <div className='flex flex-col'> {/* INPUT EMAIL */}
                <label className='peer transition-all duration-500 text-xs text-slate-500'
                >Email:</label>

                <input type="text" className='rounded-md p-2 placeholder-shown:bg-slate-600/20 h-7 bg-slate-500/20 peer-hover:bg-slate-700/20 hover:bg-slate-600/20 focus:bg-slate-600/20 transition-all duration-300'
                    {...register("email")}
                    placeholder='' />

                {errors.email && <span className='text-red-600 text-xs'>{errors.email.message}</span>}
            </div>

            <div className='flex flex-col'> {/* INPUT MENSAGEM */}
                <label className='peer transition-all duration-500 text-xs  text-slate-500'
                >Menssagem:</label>

                <textarea className='resize-none p-2 rounded-md placeholder-shown:bg-slate-500/20 h-40bg-slate-500/20 peer-hover:bg-slate-700/20 hover:bg-slate-600/20 focus:bg-slate-600/20 transition-all duration-300'
                    {...register("message")}
                    placeholder='' />

                {errors.message && <span className='text-red-600 text-xs'>{errors.message.message}</span>}
            </div>

            <button className=
                'w-40 h-7 mr-auto ml-auto rounded-xl transition-colors duration-300 text-white text-bold bg-sky-400 hover:bg-sky-500 '>
                Enviar
            </button>

        </form>
    )
}

export default Form