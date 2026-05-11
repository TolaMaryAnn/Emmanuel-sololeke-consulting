"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const contactCards = [
  {
    icon: FaPhoneAlt,
    title: "Call Us",
    subtitle: "Available Mon–Sat, 8am–6pm",
    value: "07045632782",
    href: "tel:07045632782",
    color: "from-emerald-500 to-emerald-700",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Visit Us",
    subtitle: "Our Office Location",
    value: "Eto Baba, Jos, Plateau State",
    href: "#",
    color: "from-teal-500 to-teal-700",
  },
  {
    icon: FaEnvelope,
    title: "Email Us",
    subtitle: "We reply within 24 hours",
    value: "info@kodanconsulting.com",
    href: "mailto:info@kodanconsulting.com",
    color: "from-green-600 to-green-800",
  },
];

export default function FindUs() {
  return (
    <section className="py-24 bg-[#0a0f1e] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-900/20 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-800/20 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-emerald-400 font-semibold text-sm tracking-widest uppercase mb-4 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Your Dream Home Is{" "}
            <span className="gradient-text">One Step Away</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Reach out to Kodan Consulting through any of the channels below and take the first step toward your perfect property.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactCards.map((card, index) => (
            <motion.a
              key={index}
              href={card.href}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:border-emerald-500/40 transition-all duration-400 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
            >
              {/* Glow background on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-900/30 to-transparent pointer-events-none" />

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-5 shadow-lg`}
              >
                <card.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-white font-bold text-lg mb-1">{card.title}</h3>
              <p className="text-gray-500 text-xs mb-3">{card.subtitle}</p>
              <p className="text-emerald-400 font-semibold text-sm">{card.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
