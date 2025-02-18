"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { useRef } from "react";

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true });

  const typingEffect = (text) =>
    text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isInView ? 1 : 0,
        }}
        transition={{
          delay: index * 0.05,
          duration: 0.5,
        }}
      >
        {char}
      </motion.span>
    ));

  return (
    <footer ref={footerRef} className="bg-black text-white py-10 px-6">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h2 className="text-4xl font-bold text-green-500">
            {typingEffect("EMMANUEL SOLOLEKE")}
          </h2>
          <h3 className="text-2xl">{typingEffect("CONSULTING")}</h3>
        </div>

        <motion.div
          className="text-gray-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          {typingEffect("© 2025 by Emmanuel Sololeke Consulting.")}
        </motion.div>

        <nav className="flex justify-center space-x-8 mb-6">
          {["Home", "About", "Contact"].map((link, index) => (
            <motion.a
              key={index}
              href="#"
              className="text-gray-300 hover:text-green-500 transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link}
            </motion.a>
          ))}
        </nav>

        <p className="text-gray-400 mb-6">
          Eto baba, Jos, Plateau State <br />
          sololekeconsulting@gmail.com
        </p>

        <div className="flex justify-center space-x-6 mb-4">
          {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map(
            (Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  scale: isInView ? 1 : 0.8,
                }}
                transition={{ delay: index * 0.2 }}
                aria-label={Icon.displayName}
              >
                <Icon size={24} />
              </motion.a>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
