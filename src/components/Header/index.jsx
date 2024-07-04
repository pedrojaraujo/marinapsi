import React from 'react';
import Image from 'next/image';
import Button from '../Button';


const Header = () => {


  return (
    <nav className="bg-pcream px-2 sm:px-4 py-5 md:py-10 fixed w-full top-0 z-10">
      <div className="container flex flex-wrap justify-around items-center mx-auto">
        <div>
          <Image
            src="/logo.png"
            width={194}
            height={94}
            alt="Logo onde está escrito Marina Araujo"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 md:gap-8">
          <Button text="Início"  />
          <Button text="Contatos"  />
          <Button text="Consultas"  />
          <Button text="Sobre mim"  />
        </div>
      </div>
    </nav>
  );
};

export default Header;
