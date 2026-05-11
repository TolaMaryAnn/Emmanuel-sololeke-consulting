"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const portfolioItems = [
  { imageUrl: "/Assets/chairs-2181968_1280.jpg", title: "Apartments", listings: 17, icon: "🏢" },
  { imageUrl: "/Assets/large-home-389271_1280.jpg", title: "Houses", listings: 5, icon: "🏠" },
  { imageUrl: "/Assets/residence-2219972_1280.jpg", title: "Industrial", listings: 1, icon: "🏭" },
  { imageUrl: "/Assets/office.jpg", title: "Offices", listings: 2, icon: "🏦" },
  { imageUrl: "/Assets/houses.jpg", title: "Condos", listings: 8, icon: "🏗️" },
  { imageUrl: "/Assets/villas.jpg", title: "Villas", listings: 4, icon: "🏡" },
];

export default function OurPortfolio() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-50 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-4 bg-emerald-50 px-4 py-1.5 rounded-full">
            What We Handle
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-md mx-auto text-sm">
            From cozy apartments to grand villas, Kodan Consulting manages a diverse range of property types.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              style={{ height: "280px" }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient overlay - always visible at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                </div>
                <p className="text-emerald-400 text-sm font-semibold">
                  {item.listings} Active Listing{item.listings !== 1 ? "s" : ""}
                </p>
              </div>

              {/* Top right badge */}
              <div className="absolute top-4 right-4 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400">
                View All
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
