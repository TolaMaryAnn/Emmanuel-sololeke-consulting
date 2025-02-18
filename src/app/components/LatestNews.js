"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const news = [
  {
    date: "Sep 08, 2023",
    title: "Advanced search widget on the right",
    description:
      "A modern redrawing of the 1807 version of the Commissioner’s Grid plan ...",
    image: "/Assets/living-room-1835923_1280.jpg",
  },
  {
    date: "May 28, 2014",
    title: "Buying a Home",
    description:
      "There are cracks in the foundation. Nothing structural. Nothing that’s going to threaten the stability of the home, ...",
    image: "/Assets/house-1158139_1280.jpg",
  },
  {
    date: "May 27, 2014",
    title: "Manhattan Apartments",
    description:
      "In Manhattan, uptown means north (more precisely north-northeast, which is the direction the island and its street ...",
    image: "/Assets/residence-2219972_1280.jpg",
  },
];

export default function LatestNews() {
  return (
    <div
      className="relative bg-cover bg-center py-16"
      style={{
        backgroundImage: "url('/Assets/house-5835871_1280.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center text-green-500 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Latest News
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white  shadow-lg hover:shadow-green-500/50 overflow-hidden transform transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500">{item.date}</p>
                <h3 className="text-lg font-bold text-gray-800 mt-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                <a
                  href="#"
                  className="text-green-500 mt-4 inline-block font-semibold"
                >
                  Continue Reading &gt;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
