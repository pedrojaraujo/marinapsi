import Image from "next/image";
import React from "react";
import Paragraph from "../Paragraph";
import { Title } from "../Titles";

const AboutMe = () => {
  return (
    <section
      className="
 bg-pcream 
 flex
 3xl:gap-20
 2xl:gap-20
 xl:gap-20
 lg:gap-20
 md:gap-0
 sm:gap-0
 2xl:flex-row 
 xl:flex-row 
 lg:flex-row 
 sm:flex-col 
 sm:justify-center
 sm:items-center
 lsm:flex-col
 lsm:items-center
 3xl:p-20 
 2xl:p-20 
 xl:p-20
  lg:p-20
  md:p-10
  sm:p-10
  lsm:p-10
 items-start 
 justify-center  
 border-pred 
 border-t-2
 w-full
 "
    >
      <div className="flex flex-col gap-3 items-start Lsm:w-3/5  sm:w-full md:w-4/5 lg:w-4/5 xl:w-3/5 2xl:w-3/5 3xl:w-3/5">
        <Title className="text-pred">
          Prazer, sou Marina Araujo
        </Title>
        <h3 className="text-pred text-xl lsm:text-sm  sm:text-sm md:text-lg xl:text-lg 2xl:text-xl">
          PSICOLOGA CRP 203094/908
        </h3>
        <Paragraph>
          Sou psicóloga e psicanalista. Atuo no atendimento clínico de adultos e adolescentes desde 2015, tanto de forma presencial quanto online. Atendo pessoas residentes em todos os estados do Brasil, além de brasileiros que vivem em outros países.
          Sou mestranda do Programa de Psicologia Social no Núcleo Psicanálise e Sociedade (NUPS) da Pontifícia Universidade Católica de São Paulo (PUC-SP), onde pesquiso a interlocução entre psicanálise e relações raciais, com um foco especial nos diagnósticos feitos na clínica psicanalítica.
          Minha formação em psicanálise inclui o Fórum Lacaniano de São Paulo e de outros estados, o Instituto Gerar, e uma sólida participação em diversos grupos de estudo e discussões aprofundadas, em sua grande maioria focados em psicanálise, classe e raça.
          Além da clínica particular, desenvolvo trabalho como acompanhante terapêutica com crianças e adolescentes dentro do TEA – Transtorno do Espectro Autista e participo ativamente de grupos de discussões étnico-raciais.
        </Paragraph>

        {/*  Ainda sem necssidade para essa sessão.
        <article>
          <ul className="flex flex-col gap-4">
            <li className="text-pred bg-plightyellow w-full flex items-center justify-center rounded-[10px] h-[40px] text-lg md:text-base xl:text-base 2xl:text-lg px-20">
              Minhas habilidades
            </li>
          </ul>
        </article> */}
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
