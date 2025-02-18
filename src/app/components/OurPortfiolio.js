"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const portfolioItems = [
  {
    imageUrl: "/Assets/chairs-2181968_1280.jpg",
    title: "Apartments",
    listings: 17,
  },
  {
    imageUrl: "/Assets/large-home-389271_1280.jpg",
    title: "Houses",
    listings: 5,
  },
  {
    imageUrl: "/Assets/residence-2219972_1280.jpg",
    title: "Industrial",
    listings: 1,
  },
  {
    imageUrl: "/Assets/chairs-2181968_1280.jpg",
    title: "Offices",
    listings: 2,
  },
  {
    imageUrl: "/Assets/houses.jpg",
    title: "Condos",
    listings: 8,
  },
  {
    imageUrl: "/Assets/villas.jpg",
    title: "Villas",
    listings: 4,
  },
];

export default function OurPortfolio() {
  return (
    <div className="container mx-auto py-20 bg-gray-50">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-green-500">Our Portfolio</h2>
      </motion.div>

      <div className="grid px-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.2,
              duration: 0.6,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="relative w-full h-64">
              <Image
                src={item.imageUrl}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-2xl text-green-500 font-extrabold">
                {item.title}
              </h3>
              <p className="text-lg text-white">{item.listings} Listings</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
