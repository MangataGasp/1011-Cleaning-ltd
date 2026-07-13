import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { GoArrowRight } from "react-icons/go";
import { IoCheckmarkOutline } from "react-icons/io5";

const MotionLink = motion(Link);

const STATS = [
  { num: "500+", label: "Homes & offices serviced" },
  { num: "4.9/5", label: "Average client rating" },
  { num: "3 hrs", label: "Average booking response" },
  { num: "6", label: "Districts covered across Abuja" },
];

export default function Hero() {
  return (
    <section id="top" className=" container mx-auto relative pt-42 overflow-hidden">
      <div className="relative max-w-container mx-auto px-8 grid md:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="font-mono text-[13px] text-[#0e4940] font-semibold uppercase tracking-[0.06em] text-emerald-dark mb-3.5"
          >
            Abuja's premium cleaning studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="text-[38px] md:text-[64px] text-[#0e4940] font-black tracking-[-0.03em] leading-[1.05] text-forest mb-5.5"
          >
            Redefining luxury
            <br />
            with clean excellence.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="text-[17px] text-body text-[#787773] max-w-115 mb-8"
          >
            We take the stress out of keeping your space spotless — from luxury homes in Maitama to corporate
            offices in the CBD. Book in minutes, hand us the keys, relax for hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="flex items-center gap-2 flex-wrap"
          >
            <MotionLink
              to="contact"
              smooth={true}
              duration={600}
              offset={-84}
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
              className="bg-forest text-white font-semibold text-xl py-3.75 px-6.5 rounded bg-[#0a4b3c] hover:bg-emerald-dark transition-colors cursor-pointer"
            >
              Book a cleaning
            </MotionLink>

            <MotionLink
              to="services"
              smooth={true}
              duration={600}
              offset={-84}
              whileHover={{ x: 3 }}
              className="flex items-center gap-2 text-[#0a4b3c] font-semibold text-xl py-3.75 px-2 hover:text-emerald-dark transition-colors cursor-pointer"
            >
              See our services
              <GoArrowRight />
            </MotionLink>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative rounded-md overflow-hidden shadow-[0_30px_60px_-20px_rgba(6,78,59,0.35)]">
            <motion.img
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1 }}
              src="https://picsum.photos/seed/1011-hero-clean/900/1100"
              alt="A bright, freshly cleaned luxury living room in Abuja"
              className="w-full h-95 md:h-140 object-cover block"
            />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute left-5 bottom-5 bg-white rounded-md py-3 px-4 flex items-center gap-2.5 shadow-lg max-w-57.5"
            >
              <span className="w-6.5 h-6.5 shrink-0 bg-emerald-light text-emerald-dark rounded-full flex items-center justify-center">
               <IoCheckmarkOutline />
              </span>
              <div className="text-[13px]">
                <strong className="block text-[#0a4b3c] text-[13.5px]">Fully insured</strong>
                <span className="text-body">&amp; background-checked team</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="mt-14 md:mt-24 border-t border-slate-300 border-line max-w-container mx-auto px-8 grid grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="py-7 px-6 flex flex-col gap-1 border-b md:border-b-0 border-slate-300 border-line md:border-r md:last:border-r-0"
          >
            <span className="font-mono text-[26px] md:text-[30px] text-[#0a4b3c] font-semibold text-forest">{s.num}</span>
            <span className="text-[13px] text-[#787773] text-body">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}