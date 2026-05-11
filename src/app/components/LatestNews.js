"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiArrowRight, HiClock, HiNewspaper } from "react-icons/hi";

const news = [
  {
    date: "March 15, 2025",
    category: "Market Insights",
    title: "Jos Real Estate Market Surges in Q1 2025",
    description:
      "Plateau State's property market registers a 22% growth in the first quarter, with residential demand leading the surge driven by infrastructure development.",
    image: "/Assets/living-room-1835923_1280.jpg",
  },
  {
    date: "February 4, 2025",
    category: "Buying Tips",
    title: "5 Things to Check Before Buying Your First Home",
    description:
      "First-time homebuyers often overlook critical checks. Our expert team shares the most important steps to ensure a smooth and rewarding purchase.",
    image: "/Assets/house-1158139_1280.jpg",
  },
  {
    date: "January 20, 2025",
    category: "Investment",
    title: "Why Plateau State is a Smart Real Estate Investment",
    description:
      "With growing infrastructure and a stable economy, Plateau State continues to attract investors looking for high-yield residential and commercial properties.",
    image: "/Assets/residence-2219972_1280.jpg",
  },
];

export default function LatestNews() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-72 bg-emerald-50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-4 bg-emerald-50 px-4 py-1.5 rounded-full">
              <HiNewspaper />
              Latest News
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Market <span className="gradient-text">Updates</span>
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-1.5 text-emerald-600 font-semibold text-sm hover:gap-3 transition-all duration-300 self-start md:self-auto"
          >
            View All Articles <HiArrowRight />
          </a>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <motion.article
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                  <HiClock />
                  {item.date}
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-emerald-600 transition-colors duration-300 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="flex items-center gap-1.5 text-emerald-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                >
                  Read More <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
