"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi";
import { useState } from "react";

const contactInfo = [
  {
    icon: FiMail,
    title: "Email",
    value: "info@kodanconsulting.com",
    sub: "We reply within 24 hours",
    href: "mailto:info@kodanconsulting.com",
  },
  {
    icon: FiPhone,
    title: "Phone",
    value: "07045632782",
    sub: "Mon–Sat, 8am–6pm",
    href: "tel:07045632782",
  },
  {
    icon: FiMapPin,
    title: "Location",
    value: "Eto Baba, Jos",
    sub: "Plateau State, Nigeria",
    href: "#",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative bg-[#0a0f1e] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,theme(colors.emerald.900/40),transparent_60%)] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 text-center relative">
          <motion.span
            className="inline-block text-emerald-400 font-semibold text-sm tracking-widest uppercase mb-4 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let&apos;s Talk
          </motion.span>
          <motion.h1
            className="text-5xl md:text-7xl font-black text-white mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Contact <span className="gradient-text">Us</span>
          </motion.h1>
          <motion.p
            className="text-white/60 text-base md:text-lg max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Ready to find your dream property? The Kodan Consulting team is here and happy to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-10">
            {contactInfo.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                className="group bg-white rounded-2xl p-7 border border-gray-100 card-hover flex items-start gap-4"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -6 }}
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 transition-colors duration-300">
                  <item.icon className="text-emerald-600 group-hover:text-white text-xl transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">{item.title}</h3>
                  <p className="text-emerald-600 font-semibold text-sm">{item.value}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{item.sub}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="pb-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Form */}
            <motion.div
              className="bg-white rounded-2xl p-8 border border-gray-100"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-black text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-400 text-sm mb-7">
                Fill out the form and our team will reach out within 24 hours.
              </p>

              {submitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiSend className="text-emerald-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm">
                    Thank you for reaching out. The Kodan Consulting team will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Your phone number"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                      Subject*
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-300 text-gray-600"
                    >
                      <option value="">Select a topic</option>
                      <option>Buying a Property</option>
                      <option>Selling a Property</option>
                      <option>Property Valuation</option>
                      <option>Rental Inquiry</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                      Your Message*
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full py-3.5 rounded-xl text-white font-bold flex items-center justify-center gap-2"
                  >
                    <FiSend />
                    Send Message
                    <HiArrowRight />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info + Why Us */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-[#0a0f1e] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-black mb-4">
                  Why Choose{" "}
                  <span className="gradient-text">Kodan Consulting?</span>
                </h3>
                <ul className="space-y-4">
                  {[
                    "Free initial consultation for all clients",
                    "Certified and experienced real estate agents",
                    "Wide portfolio of residential & commercial listings",
                    "Trusted by 500+ satisfied clients in Nigeria",
                    "Fast, transparent, and fair transactions",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0 text-emerald-400 text-xs mt-0.5">
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Office Hours
                </h3>
                <div className="space-y-2 text-sm">
                  {[
                    ["Monday – Friday", "8:00 AM – 6:00 PM"],
                    ["Saturday", "9:00 AM – 4:00 PM"],
                    ["Sunday", "Closed"],
                  ].map(([day, time]) => (
                    <div key={day} className="flex justify-between text-gray-600">
                      <span className="font-medium">{day}</span>
                      <span className="text-emerald-700 font-semibold">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
