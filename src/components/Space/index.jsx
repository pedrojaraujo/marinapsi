import Image from "next/image";
import PlaceIcon from '@mui/icons-material/Place';

const Space = () => {
    return (
        <section className="flex justify-center 
        h-[720px] 
        bg-pcream 
        items-center  
        gap-24
        ">
            <section className="w-1/3 text-pred font-cormorant flex flex-col gap-8">
                <h2 className="2xl:text-[44px] xl:text-[38px]">Conheça meu espaço</h2>
                <p className="2xl:text-[24px] xl:text-[20px]">Nosso consultório de psicanálise oferece um ambiente acolhedor e seguro, perfeito para sessões terapêuticas. Com fácil acesso, o espaço é confortável e privativo. Agende sua consulta e permita-se vivenciar um atendimento personalizado, focado no seu bem-estar e desenvolvimento emocional. Venha nos conhecer e descubra um espaço dedicado à sua saúde mental.</p>
                <p className="2xl:text-[24px] xl:text-[24px]  font-normal">Localizado na Rua das Rosas, 42, Bairro Harmonia <PlaceIcon className='text-pred' /></p>
            </section>
            <section>
                <Image
                className="space__img"
                src="/foto3.png" alt="Espaço" width={738} height={587} />
            </section>
        </section>
    );
}

export default Space;