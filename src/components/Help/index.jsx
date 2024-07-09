import Carousel from "../Carousel";

const Help = () => {
  return (
    <section className="bg-pcream overflow-hidden flex flex-col items-center justify-center 2xl:h-[820px] xl:h-[820px] lg:h-auto lg:py-20 md:h-auto md:py-20 sm:h-auto sm:py-20 lsm:h-auto lsm:py-16 ">
      <div className="pb-20">
        <h2
          className="text-pred font-semibold text-4xl md:text-3xl lg:text-2xl xl:text-2xl 2xl:text-3xl  lsm:text-[16px] 
        lsm:font-bold "
        >
          Algumas demandas em que posso te ajudar
        </h2>
      </div>
      <div className="w-full">
        <Carousel />
      </div>
    </section>
  );
};

export default Help;
