import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <section
      className="
 bg-pcream 
 flex
 2xl:flex-row 
 xl:flex-row 
 lg:flex-row 
 sm:flex-col 
 sm:justify-center
 sm:items-center
 lsm:flex-col
 lsm:items-center 
 items-start 
 justify-center 
 gap-20 
 p-20 
 border-pred 
 border-t-2
 w-full
 "
    >
      <div className="flex flex-col gap-5 items-start w-full md:w-2/3 lg:w-1/3 xl:w-2/5 2xl:w-1/3">
        <h2 className="text-pred font-semibold text-4xl md:text-3xl lg:text-2xl xl:text-2xl 2xl:text-3xl">
          Prazer, sou Marina Araujo
        </h2>
        <h3 className="text-pred text-xl md:text-lg xl:text-lg 2xl:text-xl">
          PSICOLOGA CRP 203094/908
        </h3>
        <p className="text-pred  text-xl md:text-lg xl:text-lg 2xl:text-2xl hyphens-auto text-justify">
          Psicóloga comprometida em oferecer um espaço acolhedor para todos que
          buscam equilíbrio emocional. Com um foco especial na saúde emocional
          da mulher. Estou aqui para guiá-lo(a) em uma jornada de
          autoconhecimento, oferecendo apoio empático e ferramentas para
          transformar desafios em oportunidades de evolução.
        </p>

        <article>
          <ul className="flex flex-col gap-4">
            <li className="text-pred bg-plightyellow w-full flex items-center justify-center rounded-[10px] h-[40px] text-lg md:text-base xl:text-base 2xl:text-lg px-20">
              Minhas habilidades
            </li>
          </ul>
        </article>
      </div>
      <div className="mt-14">
        <Image
          className="about__img"
          src="/foto2.png"
          width={350} // Reduzido para melhor ajuste em telas menores
          height={416} // Ajustado proporcionalmente à nova largura
          alt="Logo onde está escrito Marina Araujo"
        />
      </div>
    </section>
  );
};

export default AboutMe;
