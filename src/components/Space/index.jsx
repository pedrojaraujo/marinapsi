import Image from "next/image";
import PlaceIcon from "@mui/icons-material/Place";
import Link from "next/link";

const Space = () => {
  return (
    <section
      className="flex justify-center 

        2xl:h-[720px]
        2xl:flex-row
        2xl:gap-24
        xl:h-[720px]
        xl:flex-row
        xl:gap-24
        lg:flex-col
        lg:w-full
        lg:gap-24
        lg:h-auto
        lg:py-20
        md:h-auto
        md:py-20
        md:flex-col
        md:w-full
        md:gap-24
        sm:h-auto
        sm:py-20
        sm:flex-col
        sm:w-full
        sm:gap-24
        bg-pcream 
        items-center  
        "
    >
      <section className="2xl:w-1/3 xl:w-1/3 md:w-2/3 sm:w-2/3 text-pred flex flex-col gap-8 md:gap-8">
      <h2
          className="text-pred  text-4xl md:text-3xl lg:text-2xl xl:text-2xl 2xl:text-3xl  lsm:text-[16px] 
        lsm:font-bold "
        >
         Conheça meu espaço
        </h2>
        <p className="text-pred  text-xl md:text-lg xl:text-lg 2xl:text-2xl hyphens-auto text-justify">
          Nosso consultório de psicanálise oferece um ambiente acolhedor e
          seguro, perfeito para sessões terapêuticas. Com fácil acesso, o espaço
          é confortável e privativo. Agende sua consulta e permita-se vivenciar
          um atendimento personalizado, focado no seu bem-estar e
          desenvolvimento emocional. Venha nos conhecer e descubra um espaço
          dedicado à sua saúde mental.
        </p>
        <Link
          className="leading-snug underline 2xl:text-[22px] xl:text-[18px] lg:text-[18px] md:text-[16px]"
          style={{ textUnderlineOffset: "4px" }}
          target="_blank"
          href="https://maps.app.goo.gl/xQoK45X2kmZPr7bJ8"
        >
          Localizado na Rua das Rosas, 42, Bairro Harmonia{" "}
          <PlaceIcon className="text-pred" />
        </Link>
      </section>
      <section>
        <Image
          className="space__img"
          src="/foto3.png"
          alt="Espaço"
          width={738}
          height={587}
        />
      </section>
    </section>
  );
};

export default Space;
