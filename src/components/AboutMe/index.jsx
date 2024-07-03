import Image from 'next/image'
import React from 'react'

const AboutMe = () => {
    return (
        <section className='bg-pcream h-auto md:h-[720px] items-center border-pred border-t-2 flex flex-col md:flex-row justify-around p-4'>
            <div className="text-about w-full md:w-1/3 flex flex-col gap-5">
                <h2 className='text-[32px] md:text-[40px] text-pred font-semibold'>Prazer, sou Marina Araujo</h2>
                <h3 className='text-pred text-[18px] md:text-[20px]'>PSICOLOGA CRP 203094/908</h3>
                <p className='text-pred text-[20px] md:text-[24px] font-semibold'>Psicóloga comprometida em oferecer um espaço acolhedor para todos que buscam equilíbrio emocional. Com um foco especial na saúde emocional da mulher. Estou aqui para guiá-lo(a) em uma jornada de autoconhecimento, oferecendo apoio empático e ferramentas para transformar desafios em oportunidades de evolução.</p>

                <article>
                    <ul className='flex flex-col gap-4'>
                        <li className='bg-plightyellow w-full md:w-[600px] h-[40px] flex justify-center items-center text-pred text-[18px] md:text-[20px] rounded-[10px]'>
                            Minhas habilidades
                        </li>
                        <li className='bg-plightyellow w-full md:w-[600px] h-[40px] flex justify-center items-center text-pred text-[18px] md:text-[20px] rounded-[10px]'>
                            Minhas habilidades
                        </li>
                        <li className='bg-plightyellow w-full md:w-[600px] h-[40px] flex justify-center items-center text-pred text-[18px] md:text-[20px] rounded-[10px]'>
                            Minhas habilidades
                        </li>
                        <li className='bg-plightyellow w-full md:w-[600px] h-[40px] flex justify-center items-center text-pred text-[18px] md:text-[20px] rounded-[10px]'>
                            Minhas habilidades
                        </li>
                    </ul>
                </article>
            </div>
            <div className='mt-4 md:mt-0'>
                <Image
                    src="/foto2.png"
                    width={300} // Reduzido para melhor ajuste em telas menores
                    height={416} // Ajustado proporcionalmente à nova largura
                    alt="Logo onde está escrito Marina Araujo"
                />
            </div>
        </section>
    )
}

export default AboutMe