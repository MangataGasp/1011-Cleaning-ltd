import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { GoArrowRight } from "react-icons/go";

const MotionLink = motion(Link);

const SERVICES = [
  {
    n: "01",
    title: "Deep Cleaning",
    desc: "Every surface, corner and skirting board — the clean you do twice a year, minus the weekend you lose doing it.",
    tag: "Full Deep Clean",
  },
  {
    n: "02",
    title: "Events Cleaning",
    desc: "Empty rooms clean fast. We get the new place ready before your furniture arrives, or the old one spotless for handover.",
    tag: "Fast Turnaround",
  },
  {
    n: "03",
    title: "Office & Corporate",
    desc: "Scheduled cleaning for offices, showrooms and serviced apartments — built around your working hours, not ours.",
    tag: "Custom Schedule",
  },
  {
    n: "04",
    title: "Post-Construction/Renovation",
    desc: "Dust, cement film, paint spatter, sticker residue. We hand the space back looking finished, not just finished-building.",
    tag: "Dust-Free Finish",
  },
  {
    n: "05",
    title: "Fumigation",
    desc: "Same-day turnovers between guests, with a photo checklist sent to you before the next booking checks in.",
    tag: "Same-Day Turnover",
  },
  {
    n: "06",
    title: "Upholstery & Carpets",
    desc: "Steam and shampoo cleaning for sofas, rugs and carpets — lifts stains and the smell that comes with them.",
    tag: "Steam Clean",
  },
];

export default function Services() {
  return (
    <div id="services" className="py-20 bg-[#f7f9f6]">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="uppercase mb-4 text-sm tracking-wide font-mono font-semibold text-[#10bd85]"
        >
          02 — Services
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-3xl md:text-4xl font-semibold max-w-150 mb-14 text-[#091b16] leading-tight"
        >
          Six ways we make your space feel new again.
        </motion.h1>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.n}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="border border-slate-300 p-7 hover:bg-[#BEFFDB] transition-colors duration-150"
            >
              <div className="border-b border-slate-300 mb-7 pb-7">
                <p className="uppercase mb-7 text-sm font-mono font-semibold tracking-wide text-[#10bd85]">
                  {s.n}
                </p>

                <h1 className="text-2xl md:text-3xl text-[#214725] font-semibold mb-3">{s.title}</h1>
                <p className="text-base md:text-lg text-[#787773] leading-relaxed">{s.desc}</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-sm font-semibold text-[#0a4b3c]">{s.tag}</p>

                <MotionLink
                  to="contact"
                  smooth={true}
                  duration={600}
                  offset={-84}
                  whileHover={{ x: 3 }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a4b3c] cursor-pointer">
                  Enquire
                  <span>
                    <GoArrowRight />
                  </span>
                </MotionLink>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}