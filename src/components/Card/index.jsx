// src/components/Card.js
"use client";

import Image from "next/image";

const Card = ({ bg, text, urlImg }) => {
    return (
        <section className={`w-[350px] h-[436px] rounded-[16px] items-center ${bg}`}>
            <div>
                <Image src={urlImg} width={381} height={188} alt='Foto que representa demanda atual.' />
            </div>
            <p className="text-pcream text-[20px] p-7 text-start">
                {text}
            </p>
        </section>
    );
};

export default Card;
