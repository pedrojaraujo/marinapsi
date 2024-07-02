import React from 'react';
import Image from 'next/image';
import Button from '../Button';
import { scrollToSection} from '../../utils/scroll';

const Header = () => {
  const handleScroll = (id) => {
    scrollToSection(id);
  };

  return (
    <nav className="bg-pcream px-2 sm:px-4 py-10 fixed w-full top-0 z-10">
      <div className="container flex flex-wrap justify-around items-center mx-auto">
        <div>
          <Image
            src="/logo.png"
            width={194}
            height={94}
            alt="Logo onde está escrito Marina Araujo"
          />
        </div>
        <div className="flex gap-5">
          <Button text="Início" width="194px" height="36px" onClick={() => handleScroll('inicio')} />
          <Button text="Contatos" width="194px" height="36px" onClick={() => handleScroll('contatos')} />
          <Button text="Consultas" width="194px" height="36px" onClick={() => handleScroll('consultas')} />
          <Button text="Sobre mim" width="194px" height="36px" onClick={() => handleScroll('sobre')} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
