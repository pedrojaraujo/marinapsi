import Banner from "../Banner";

const HeroSection = () => {
  return (
    <section className="
      bg-pcream 
      flex
      lsm:flex-col
      lsm:my-10
      lsm:h-[720px] 
      sm:flex-col
      sm:my-10
      sm:h-[720px]
      md:flex-col 
      md:justify-center 
      md:items-center 
      md:h-[720px]
      lg:flex-col 
      lg:justify-center 
      lg:items-center 
      lg:mt-[120px]
      lg:py-30
      lg:h-[720px]
      lg:w-full
      xl:flex-row 
      xl:justify-between 
      xl:gap-10
      xl:my-0
      xl:h-[800px]
      xl:py-0
      2xl:justify-center 
      2xl:gap-0
      2xl:py-0
      2xl:h-[720px]
    ">
      <div className="container__foto__herosec w-full flex justify-center lg:w-full lg:h-full">
      </div>
      <div className="container__text__herosec w-full flex justify-center items-center lg:w-full lg:h-full">
        <Banner
          title="Um convite para a desvendar o inconsciente"
          text="
          Desde 2015, ofereço consultas presenciais e online para pacientes em todo o Brasil e para brasileiros residentes no exterior. Convido você a explorar o inconsciente, falar sobre seus sintomas e nomear aquilo que pode estar mobilizando a sua angústia. Vamos iniciar essa jornada juntos?"

        />
      </div>
    </section>
  );
};

export default HeroSection;
