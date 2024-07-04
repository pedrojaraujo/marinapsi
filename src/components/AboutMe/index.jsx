import Image from 'next/image'
import React from 'react'

const AboutMe = () => {
    return (
        <section className='bg-pcream h-auto md:h-[720px] items-start border-pred border-t-2 flex flex-col md:flex-row justify-center gap-28'>
            <div className="mt-14 text-about 2xl:w-1/3 xl:w-2/5 lg:w-2/3 md:w-1/3 flex flex-col gap-5">
                <h2 className='text-[32px] md:text-[40px] text-pred font-semibold'>Prazer, sou Marina Araujo</h2>
                <h3 className='text-pred text-[18px] md:text-[20px]'>PSICOLOGA CRP 203094/908</h3>
                <p className='text-pred 2xl:text-[20px] xl:text-[18px] md:text-[18px] font-semibold'>Psicóloga comprometida em oferecer um espaço acolhedor para todos que buscam equilíbrio emocional. Com um foco especial na saúde emocional da mulher. Estou aqui para guiá-lo(a) em uma jornada de autoconhecimento, oferecendo apoio empático e ferramentas para transformar desafios em oportunidades de evolução.</p>

                <article>
                    <ul className='flex flex-col gap-4'>
                        <li className='
                        text-pred 
                        bg-plightyellow 
                        w-full
                        flex 
                        items-center 
                        justify-center 
                        2xl:w-[600px] 
                        xl:w-[400px] 
                        xl:text-[18px] 
                        md:text-[20px] 
                        h-[40px] 
                        rounded-[10px]'>
                            Minhas habilidades
                        </li>
                        <li className='
                        text-pred 
                        bg-plightyellow 
                        w-full
                        flex 
                        items-center 
                        justify-center 
                        2xl:w-[600px] 
                        xl:w-[400px] 
                        xl:text-[18px] 
                        md:text-[20px] 
                        h-[40px] 
                        rounded-[10px]'>
                            Minhas habilidades
                        </li>
                        <li className='
                        text-pred 
                        bg-plightyellow 
                        w-full
                        flex 
                        items-center 
                        justify-center 
                        2xl:w-[600px] 
                        xl:w-[400px] 
                        xl:text-[18px] 
                        md:text-[20px] 
                        h-[40px] 
                        rounded-[10px]'>
                            Minhas habilidades
                        </li>
                        <li className='
                        text-pred 
                        bg-plightyellow 
                        w-full
                        flex 
                        items-center 
                        justify-center 
                        2xl:w-[600px] 
                        xl:w-[400px] 
                        xl:text-[18px] 
                        md:text-[20px] 
                        h-[40px] 
                        rounded-[10px]'>
                            Minhas habilidades
                        </li>
                    </ul>
                </article>
            </div>
            <div className='mt-14'>
                <Image
                className='about__img'
                    src="/foto2.png"
                    width={350} // Reduzido para melhor ajuste em telas menores
                    height={416} // Ajustado proporcionalmente à nova largura
                    alt="Logo onde está escrito Marina Araujo"
                />
            </div>
        </section>
    )
}

export default AboutMe