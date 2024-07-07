import React from "react";

const Card = ({ bg, text, urlImg }) => {
    return (
        <div className={`card_carrossel ${bg}`}>
            <img src={urlImg} alt='Foto que representa demanda atual.' />
            <p>{text}</p>
        </div>
    );
};

export default Card;
