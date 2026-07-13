import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdLocationOn, MdOutlineWhatsapp } from "react-icons/md";
import { PiMapPinArea } from "react-icons/pi";
import { FiFacebook } from "react-icons/fi";

const MotionLink = motion(Link);

const EXPLORE_LINKS = [
  { to: "about", label: "About" },
  { to: "services", label: "Services" },
  { to: "process", label: "Process" },
  { to: "faq", label: "FAQ" },
  { to: "contact", label: "Contact" },
];

const SERVICE_LINKS = [
  "Residential Deep Clean",
  "Move-in / Move-out",
  "Office & Corperate",
  "Post-Construction",
  "Airbnb & Short-let Turnover",
];

const SOCIALS = [
  {
    href: "https://maps.app.goo.gl/c1NibEiiTYdSfPzt5",
    icon: <PiMapPinArea size={20} className="text-white" />,
  },
  {
    href: "https://www.instagram.com/1011_cleaningservicesltd?igsh=MXduMDdtY3ltdzg3YQ==",
    icon: <FaInstagram size={20} className="text-white" />,
  },
   {
    href: "https://www.facebook.com/share/1Y6YwjHtrP/",
    icon: <FiFacebook size={20} className="text-white" />,
  },
  {
    href: "https://wa.link/hjv65c",
    icon: <MdOutlineWhatsapp size={20} className="text-white" />,
  },
];

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#0a4b3c] w-full py-10 mt-6 border-t border-[#7A211E]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 px-6 container mx-auto"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="space-y-6 col-span-2 lg:col-span-1"
          >
            <div className="flex gap-2 items-center mb-4">
              {/* <img src="/logo.png" alt="" className="w-10 h-10" /> */}
              <span className="text-white text-xl md:text-2xl font-semibold">
                1011 Cleaning
              </span>
            </div>
            <p className="text-white/80 text-sm md:text-base">
              &copy; {new Date().getFullYear()} 1011 Cleaning Services. Empowering professional spaces and luxury homes across Abuja with world-class sanitation.
            </p>
            <div className="flex gap-6">
              {SOCIALS.map((s, i) => (
                <motion.a
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={s.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                  className="rounded-full bg-white/20 hover:bg-[#10bd85] cursor-pointer backdrop-blur p-2"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} className="space-y-6">
            <h1 className="uppercase text-[#787773] text-sm">Explore</h1>
            <div className="flex flex-col gap-1 text-white text-sm md:text-base">
              {EXPLORE_LINKS.map((l) => (
                <MotionLink
                  key={l.to}
                  to={l.to}
                  smooth={true}
                  duration={600}
                  offset={-84}
                  whileHover={{ x: 6 }}
                  className="w-fit cursor-pointer"
                >
                  {l.label}
                </MotionLink>
              ))}
            </div>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} className="space-y-6">
            <h1 className="uppercase text-[#787773] text-sm">Services</h1>
            <div className="flex flex-col gap-1 text-white text-sm md:text-base">
              {SERVICE_LINKS.map((label) => (
                <MotionLink
                  key={label}
                  to="services"
                  smooth={true}
                  duration={600}
                  offset={-84}
                  whileHover={{ x: 6 }}
                  className="w-fit cursor-pointer"
                >
                  {label}
                </MotionLink>
              ))}
            </div>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} className="space-y-6">
            <h1 className="uppercase text-[#787773] text-sm">Get in touch</h1>
            <ul className="flex flex-col gap-3 text-white text-sm md:text-base">
              <li className="inline-flex items-center gap-2">
                <span>
                  <CiMail size={20} className="text-[#10bd85]" />
                </span>
                hello@1011cleaning.com
              </li>
              <li className="inline-flex items-center gap-2">
                <span>
                  <IoMdCall size={20} className="text-[#10bd85]" />
                </span>
                +234 808 888 0143
              </li>
              <li className="inline-flex gap-2">
                <span>
                  <MdLocationOn size={20} className="text-[#10bd85]" />
                </span>
                No. 3 Port Harcourt Street, Lugbe, Abuja
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </footer>
    </div>
  );
}