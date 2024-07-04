// src/components/Card.js
"use client";

import Image from "next/image";

const Card = ({ bg, text, urlImg }) => {
    return (
        <section className={`2xl:w-[350px] 2xl:h-[436px] xl:w-[280px] xl:h-[400px] rounded-[16px] items-center ${bg}`}>
            <div>
                <Image src={urlImg} width={381} height={188} alt='Foto que representa demanda atual.' />
            </div>
            <p className="text-pcream 2xl:text-[20px] xl:text-[18px] p-7 text-start">
                {text}
            </p>
        </section>
    );
};

export default Card;
