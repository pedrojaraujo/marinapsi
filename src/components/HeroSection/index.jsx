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
      xl:flex-row 
      xl:justify-between 
      xl:gap-10
      xl:my-0
      xl:h-[800px]
      xl:py-0
      2xl:flex-row 
      2xl:justify-between 
      2xl:gap-0
      2xl:my-0
      2xl:h-[800px]
      2xl:py-0
    ">
      <div className="container__foto__herosec w-full flex justify-center lg:w-1/2 lg:h-full">
      </div>
      <div className="container__text__herosec w-full flex justify-center items-center lg:w-1/2 lg:h-full">
        <Banner
          title="Um convite para a desvendar o inconsciente"
          text="
          Sou psicóloga e psicanalista, especializada no atendimento clínico de adultos e adolescentes.Convido você a explorar o inconsciente, falar sobre seus sintomas e nomear aquilo que pode estar mobilizando a sua angústia."
        />
      </div>
    </section>
  );
};

export default HeroSection;
