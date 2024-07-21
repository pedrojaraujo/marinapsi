import React from 'react';

export const Title = ({ children, className = '' }) => {
    return (
        <h2
            className={`3xl:text-[36px] 2xl:text-[28px] xl:text-[28px] lg:text-[28px] md:text-[28px] sm:text-[20px] lsm:text-[18px] lsm:font-bold lsm:text-start py-2 ${className}`}
        >
            {children}
        </h2>
    );
};

