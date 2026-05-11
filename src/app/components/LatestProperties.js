"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLaptopHouse, FaCar, FaBuilding, FaBed } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { HiArrowRight, HiTag, HiFilter } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

const properties = [
  {
    imageUrl: "/Assets/villas.jpg",
    name: "Luxury Villa in Greenville",
    price: "₦180,000,000",
    type: "For Sale",
    category: "Villa",
    description:
      "A stunning villa set on a hilltop with panoramic views, featuring premium finishes and spacious grounds.",
    units: 5,
    size: "3500 sqft",
    floors: 3,
    parking: 4,
    beds: 5,
    yearBuilt: 2022,
  },
  {
    imageUrl: "/Assets/industrial.jpg",
    name: "Modern Condo – Ring Road",
    price: "₦95,000,000",
    type: "For Sale",
    category: "Condo",
    description:
      "A sleek modern condo in a prime location offering contemporary living with top-tier amenities.",
    units: 10,
    size: "1500 sqft",
    floors: 2,
    parking: 2,
    beds: 3,
    yearBuilt: 2023,
  },
  {
    imageUrl: "/Assets/news_temp_2.jpg",
    name: "Stylish Apartment – GRA",
    price: "₦65,000/month",
    type: "For Rent",
    category: "Apartment",
    description:
      "A beautifully designed apartment in the Government Reserved Area with easy access to city amenities.",
    units: 8,
    size: "1200 sqft",
    floors: 1,
    parking: 1,
    beds: 2,
    yearBuilt: 2021,
  },
  {
    imageUrl: "/Assets/office.jpg",
    name: "Prime Office Space – CBD",
    price: "₦120,000/month",
    type: "For Rent",
    category: "Office",
    description:
      "Spacious office space in the Central Business District, ideal for corporate use with excellent facilities.",
    units: 10,
    size: "1500 sqft",
    floors: 3,
    parking: 2,
    beds: 0,
    yearBuilt: 2024,
  },
];

const filters = ["All", "For Sale", "For Rent"];

export default function LatestProperties() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? properties
      : properties.filter((p) => p.type === activeFilter);

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-100 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="inline-block text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-4 bg-emerald-50 px-4 py-1.5 rounded-full">
              Current Listings
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Featured <span className="gradient-text">Properties</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-white rounded-xl p-1.5 shadow-sm border border-gray-100 self-start md:self-auto">
            <HiFilter className="text-gray-400 ml-2" />
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300 ${activeFilter === f
                    ? "bg-emerald-500 text-white shadow-md shadow-emerald-200"
                    : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {filtered.map((property, index) => (
              <motion.div
                key={property.name}
                className="group bg-white rounded-2xl overflow-hidden card-hover border border-gray-100"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Image */}
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={property.imageUrl}
                    alt={property.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {property.type}
                    </span>
                    <span className="bg-black/60 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                      {property.category}
                    </span>
                  </div>
                  {/* Price badge */}
                  <div className="absolute bottom-4 right-4">
                    <span className="flex items-center gap-1 bg-white/95 text-emerald-700 text-sm font-black px-4 py-1.5 rounded-full shadow-lg">
                      <HiTag /> {property.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors duration-300">
                    {property.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                    {property.description}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-5">
                    {property.beds > 0 && (
                      <span className="flex items-center gap-1.5">
                        <FaBed className="text-emerald-500" /> {property.beds} Beds
                      </span>
                    )}
                    <span className="flex items-center gap-1.5">
                      <FaBuilding className="text-emerald-500" /> {property.size}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <GiFamilyHouse className="text-emerald-500" /> {property.floors} Floor{property.floors > 1 ? "s" : ""}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaCar className="text-emerald-500" /> {property.parking} Parking
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">
                      Built {property.yearBuilt}
                    </span>
                    <Link
                      href="/Contact"
                      className="flex items-center gap-1.5 text-emerald-600 font-semibold text-sm hover:gap-3 transition-all duration-300 group/btn"
                    >
                      Enquire
                      <HiArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
