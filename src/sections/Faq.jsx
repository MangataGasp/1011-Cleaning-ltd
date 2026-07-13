import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoAdd } from "react-icons/io5";

const FAQS = [
  {
    q: "Which parts of Abuja do you cover?",
    a: "We're based in Lugbe and service Maitama, Gwarimpa, Asokoro, Wuse I & II, Jabi, Life Camp, Guzape and most of the FCT. Outside these, just ask — we often still make it work.",
  },
  {
    q: "Are your cleaners insured and background-checked?",
    a: "Yes, every team member is background-checked before onboarding and covered under our liability insurance while in your space. It's non-negotiable for us.",
  },
  {
    q: "What products do you clean with?",
    a: "A mix of professional-grade and eco-friendly products, chosen by surface — marble, wood and upholstery each get something different. Tell us about allergies or pets and we'll adjust.",
  },
  {
    q: "Can I book a same-day clean?",
    a: "Often, yes — especially on weekdays. Same-day slots depend on team availability, so the earlier in the day you book, the better your odds.",
  },
  {
    q: "Do you offer recurring contracts for offices?",
    a: "We do — weekly, twice-weekly or daily, with one dedicated team assigned to your office so nothing gets re-explained every visit.",
  },
  {
    q: "What if I'm not happy with something?",
    a: "Flag it during the walkthrough and we fix it before we leave, free of charge. If something's missed after we've gone, tell us within 24 hours and we'll come back.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div id="faq" className=" container mx-auto py-20">
      <div className="mx-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-2">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="uppercase text-[#10bd85] font-mono"
            >
              05 - Faq
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-3xl md:text-4xl font-semibold max-w-150 mb-7 text-[#091b16] leading-tight"
            >
              Questions we get asked a lot.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-[#787773] text-lg md:text-xl mb-10 max-w-md"
            >
              Can't find what you're looking for? Send us a message and we'll
              get back to you the same day.
            </motion.p>

          
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={item.q}
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                  className="border-b border-slate-300 mb-4"
                >
                  <div
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex justify-between items-center mb-4 text-base md:text-lg cursor-pointer"
                  >
                    <span className="text-[#0a4b3c] font-medium">{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <IoAdd size={20} />
                    </motion.span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-base md:text-lg text-[#787773] pb-4">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}