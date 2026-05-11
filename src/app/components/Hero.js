"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiArrowRight, HiSearch } from "react-icons/hi";

const propertyTypes = ["Buy", "Sell", "Rent"];
const locations = ["Jos, Plateau State", "Abuja, FCT", "Lagos, Nigeria", "Any Location"];

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Buy");
  const [location, setLocation] = useState("");

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Assets/sololeke_5bg.jpg"
          alt="Kodan Consulting – Premium Real Estate"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/50 to-emerald-900/40" />
      </div>

      {/* Floating decorative orbs */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-700/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative container mx-auto min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 pt-24 pb-16 md:gap-12">

        {/* Left: Headline */}
        <motion.div
          className="text-white max-w-xl space-y-6 flex-1"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span
            className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full pulse-green"></span>
            Premium Real Estate Agency
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight">
            <span className="text-white">Find Your</span>
            <br />
            <span className="gradient-text">Dream</span>
            <br />
            <span className="text-white">Property</span>
          </h1>

          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-md">
            Kodan Consulting connects you with the finest properties across Plateau State and beyond. Expert guidance, exceptional results.
          </p>

          {/* Stats row */}
          <motion.div
            className="flex gap-8 pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {[
              { value: "500+", label: "Properties Listed" },
              { value: "10+", label: "Years Experience" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-black gradient-text">{stat.value}</p>
                <p className="text-white/50 text-xs">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-2">
            {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-emerald-400 hover:border-emerald-500 transition-all duration-300"
                whileHover={{ scale: 1.15 }}
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right: Glassmorphism Form */}
        <motion.div
          className="glass rounded-2xl p-6 md:p-8 w-full max-w-md mt-12 md:mt-0 border border-white/10 shadow-2xl"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="text-white text-xl font-bold mb-1">
            Start Your Search
          </h3>
          <p className="text-white/50 text-sm mb-5">
            Find the perfect property with us today
          </p>

          {/* Tabs */}
          <div className="flex gap-1 bg-white/10 rounded-xl p-1 mb-6">
            {propertyTypes.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${activeTab === tab
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                    : "text-white/60 hover:text-white"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-emerald-400 text-xs font-semibold mb-1.5 uppercase tracking-wider">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-white placeholder-white/30 text-sm input-glow transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-emerald-400 text-xs font-semibold mb-1.5 uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-white placeholder-white/30 text-sm input-glow transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-emerald-400 text-xs font-semibold mb-1.5 uppercase tracking-wider">
                Preferred Location
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-white text-sm input-glow transition-all duration-300"
                style={{ colorScheme: "dark" }}
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc} className="bg-gray-900 text-white">
                    {loc}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-emerald-400 text-xs font-semibold mb-1.5 uppercase tracking-wider">
                Message
              </label>
              <textarea
                rows={3}
                placeholder="Tell us what you're looking for..."
                className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-white placeholder-white/30 text-sm input-glow transition-all duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full py-3.5 rounded-xl text-white font-bold flex items-center justify-center gap-2 text-sm"
            >
              <HiSearch className="text-base" />
              {activeTab === "Buy" ? "Find Properties" : activeTab === "Sell" ? "Get a Valuation" : "Browse Rentals"}
              <HiArrowRight />
            </button>
          </form>

          <p className="text-white/30 text-xs text-center mt-4">
            Free consultation • No hidden fees
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-white/40 text-xs tracking-widest">SCROLL</span>
        <motion.div
          className="w-0.5 h-10 bg-gradient-to-b from-emerald-400 to-transparent rounded-full"
          animate={{ scaleY: [1, 0.5, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
}
