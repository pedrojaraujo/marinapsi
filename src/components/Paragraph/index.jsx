import React from 'react';

export default function Paragraph({children}) {
    return (
        <p className="font-cormorant text-pred text-xl lsm:text-sm sm:text-sm md:text-lg xl:text-lg 2xl:text-lg text-justify hyphens-none">
            {children}
        </p>
    );
}
