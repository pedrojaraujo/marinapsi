import Image from "next/image";
import PlaceIcon from '@mui/icons-material/Place';

const Space = () => {
    return (
        <section className="flex h-[720px] bg-pcream items-center justify-center gap-32">
            <section className="w-[541px] text-pred font-cormorant flex flex-col gap-10">
                <h2 className="text-[48px]">Conheça meu espaço</h2>
                <p className="text-[24px]">Nosso consultório de psicanálise oferece um ambiente acolhedor e seguro, perfeito para sessões terapêuticas. Com fácil acesso, o espaço é confortável e privativo. Agende sua consulta e permita-se vivenciar um atendimento personalizado, focado no seu bem-estar e desenvolvimento emocional. Venha nos conhecer e descubra um espaço dedicado à sua saúde mental.</p>
                <p className="text-[32px] font-normal">Localizado na Rua das Rosas, 42, Bairro Harmonia <PlaceIcon className='text-pred' /></p>
            </section>
            <section>
                <Image src="/foto3.png" alt="Espaço" width={738} height={587} />
            </section>
        </section>
    );
}

export default Space;