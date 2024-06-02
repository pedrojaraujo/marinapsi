import Image from "next/image";
import Button from "../Button";

const Header = () => {
  return (
    <nav class="bg-pcream px-2 sm:px-4 py-5">
      <div class="container flex flex-wrap justify-around items-center mx-auto">
        <div>
          <Image
            src="/logo.png"
            width={194}
            height={94}
            alt="Logo onde está escrito Marina Araujo"
          />
        </div>
        <div className="flex gap-5">
          <Button text="Início" width="194px" height="36px" href="#inicio" />
          <Button text="Contatos" width="194px" height="36px" href="#inicio" />
          <Button text="Consultas" width="194px" height="36px" href="#inicio" />
          <Button text="Sobre mim" width="194px" height="36px" href="#inicio" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
