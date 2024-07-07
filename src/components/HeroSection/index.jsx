import Banner from "../Banner";

const HeroSection = () => {
  return (
    <section className="
      bg-pcream 
      flex  
      2xl:h-[800px] 
      2xl:flex-row 
      2xl:justify-between 
      2xl:gap-0
      2xl:my-0
      xl:h-[800px] 
      xl:flex-row 
      xl:justify-between 
      xl:gap-10
      xl:my-0
      lg:h-[780px]
      lg:flex-col 
      lg:justify-center 
      lg:items-center 
      lg:gap-0
      lg:mt-[120px]
      lg:py-30
      md:h-[800px] 
      md:flex-col 
      md:justify-center 
      md:items-center 
      md:gap-10
      sm:flex-col
      sm:h-[750px]
      sm:my-10
      sm:justify-center
      sm:items-center
      sm:align-middle
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
