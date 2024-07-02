import Carousel from "../Carousel";

const Help = () => {
    return (
        <section className='h-[820px] flex flex-col items-center justify-center bg-pcream overflow-hidden'>
            <div className='pb-20'>
                <h2 className='text-pred text-[40px] font-cormorant'>Algumas demandas em que posso te ajudar</h2>
            </div>
            <div className='w-full h-2/3'>
                <Carousel />
            </div>
        </section>
    );
};

export default Help;
