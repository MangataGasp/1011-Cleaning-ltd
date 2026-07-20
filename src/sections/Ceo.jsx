import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { RxArrowLeft } from "react-icons/rx";

const MotionLink = motion(Link);

const STATS = [
  { num: "12+", label: "Years in facilities & hospitality" },
  { num: "500+", label: "Homes & offices served" },
  { num: "40", label: "Team members trained personally" },
  { num: "6", label: "Districts covered across Abuja" },
];

const JOURNEY = [
  {
    n: "01",
    year: "2013",
    title: "Started in hotel housekeeping",
    desc: "Learned the standard the hard way — managing housekeeping for a mid-size Abuja hotel, where a single missed corner meant a guest complaint.",
  },
  {
    n: "02",
    year: "2017",
    title: "Moved into facilities management",
    desc: "Ran cleaning and maintenance operations for corporate clients across the CBD, and saw firsthand how inconsistent contractor quality really was.",
  },
  {
    n: "03",
    year: "2021",
    title: "Founded 1011 Cleaning",
    desc: "Built a team from the ground up on one principle: the client should never have to double-check the work. Vetting, training and checklists, non-negotiable.",
  },
  {
    n: "04",
    year: "Today",
    title: "Leading a growing studio",
    desc: "Still walks a portion of jobs personally every month — not because the team needs supervising, but because the standard has to stay felt, not just written down.",
  },
];

const SOCIALS = [
  { href: "https://linkedin.com", icon: <FaLinkedin size={20} /> },
  { href: "https://instagram.com", icon: <FaInstagram size={20} /> },
  { href: "https://x.com", icon: <FaXTwitter size={20} /> },
];

export default function Founder() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div>
      {/* intro */}
      <div className="py-14 container mx-auto">
        <Link to="/" className="uppercase cursor-pointer font-mono text-sm text-[#10bd85] tracking-wide underline inline-flex items-center fixed  top-0 left-0 z-50 bg-white py-3 w-full"><RxArrowLeft className="underline" /> Go Back Home</Link>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="ceo.jpeg"
              alt="Founder & CEO of 1011 Cleaning"
              className="w-full lg:w-160 h-160 lg:h-170 object-cover object-top rounded-2xl"
            />
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="uppercase font-mono text-sm text-[#10bd85] tracking-wide mb-4"
            >
              Meet the founder
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-3xl md:text-6xl font-semibold mb-2 leading-tight"
            >
              Niyi Otunuga
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.14 }}
              className="text-xl font-medium text-[#0e4940] mb-6"
            >
              Founder & CEO, 1011 Cleaning
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-xl text-[#787773] mb-8 max-w-lg leading-relaxed"
            >
              1011 Cleaning started with a simple frustration: booking a cleaner in Abuja shouldn't feel like a gamble. Niyi built the team he wished existed when he was still running facilities for other people's
              buildings — vetted, trained, and held to one standard, every single visit.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="flex items-center gap-4"
            >
              {SOCIALS.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className="rounded-full border hover:border-0 border-[#0a4b3c] hover:bg-[#10bd85] text-[#0a4b3c] hover:text-white p-3"
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* stats */}
      <div className="py-16 border-t border-slate-300">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="py-6 px-4 flex flex-col gap-1 border-b border-slate-300 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <span className="font-mono text-2xl md:text-3xl font-semibold">{s.num}</span>
              <span className="text-md">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* pull quote */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="text-2xl md:text-4xl font-medium max-w-3xl leading-snug"
          >
            "I don't want clients to have to inspect our work. I want them to forget they ever needed to."
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg text-[#0a4b3c] font-medium"
          >
            — Niyi Otunuga, Founder & CEO
          </motion.p>
        </div>
      </div>

      {/* journey / timeline */}
      <div className="py-20 border-t border-slate-300">
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="uppercase font-mono text-lg text-[#10bd85] tracking-wide mb-4"
          >
            The journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl md:text-4xl font-semibold max-w-lg mb-16 leading-tight"
          >
            From housekeeping floors to running the studio.
          </motion.h2>

          <div className="relative pt-4">
            <motion.span
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{ originY: 0 }}
              className="absolute top-0 bottom-0 bg-slate-300 left-5.5 md:left-1/2 w-px"
            />
            {JOURNEY.map((j, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={j.n}
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
                    className="shrink-0 w-11 h-11 rounded-full border flex items-center justify-center font-mono font-bold text-sm text-white bg-[#10bd85]"
                  >
                    {j.n}
                  </motion.div>
                  <div className="max-w-85 md:max-w-none">
                    <p className="font-mono text-md text-[#10bd85] mb-1">{j.year}</p>
                    <h3 className="text-xl md:text-3xl font-semibold mb-2">{j.title}</h3>
                    <p className="text-base md:text-xl leading-relaxed">{j.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* closing CTA */}
      <div className="py-20 border-t bg-[#0a4b3c]">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl text-white font-semibold mb-6"
          >
            Want to talk to the team directly?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <MotionLink
              to="/contact"
              smooth={true}
              duration={600}
              offset={-84}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block font-semibold py-4 px-8 rounded-md text-white bg-[#10bd85] cursor-pointer"
            >
              Get in touch
            </MotionLink>
          </motion.div>
        </div>
      </div>
    </div>
  );
}