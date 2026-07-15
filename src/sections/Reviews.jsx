import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const REVIEWS = [
  {
    quote:
      "Booked them for a move-out clean in Jabi with two days' notice. The agent inspecting the flat asked who did it — that's how I knew it went well.",
    name: "Amaka O.",
    role: "Homeowner, Jabi",
  },
  {
    quote:
      "Our office in the CBD gets cleaned three times a week now. Same team every time, which honestly matters more than people think.",
    name: "Tunde B.",
    role: "Facilities Lead, Central Business District",
  },
  {
    quote:
      "I run four short-lets in Maitama and Wuse. Turnover cleans are done same-day with photos sent before my next guest even lands.",
    name: "Ifeoma C.",
    role: "Short-let Host, Maitama",
  },
];

export default function Reviews() {
  return (
    <div id="reviews" className="bg-[#f7f9f6] container mx-auto">
      <div className="py-20">
        <div className="mx-2">
          <div className="mb-7">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="uppercase mb-4 text-sm font-mono tracking-wide text-[#10bd85]"
            >
              04 - Reviews
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-3xl md:text-4xl font-semibold max-w-150 mb-14 text-[#091b16] leading-tight"
            >
              Don't take our word for it
            </motion.h1>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-5"
          >
            {REVIEWS.map((r) => (
              <motion.div
                key={r.name}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="border border-slate-400 p-4 min-w-full rounded-lg"
              >
                <div className="flex gap-1 mb-5 text-[#26b786]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} size={18} />
                  ))}
                </div>

                <p className="mb-4">"{r.quote}"</p>

                <div className="flex gap-2 items-center">
                  <img src="ceo.jpeg" alt="" className="w-10 h-10 rounded-full object-cover" />
                  <p>
                    {r.name}
                    <br />
                    {r.role}
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