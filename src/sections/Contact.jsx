import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div id="contact" className="py-15 bg-[#f7f9f6]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-2">
          <div className="mx-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="border-b border-slate-300 mb-5 max-w-150"
            >
              <p className="uppercase mb-4 font-mono text-sm">06 - Contact</p>
              <h1 className="text-3xl md:text-4xl font-semibold max-w-140 mb-6">
                Let's get your space sorted.
              </h1>
              <p className="mb-5 text-base md:text-lg text-[#787773] max-w-95">
                Fill in the form and we'll call you back within a few hours —
                usually sooner. Prefer to talk now? Reach us directly below.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#0a4b3c] font-semibold text-sm md:text-base"
            >
              <motion.p variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
                PHONE/WHATSAPP
                <br />
                +234 808 888 0143
              </motion.p>

              <motion.p variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
                EMAIL
                <br />
                hello@1011cleaning.com
              </motion.p>

              <motion.p variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
                LOCATION
                <br />
                No. 3 Port Harcourt Street, Lugbe, Abuja
              </motion.p>

              <motion.p variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
                HOURS
                <br />
                Monday-Saturday, 7am-7pm
              </motion.p>
            </motion.div>
          </div>

          {/* form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-slate-300 rounded-xl bg-white mx-2 p-5"
          >
            <form className="space-y-8">
              <div className="relative group">
                <label className="block text-[0.6875rem] text-[#0a4b3c] uppercase tracking-widest mb-2 transition-colors">
                  Name
                </label>
                <input
                  className="w-full border border-slate-300 focus:shadow-[#0a4b3c] p-2 bg-[#f7f9f6] rounded-md outline-none text-sm md:text-base"
                  placeholder="Chioma Adeyemi"
                  type="text"
                  name="name"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <label className="block text-[0.6875rem] text-[#0a4b3c] uppercase tracking-widest mb-2 transition-colors">
                    Email
                  </label>
                  <input
                    className="w-full border border-slate-300 focus:shadow-[#0a4b3c] p-2 bg-[#f7f9f6] rounded-md outline-none text-sm md:text-base"
                    placeholder="you@email.com"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className="relative group">
                  <label className="block text-[0.6875rem] text-[#0a4b3c] uppercase tracking-widest mb-2 transition-colors">
                    Phone
                  </label>
                  <input
                    className="w-full border border-slate-300 focus:shadow-[#0a4b3c] p-2 bg-[#f7f9f6] rounded-md outline-none text-sm md:text-base"
                    placeholder="0803 123 4567"
                    type="number"
                    name="phone"
                    required
                  />
                </div>
              </div>
              <label className="block text-[0.6875rem] text-[#0a4b3c] uppercase tracking-widest mb-2">
                Service Needed
              </label>
              <select
                name="service"
                id="service"
                className="w-full border bg-[#f7f9f6] border-slate-300 p-2 rounded-md text-sm md:text-base"
              >
                <option value="">Select a service...</option>
                <option value="resident">Residential Deep Clean</option>
                <option value="moving">Move-In / Move-Out</option>
                <option value="office">Office & Corperate</option>
                <option value="construction">Post-Construction</option>
                <option value="shortlet">Airbnb & Short-let Turnover</option>
                <option value="upholstery">Upholstery & Carpets</option>
              </select>
              <div className="relative group">
                <label className="block text-[0.6875rem] text-[#0a4b3c] uppercase tracking-widest mb-2 transition-colors">
                  Tell us about the space
                </label>
                <textarea
                  className="w-full resize-y border border-slate-300 focus:shadow-[#0a4b3c] p-2 bg-[#f7f9f6] rounded-md outline-none text-sm md:text-base"
                  name="message"
                  placeholder="e.g. 3-bedroom flat in Jabi, move-out clean needed by Friday..."
                  required
                  rows="5"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-full font-grotesk text-white text-xl py-3 bg-[#0a4b3c] rounded-md"
                type="submit"
              >
                Send message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}