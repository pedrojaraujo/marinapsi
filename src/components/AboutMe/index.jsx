import Image from 'next/image'
import React from 'react'

const AboutMe = () => {
    return (
        <section className='bg-pcream 2xl:h-auto xl:h-auto lg:items-center md:items-center lg:h-auto lg:py-20 md:h-auto md:py-20 sm:h-auto sm:py-20 items-start border-pred border-t-2 flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col sm:items-center justify-center 2xl:gap- xl:gap-18 lg:gap-18 md:gap-18 sm:gap-0'>
            <div className="mt-14 text-about 2xl:w-1/3 xl:w-2/5 lg:w-1/3 md:w-2/3 sm:w-4/5 flex flex-col gap-5">
                <h2 className=' 2xl:text-[45px] xl:text-[38px] lg:text-[32px] md:text-[28px] sm:text-[28px] text-pred font-semibold'>Prazer, sou Marina Araujo</h2>
                <h3 className='text-pred 2xl:text-[20px]  xl:text-[20px] md:text-[18px] sm:text-[18px]'>PSICOLOGA CRP 203094/908</h3>
                <p className='text-pred 2xl:text-[24px] xl:text-[20px] md:text-[16px] font-semibold'>Psicóloga comprometida em oferecer um espaço acolhedor para todos que buscam equilíbrio emocional. Com um foco especial na saúde emocional da mulher. Estou aqui para guiá-lo(a) em uma jornada de autoconhecimento, oferecendo apoio empático e ferramentas para transformar desafios em oportunidades de evolução.</p>

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
                        lg:w-[310px] 
                        2xl:text-[20px] 
                        xl:text-[20px] 
                        md:text-[16px] 
                        2xl:h-[40px]
                        xl:h-[40px]
                        md:h-[32px] 
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
                        lg:w-[310px] 
                        2xl:text-[20px] 
                        xl:text-[20px] 
                        md:text-[16px] 
                        2xl:h-[40px]
                        xl:h-[40px]
                        md:h-[32px] 
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
                        lg:w-[310px] 
                        2xl:text-[20px] 
                        xl:text-[20px] 
                        md:text-[16px] 
                        2xl:h-[40px]
                        xl:h-[40px]
                        md:h-[32px] 
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
                        lg:w-[310px] 
                        2xl:text-[20px] 
                        xl:text-[20px] 
                        md:text-[16px] 
                        2xl:h-[40px]
                        xl:h-[40px]
                        md:h-[32px] 
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