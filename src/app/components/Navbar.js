"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";
import { HiHome, HiInformationCircle, HiMail } from "react-icons/hi";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/", icon: HiHome },
  { label: "About", href: "/About", icon: HiInformationCircle },
  { label: "Contact", href: "/Contact", icon: HiMail },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
            ? "glass-dark shadow-lg shadow-black/20 py-2"
            : "bg-transparent py-4"
          }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/40 group-hover:shadow-emerald-500/60 transition-all duration-300">
              <span className="text-white font-black text-lg leading-none">K</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={`font-extrabold tracking-wide transition-all duration-300 ${scrolled ? "text-white text-lg" : "text-white text-xl"
                  }`}
              >
                KODAN
              </span>
              <span
                className={`font-light tracking-widest transition-all duration-300 ${scrolled ? "text-emerald-400 text-xs" : "text-emerald-300 text-xs"
                  }`}
              >
                CONSULTING
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-white/80 hover:text-emerald-400 font-medium tracking-wider text-sm transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}
            <a
              href="tel:07045632782"
              className="btn-primary flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-full"
            >
              <FaPhone className="text-xs" />
              Call Us
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 glass-dark flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-3 text-2xl font-bold text-white hover:text-emerald-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <link.icon />
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="tel:07045632782"
              className="btn-primary flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-full text-lg mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <FaPhone />
              Call Us Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
