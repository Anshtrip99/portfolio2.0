import { useState } from "react";
import logo from "../assets/ATlogo.png";
import{ FaLinkedin } from "react-icons/fa";
import{ FaGithub } from "react-icons/fa";
import{ FaSquareXTwitter } from "react-icons/fa6";
import{ FaInstagram } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { HiMenu } from "react-icons/hi"; 
import { HiX } from "react-icons/hi"; 
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
   
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>

     
      <div className="hidden lg:flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/ansh-tripathi-a2162931a/"
          className="text-2xl hover:text-blue-500 hover:scale-110 transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Anshtrip99"
          className="text-2xl hover:text-blue-500 hover:scale-110 transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/anshtrip_1729/"
          className="text-2xl hover:text-blue-500 hover:scale-110 transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/AnshTrip99"
          className="text-2xl hover:text-blue-500 hover:scale-110 transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://codeforces.com/profile/anshtrip99"
          className="text-2xl hover:text-blue-500 hover:scale-110 transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiCodeforces />
        </a>
      </div>

     
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {isMenuOpen ? (
            <HiX className="text-white" />
          ) : (
            <HiMenu className="text-white" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 right-0 bg-neutral-950 bg-opacity-90 z-50 p-6">
          <div className="flex flex-col items-center gap-4">
            <a
              href="#about" 
              className="text-2xl text-white hover:text-blue-500"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#projects" 
              className="text-2xl text-white hover:text-blue-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#experience" 
              className="text-2xl text-white hover:text-blue-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#contact" 
              className="text-2xl text-white hover:text-blue-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;