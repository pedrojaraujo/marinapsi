import Image from "next/image";
import Banner from "../Banner";

const HeroSection = () => {
  return (
    <section className="
    bg-pcream 
    h-[720px] 
    mt-28 
    flex
    justify-center 
    items-center
    2xl:mt-28
    2xl:flex
    2xl:justify-center
    2xl:items-center
    xl:mt-15
    xl:flex
    xl:justify-center
    xl:items-center
    lg:mt-20
    lg:flex
    lg:justify-center
    lg:items-center
    lg:gap-5
    md:mt-36
    md:flex
    md:justify-center
    md:items-center
    md:flex-col
    md:gap-5
    sm:mt-28
    sm:flex
    sm:justify-center
    sm:items-center
    sm:flex-col
    sm:gap-10
    ">
      <div className="2xxl:left-[15%] 2xl:left-[10%] xl:left-[10%] lg:left-[13%]  2xl:absolute xl:absolute lg:absolute md:relative sm:relative ">
        <Image
          className="marinaFoto01"
          src="/foto1.png"
          width={573}
          height={560}
          alt="Foto de Marina Araujo, uma mulher negra, sorrindo, com cabelos cacheados, usando um vestido roxo e marrom, com um fundo de estante e  folhas verdes."
        />
      </div>
      <div className="2xxl:right-[15%] 2xl:right-[10%] xl:right-[10%] lg:right-[13%] 2xl:absolute xl:absolute lg:absolute md:relative sm:relative ">
        <Banner
          title="Psicanálise para uma Jornada Racial Positiva"
          text="Explore a jornada para o autoconhecimento e cura emocional. Agende sua sessão e inicie sua jornada de transformação hoje mesmo com uma psicanalista dedicada a questões raciais."
        />
      </div>
    </section>
  );
};

export default HeroSection;
