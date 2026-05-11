"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  HiLocationMarker,
  HiMail,
  HiPhone,
  HiArrowRight,
} from "react-icons/hi";
import { useRef } from "react";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/About" },
  { label: "Contact", href: "/Contact" },
];

const services = [
  "Property Sales",
  "Property Rentals",
  "Property Valuation",
  "Investment Advisory",
  "Certified Appraisal",
];

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });

  return (
    <footer ref={footerRef} className="bg-[#0a0f1e] text-white">
      {/* CTA Banner */}
      <motion.div
        className="relative overflow-hidden py-14 px-6 text-center"
        style={{
          background: "linear-gradient(135deg, #059669, #10b981, #065f46)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white,transparent_60%)]" />
        <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
          Ready to Find Your Dream Property?
        </h2>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">
          Connect with Kodan Consulting today and let our experts guide you to
          the perfect investment.
        </p>
        <Link
          href="/Contact"
          className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl"
        >
          Get in Touch <HiArrowRight />
        </Link>
      </motion.div>

      {/* Main Footer Grid */}
      <div className="container mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-1"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/40">
              <span className="text-white font-black text-xl">K</span>
            </div>
            <div>
              <p className="font-extrabold text-lg tracking-wide leading-tight">
                KODAN
              </p>
              <p className="text-emerald-400 text-xs tracking-widest font-light">
                CONSULTING
              </p>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Kodan Consulting is a premier real estate brokerage in Jos, Plateau
            State. We connect clients with exceptional properties and investment
            opportunities.
          </p>
          <div className="flex gap-3">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              )
            )}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5 relative after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-emerald-500">
            Quick Links
          </h4>
          <ul className="space-y-3 mt-5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-emerald-400 text-sm flex items-center gap-2 group transition-colors duration-300"
                >
                  <HiArrowRight className="text-emerald-600 group-hover:text-emerald-400 transition-colors duration-300 text-xs" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5 relative after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-emerald-500">
            Our Services
          </h4>
          <ul className="space-y-3 mt-5">
            {services.map((s) => (
              <li key={s}>
                <span className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5 relative after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-emerald-500">
            Contact Us
          </h4>
          <ul className="space-y-4 mt-5">
            <li className="flex items-start gap-3 text-gray-400 text-sm">
              <HiLocationMarker className="text-emerald-500 text-lg flex-shrink-0 mt-0.5" />
              Eto Baba, Jos, Plateau State, Nigeria
            </li>
            <li>
              <a
                href="mailto:info@kodanconsulting.com"
                className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-300"
              >
                <HiMail className="text-emerald-500 text-lg flex-shrink-0" />
                info@kodanconsulting.com
              </a>
            </li>
            <li>
              <a
                href="tel:07045632782"
                className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-300"
              >
                <HiPhone className="text-emerald-500 text-lg flex-shrink-0" />
                07045632782
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-gray-500 text-sm">
          <p>© 2025 Kodan Consulting. All rights reserved.</p>
          <p>
            Designed & built with{" "}
            <span className="text-emerald-500">♥</span> by Tee
          </p>
        </div>
      </div>
    </footer>
  );
}
