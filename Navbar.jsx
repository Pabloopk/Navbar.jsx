import React, { useState } from "react";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { RiMenu4Fill } from "react-icons/ri";
import { Link } from "react-scroll";

const Navbar = () => {
  // Define o estado 'menu' com o valor inicial 'false', indicando se o menu está aberto ou fechado.
  const [menu, setMenu] = useState(false);

  // Função para alternar o estado do menu entre aberto ('true') e fechado ('false').
  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <header className=" bg-navbar text-white py-4">
      {/* Define o cabeçalho com uma cor de fundo e texto branco. */}

      <nav className=" container flex justify-between list-none text-xl font-semibold">
        {/* Configura o menu de navegação. */}

        <div className=" hidden md:flex gap-6">
          {/* Links de navegação visíveis apenas em telas médias ou maiores. */}
          <li className="cursor-pointer hover:text-secondary transition duration-300 ease-linear">
            <Link to="about" spy={true} smooth={true} duration={500}>About</Link>
          </li>
          <li className="cursor-pointer hover:text-secondary transition duration-300 ease-linear">
            <Link to="class" spy={true} smooth={true} duration={500}>Classes</Link>
          </li>
          <li className="cursor-pointer hover:text-secondary transition duration-300 ease-linear">
            <Link to="price" spy={true} smooth={true} duration={500}>Preços</Link>
          </li>
        </div>

        <a href="/" className=" font-bold text-2xl">
          {/* Logotipo ou nome da aplicação. */}
          Designer
        </a>

        <div className=" hidden md:flex gap-6">
          {/* Ícones de redes sociais visíveis apenas em telas maiores. */}
          <li className="cursor-pointer transition duration-300 ease-linear">
            <FaInstagram size={35} className=" hover:text-pink-600 cursor-pointer" />
          </li>
          <li className="cursor-pointer hover:text-secondary transition duration-300 ease-linear">
            <FaFacebook size={35} className=" hover:text-blue-700 cursor-pointer" />
          </li>
          <li className="cursor-pointer hover:text-secondary transition duration-300 ease-linear">
            <FaWhatsapp size={35} className=" hover:text-green-700 cursor-pointer" />
          </li>
        </div>

        <div className=" md:hidden flex items-center">
          {/* Botão para abrir/fechar o menu em telas pequenas. */}
          {menu ? (
            <IoMdCloseCircle
              size={29}
              className="cursor-pointer"
              onClick={handleChange}
            />
          ) : (
            <RiMenu4Fill
              size={29}
              className="cursor-pointer"
              onClick={handleChange}
            />
          )}
        </div>
      </nav>

      {/* Seção de menu responsivo para telas pequenas. */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute z-10 bg-purple-950 text-white list-none left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit rounded-r-xl transition-transform duration-300`}
      >
        <li className="cursor-pointer hover:text-secondary">
          <Link to="about" spy={true} smooth={true} duration={500} onClick={handleChange}>About</Link>
        </li>
        <li className="cursor-pointer hover:text-secondary">
          <Link to="class" spy={true} smooth={true} duration={500} onClick={handleChange}>Classes</Link>
        </li>
        <li className="cursor-pointer hover:text-secondary">
          <Link to="price" spy={true} smooth={true} duration={500} onClick={handleChange}>Preços</Link>
        </li>

        <div className="flex items-center justify-center">
          {/* Ícones de redes sociais dentro do menu responsivo. */}
          <a href="/" className="cursor-pointer"> 
            <FaInstagram size={35} className=" hover:text-pink-600 cursor-pointer" />
          </a>
          <a href="/" className="cursor-pointer ml-4 mr-4 hover:text-secondary">
            <FaFacebook size={35} className=" hover:text-blue-700 cursor-pointer" />
          </a>
          <a href="/" className="cursor-pointer hover:text-secondary">
            <FaWhatsapp size={35} className=" hover:text-blue-700 cursor-pointer" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
// Exporta o componente Navbar para ser utilizado em outras partes da aplicação.
