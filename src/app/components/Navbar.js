"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full bg-gray-100 shadow-lg shadow-green-500 transition-transform duration-500 z-10 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="container  mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold tracking-wider text-black">
          Emmanuel Sololeke Consulting
        </Link>

        <div className="hidden md:flex space-x-6 tracking-wider">
          <Link href="#properties" className="hover:text-green-500 transition">
            Properties
          </Link>
          <Link href="#news" className="hover:text-green-500 transition">
            News
          </Link>
          <Link href="About" className="hover:text-green-500 transition">
            About
          </Link>
          <Link href="Contact" className="hover:text-green-500 transition">
            Contact
          </Link>
        </div>

        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 z-10">
          <a
            href="#properties"
            className="block py-2 hover:text-secondary transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Properties
          </a>
          <a
            href="#news"
            className="block py-2 hover:text-secondary transition"
            onClick={() => setIsMenuOpen(false)}
          >
            News
          </a>
          <a
            href="About"
            className="block py-2 hover:text-secondary transition"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="Contact"
            className="block py-2 hover:text-secondary transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </motion.nav>
  );
}
