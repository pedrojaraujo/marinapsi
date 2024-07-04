import Image from "next/image";
import Banner from "../Banner";

const HeroSection = () => {
  return (
    <section className="
    bg-pcream 
    2xl:h-[800px] 
    2xl:flex
    2xl:justify-between
    xl:h-[800px] 
    xl:flex
    xl:justify-between
    lg:flex
    lg:justify-between
    lg:items-center
    lg:gap-5
    md:flex
    md:justify-between
    md:gap-5
    sm:flex
    sm:justify-between
    sm:gap-10
    ">
      <div className="container__foto__herosec">

      </div>
      <div className="container__text__herosec">
        <Banner
          title="Psicanálise para uma Jornada Racial Positiva"
          text="Explore a jornada para o autoconhecimento e cura emocional. Agende sua sessão e inicie sua jornada de transformação hoje mesmo com uma psicanalista dedicada a questões raciais."
        />
      </div>
    </section>
  );
};

export default HeroSection;
