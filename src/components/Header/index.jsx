import React, { useState } from 'react';
import Image from 'next/image';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Button from '../Button';

const Header = ({ scrollToRefs }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="bg-pcream px-2 sm:px-4 py-3 md:py-4 fixed w-full top-0 z-10">
      <div className="container flex flex-wrap justify-center items-center mx-auto gap-[40%]">
        <div>
          <Image
            src="/logo.png"
            width={150}
            height={75}
            alt="Logo onde está escrito Marina Araujo"
          />
        </div>
        {/* Menu sanduíche para telas lg e menores */}
        <div className="flex lg:hidden">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
            sx={{ color: '#B94514' }} // Cor do ícone do menu sanduíche
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeMenu}
            PaperProps={{
              style: {
                width: '80%',
                maxWidth: 'none',
                color: '#B94514',
                backgroundColor: '#FFFBF5',
                fontFamily: 'Cormorant, serif',
              },
            }}
          >
            <div className="flex justify-between items-center p-2">
              <div className="font-cormorant">Menu</div>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="close"
                onClick={closeMenu}
                sx={{ color: '#B94514' }} // Cor do ícone de fechar
              >
                <CloseIcon />
              </IconButton>
            </div>
            <MenuItem
              onClick={() => {
                closeMenu();
                scrollToRefs.homeRef.current.scrollIntoView({ behavior: 'smooth' });
              }}
              className="py-2 px-4 font-cormorant"
            >
              Início
            </MenuItem>
            <MenuItem
              onClick={() => {
                closeMenu();
                scrollToRefs.consultsRef.current.scrollIntoView({ behavior: 'smooth' });
              }}
              className="py-2 px-4 font-cormorant"
            >
              Experiência
            </MenuItem>
            <MenuItem
              onClick={() => {
                closeMenu();
                scrollToRefs.aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
              }}
              className="py-2 px-4 font-cormorant"
            >
              Sobre mim
            </MenuItem>
            <MenuItem
              onClick={() => {
                closeMenu();
                scrollToRefs.faqRef.current.scrollIntoView({ behavior: 'smooth' });
              }}
              className="py-2 px-4 font-cormorant"
            >
              Perguntas frequentes
            </MenuItem>
          </Menu>
        </div>
        {/* Botões de navegação para telas maiores que lg */}
        <div className="hidden lg:flex gap-3 sm:gap-5 md:gap-8">
          <Button text="Início" scrollToRef={scrollToRefs.homeRef} />
          <Button text="Experiência" scrollToRef={scrollToRefs.consultsRef} />
          <Button text="Sobre mim" scrollToRef={scrollToRefs.aboutMeRef} />
          <Button text="F.A.Q" scrollToRef={scrollToRefs.faqRef} />
          <Button text="Consultório" scrollToRef={scrollToRefs.spacRef} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
