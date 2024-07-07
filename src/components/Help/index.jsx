import Carousel from "../Carousel";

const Help = () => {
    return (
        <section className='2xl:h-[820px] xl:h-[820px] lg:h-auto lg:py-20 md:h-auto md:py-20 sm:h-auto sm:py-20 flex flex-col items-center justify-center bg-pcream overflow-hidden'>
            <div className='pb-20'>
                <h2 className='text-pred text-center 2xl:text-[40px] xl:text-[40px] lg:text-[30px] md:text-[30px] sm:text-[24px] font-cormorant'>Algumas demandas em que posso te ajudar</h2>
            </div>
            <div className='w-full'>
                <Carousel />
            </div>
        </section>
    );
};

export default Help;
