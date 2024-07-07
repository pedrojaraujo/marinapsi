import Banner from "../Banner";

const HeroSection = () => {
  return (
    <section className="
      bg-pcream 
      flex 
      flex-col 
      items-center 
      justify-center 
      py-10
      sm:flex-col
      sm:h-auto
      sm:my-10
      md:flex-col 
      md:justify-center 
      md:items-center 
      md:h-auto
      lg:flex-col 
      lg:justify-center 
      lg:items-center 
      lg:mt-[120px]
      lg:py-30
      xl:flex-row 
      xl:justify-between 
      xl:gap-10
      xl:my-0
      2xl:flex-row 
      2xl:justify-between 
      2xl:gap-0
      2xl:my-0
      h-auto
    ">
      <div className="container__foto__herosec w-full flex justify-center lg:w-1/2 lg:h-full">
        {/* Coloque a imagem ou outro conteúdo aqui */}
      </div>
      <div className="container__text__herosec w-full flex justify-center lg:w-1/2 lg:h-full">
        <Banner
          title="Psicanálise para uma Jornada Racial Positiva"
          text="Explore a jornada para o autoconhecimento e cura emocional. Agende sua sessão e inicie sua jornada de transformação hoje mesmo com uma psicanalista dedicada a questões raciais."
        />
      </div>
    </section>
  );
};

export default HeroSection;
