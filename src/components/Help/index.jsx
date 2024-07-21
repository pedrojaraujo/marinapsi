import Carousel from "../Carousel";
import { Title } from "../Titles";

const Help = () => {
  return (
    <section className="bg-pcream overflow-hidden flex flex-col items-center justify-center 2xl:h-[820px] xl:h-[820px] lg:h-auto lg:py-20 md:h-auto md:py-20 sm:h-[620px] sm:py-20 lsm:h-[520px] lsm:py-0 ">
      <div className="
      3xl:pb-20
      2xl:pb-20
      xl:pb-20
      lg:pb-20
      md:pb-20
      sm:pb-20
      lsm:pb-5
      ">
        <Title className="text-pred">
          Algumas demandas em que posso te ajudar

        </Title>
      </div>
      <div className="w-full">
        <Carousel />
      </div>
    </section>
  );
};

export default Help;
