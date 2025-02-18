"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  { imageUrl: "/Assets/apartments.jpg", size: "large" },
  { imageUrl: "/Assets/furniture-998265_1280.jpg", size: "small" },
  { imageUrl: "/Assets/house-8200248_1280.jpg", size: "medium" },
  { imageUrl: "/Assets/residence-2219972_1280.jpg", size: "large" },
  { imageUrl: "/Assets/home-1622401_1280.jpg", size: "medium" },
  { imageUrl: "/Assets/house-1158139_1280.jpg", size: "small" },
  { imageUrl: "/Assets/home-2486092_1280.jpg", size: "large" },
  { imageUrl: "/Assets/san-francisco-4674351_1280.jpg", size: "small" },
  { imageUrl: "/Assets/sololeke_3bg.jpg", size: "medium" },
  { imageUrl: "/Assets/houses.jpg", size: "large" },
  { imageUrl: "/Assets/large-home-389271_1280.jpg", size: "small" },
  { imageUrl: "/Assets/living-room-1835923_1280.jpg", size: "medium" },
];

const sizeClasses = {
  small: "w-40 h-40",
  medium: "w-60 h-60",
  large: "w-80 h-80",
};

export default function Gallery() {
  return (
    <div className="container mx-auto py-16 px-4 bg-gray-50">
      <div className="flex flex-wrap justify-center gap-6">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className={`${
              sizeClasses[image.size]
            } relative overflow-hidden rounded-lg shadow-lg`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={image.imageUrl}
              alt={`Gallery image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-110"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
