import React from "react";
import { motion } from "framer-motion";

const PROCESS = [
  {
    n: "01",
    title: "Book your slot",
    desc: "Tell us the space, the date, and what's bothering you most about it. Takes about ninety seconds on the form below.",
  },
  {
    n: "02",
    title: "We confirm & match a team",
    desc: "You get a call within the hour to confirm scope and price — no site visit needed for standard homes and offices.",
  },
  {
    n: "03",
    title: "Deep clean day",
    desc: "A vetted, uniformed team arrives on time with their own kit. You get on with your day; we get on with the mess.",
  },
  {
    n: "04",
    title: "Walkthrough & sign-off",
    desc: "We walk the space with you before we leave. Anything not up to standard, we fix on the spot — no callbacks.",
  },
];

export default function Process() {
  return (
    <div id="process" className="py-20 bg-[#0a4b3c]">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="uppercase mb-4 text-sm font-mono tracking-wide text-[#10bd85]"
        >
          03 — Process
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-white text-3xl md:text-4xl font-semibold max-w-150 mb-16 leading-tight"
        >
          From booking to spotless, in four steps.
        </motion.h1>

        <div className="relative pt-4">
          <motion.span
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ originY: 0 }}
            className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-white/20"
          />
          <motion.span
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ originY: 0 }}
            className="md:hidden absolute top-0 bottom-0 left-5.5 w-px bg-white/20"
          />

          {PROCESS.map((p, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`relative flex items-start gap-5 mb-14 w-full md:w-[46%] ${
                  isLeft ? "md:ml-0 md:flex-row-reverse md:text-right" : "md:ml-[54%]"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="shrink-0 w-11 h-11 rounded-full bg-[#10bd85] text-[#0a4b3c] flex items-center justify-center font-mono font-bold text-sm"
                >
                  {p.n}
                </motion.div>
                <div className="max-w-85 md:max-w-none">
                  <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-white/70 text-base md:text-lg leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}