import Image from "next/image";
import Banner from "../Banner";

const HeroSection = () => {
  return (
    <section className="bg-pcream h-[720px] flex justify-center items-center">
      <div className="absolute left-[420px]">
        <Image
          src="/foto1.png"
          width={573}
          height={560}
          alt="Foto de Marina Araujo, uma mulher negra, sorrindo, com cabelos cacheados, usando um vestido roxo e marrom, com um fundo de estante e  folhas verdes."
        />
      </div>
      <div className="absolute right-[410px]">
        <Banner
          title="Psicanálise para uma Jornada Racial Positiva"
          text="Explore a jornada para o autoconhecimento e cura emocional. Agende sua sessão e inicie sua jornada de transformação hoje mesmo com uma psicanalista dedicada a questões raciais."
        />
      </div>
    </section>
  );
};

export default HeroSection;
