import React, { useState } from "react";
import { motion } from "framer-motion";
import { CiMenuBurger } from "react-icons/ci";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link } from "react-scroll";
const styles = {
  navthings:
    "hover:border-b-3 border-[#01bb2f] cursor-pointer font-medium px-3 py-2 transition-colors duration-700 text-sm lg:text-base",
};
export default function Navbar(sectionId) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  return (
    <div className="relative overflow-hidden container mx-auto">
      <motion.nav
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.4 }}
        className=" fixed top-0 left-0 z-50 transition-all duration-300 backdrop-brightness-100 backdrop-blur bg-[#f7f9f6] min-w-full"
      >
        <div className="flex justify-between items-center container mx-auto px-4 py-6 md:px-6 lg:px-8 ">
          <Link to="top" smooth={true}  duration={500} className="flex gap-2 cursor-pointer items-center">
            <h1 className="font-mono text-[#0a4b3c] bg-[#cefbe5] p-1">1011</h1>
            <h1 className="text-xl md:text-2xl font-bold font-grotesk">
               Cleaning
            </h1>
          </Link>
          <div className="hidden md:flex gap-x-4 lg:gap-x-8">
            <Link to="about" smooth={true} duration={500} className={styles.navthings}>
              About
            </Link>

            <Link to="services" smooth={true}  duration={500} className={styles.navthings}>
              Services
            </Link>

            <Link to="process" smooth={true} duration={500} className={styles.navthings}>
              Process
            </Link>

            <Link to="reviews" smooth={true} duration={500} className={styles.navthings}>
              1011 cares
            </Link>

            <Link to="faq" smooth={true} duration={500} className={styles.navthings}>
              FAQ
            </Link>

            <Link to="contact" smooth={true} duration={500} className={styles.navthings}>
              Contact
            </Link>            
          </div>

           <Link smooth={true} duration={500} to="contact" className="px-6 py-3 rounded-lg font-bold hidden md:block bg-[#0a4b3c] cursor-pointer active:scale-95 hover:scale-[1.01] transition-all">
              <a
                className="lg:text-base font-medium text-white"
              >
                Get a Quote
              </a>
            </Link>

          {/* Icons : to install => npm install react-icons */}
          <div className="cursor-pointer md:hidden text-[#0a4b3c]">
            {menuOpen ? (
              <RiCloseLargeFill size={35} onClick={toggleMenu} />
            ) : (
              <CiMenuBurger size={35} onClick={toggleMenu} />
            )}
          </div>
        </div>
      </motion.nav>
      {/* Nav for Smaller screens */}
      {menuOpen && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 bg-white z-40 md:hidden flex flex-col items-center justify-center gap-8  translate-y-0 transition-all duration-100"
        >

          <Link onClick={handleLinkClick} smooth={true} duration={500} to="about" className="text-3xl cursor-pointer">
            ABOUT
          </Link>

          <Link onClick={handleLinkClick} smooth={true} duration={500} to="services" className="text-3xl cursor-pointer">
            SERVICES
          </Link>

          <Link onClick={handleLinkClick} smooth={true} duration={500} to="contact" className="text-3xl cursor-pointer">
            CONTACT US
          </Link>

          <Link onClick={handleLinkClick} smooth={true} duration={500} to="reviews" className="text-3xl cursor-pointer">
            1011 CARES
          </Link>

          <Link onClick={handleLinkClick} smooth={true} duration={500} to="contact"
            className="text-3xl px-7 py-3 bg-[#0a4b3c] rounded-lg text-white active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all"

          >
            Book Now
          </Link>
        </motion.div>
      )}
    </div>
  );
}
