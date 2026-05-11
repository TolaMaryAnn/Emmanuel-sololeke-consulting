"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlinePhotograph } from "react-icons/hi";

const galleryImages = [
  { imageUrl: "/Assets/apartments.jpg", size: "large", label: "Apartments" },
  { imageUrl: "/Assets/furniture-998265_1280.jpg", size: "small", label: "Interiors" },
  { imageUrl: "/Assets/house-8200248_1280.jpg", size: "medium", label: "Houses" },
  { imageUrl: "/Assets/residence-2219972_1280.jpg", size: "large", label: "Residences" },
  { imageUrl: "/Assets/home-1622401_1280.jpg", size: "medium", label: "Homes" },
  { imageUrl: "/Assets/house-1158139_1280.jpg", size: "small", label: "Classic" },
  { imageUrl: "/Assets/home-2486092_1280.jpg", size: "large", label: "Modern" },
  { imageUrl: "/Assets/san-francisco-4674351_1280.jpg", size: "small", label: "City Views" },
  { imageUrl: "/Assets/houses.jpg", size: "medium", label: "Estate" },
  { imageUrl: "/Assets/large-home-389271_1280.jpg", size: "large", label: "Luxury" },
  { imageUrl: "/Assets/living-room-1835923_1280.jpg", size: "small", label: "Living Spaces" },
];

const sizeClasses = {
  small: "w-40 h-40",
  medium: "w-56 h-56",
  large: "w-72 h-72",
};

export default function Gallery() {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Header */}
      <motion.div
        className="text-center mb-14 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-flex items-center gap-2 text-emerald-400 font-semibold text-sm tracking-widest uppercase mb-4 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full">
          <HiOutlinePhotograph />
          Our Gallery
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white">
          A Glimpse of{" "}
          <span className="gradient-text">Kodan Properties</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-md mx-auto text-sm">
          Explore a curated collection of properties managed and sold by our team across Plateau State and Nigeria.
        </p>
      </motion.div>

      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className={`${sizeClasses[image.size]} relative overflow-hidden rounded-2xl group cursor-pointer`}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ scale: 1.04, zIndex: 10 }}
            >
              <Image
                src={image.imageUrl}
                alt={image.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-3">
                <span className="text-white text-xs font-bold tracking-wider uppercase">
                  {image.label}
                </span>
              </div>
              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 border-2 border-emerald-500/0 group-hover:border-emerald-500/50 rounded-2xl transition-all duration-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
