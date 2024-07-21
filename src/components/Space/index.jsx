import Image from "next/image";
import PlaceIcon from "@mui/icons-material/Place";
import Link from "next/link";
import Paragraph from "../Paragraph";
import { Title } from "../Titles";

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
        lsm:h-auto
        lsm:py-20
        lsm:flex-col
        lsm:w-full
        lsm:gap-24
        bg-pcream 
        items-center  
        "
    >
      <section className="2xl:w-1/3 xl:w-1/3 md:w-4/5 sm:w-4/5 lsm:w-4/5 text-pred flex flex-col gap-8 md:gap-8">
        <Title>
          Conheça meu espaço
        </Title>
        <Paragraph>
          Meu consultório está localizado em Perdizes, a uma quadra da PUC, você encontrará um espaço acolhedor, tranquilo e com privacidade para te receber. Para chegar, colocar no mapa “Rua Cardoso de Almeida, 1005 – Perdizes”, esta localização apontará em frente a vila. Estou a uma quadra da PUC - Campus Monte Alegre

        </Paragraph>
        <Link
          className="font-bold leading-snug underline 3xl:text-[20px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[16px] sm:text-[14px] lsm:text-[14px] lsm:text-center"
          style={{ textUnderlineOffset: "6px" }}
          target="_blank"
          href="https://maps.app.goo.gl/VpdZJRWxPNmxCseB8"
        >
          Travessa Jeno Christiano Rolfsen, Casa nº4, Perdizes{" "}
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
