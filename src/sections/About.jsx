import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { RxArrowTopRight } from "react-icons/rx";

const VALUES = [
  {
    n: "01",
    title: "Precision",
    desc: "Checklists, not guesswork. Every room is inspected against the same standard, every time.",
  },
  {
    n: "02",
    title: "Trust",
    desc: "Every cleaner is verified before they ever step into your home or office.",
  },
  {
    n: "03",
    title: "Warmth",
    desc: "Cleaning is a people business first. Our teams show up polite, punctual and easy to have around.",
  },
  {
    n: "04",
    title: "Consistency",
    desc: "The same quality on visit fifty as on visit one — that's what keeps clients with us for years.",
  },
];

export default function About() {
  return (
    <div id="about" className="py-20 bg-[#f7f9f6]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto px-6">
        {/* image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="md:sticky md:top-24 self-start"
        >
          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            src="about.png"
            alt="1011 team preparing for a job in Abuja"
            className="w-full h-85 md:h-130 object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* about */}
        <div>
          <div className="mb-10 pb-10 border-b border-slate-300">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="uppercase mb-4 text-sm tracking-wide font-mono font-semibold text-[#10bd85]"
            >
              01 — About Us
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-3xl md:text-4xl font-semibold max-w-150 mb-4 text-[#091b16] leading-tight"
            >
              A cleaning studio built for how Abuja actually lives.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-base md:text-lg text-[#787773] mb-5 max-w-130 leading-relaxed"
            >
              1011 Cleaning Services Limited started with a vision in 2020 and
              officially launched in December 2023. We've dedicated ourselves to
              helping families, businesses, and organizations maintain spotless,
              healthier, and more comfortable environments.
            </motion.p>
            <Link smooth={true} duration={500} to="/ceo"
            className="group px-7 py-3 rounded-full text-white bg-[#0a4b3c] inline-flex items-center active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all">
              Meet the CEO
              <span className="group-hover:translate-x-3 transition-transform duration-300"><RxArrowTopRight size={21} /></span>
            </Link>
          </div>

          {/* list */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {VALUES.map((v) => (
              <motion.div
                key={v.n}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
                className="flex gap-3"
              >
                <p className="text-[#10bd85] text-lg font-mono font-semibold">
                  {v.n}
                </p>
                <div>
                  <p className="text-[#0a4b3c] font-medium text-lg mb-1">
                    {v.title}
                  </p>
                  <p className="text-sm md:text-base text-[#787773] leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
