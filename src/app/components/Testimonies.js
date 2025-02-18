"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "I reviewed and purchased a number of different RE Themes before settling on WPResidence. I've developed two great websites so far.",
    name: "David Gilmore",
    role: "Developer",
    image: "/Assets/customer_temp_0.png",
  },
  {
    quote:
      "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication to seeing things done the right way.",
    name: "Susan Barkley",
    role: "happy seller",
    image: "/Assets/customer_temp_1.png",
  },
  {
    quote:
      "We hired the WP Estate team as our buyer agent because they are specifically trained in Short Sale & Foreclosure transactions. All in all I have no doubt.",
    name: "Lisa Simpson",
    role: "happy buyer",
    image: "/Assets/customer_temp_2.png",
  },
];

export default function Testimonies() {
  return (
  <div>
      <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-green-500 mb-4">
            Our Clients Stories
          </h2>
        </div>
      <div className="relative h-screen">
     
      <div className="absolute inset-0">
        <motion.div
          className="bg-cover bg-center h-full"
          style={{
            backgroundImage: "url('/Assets/house-1158139_1280.jpg')",
          }}
          initial={{ scaleY: 1.5 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
      </div>

      <div className="relative z-10 h-full flex items-center justify-end">
        <div className="w-4/5 md:w-2/5 overflow-y-scroll h-5/6 bg-white bg-opacity-90 shadow-lg rounded-lg p-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-4 border-b border-gray-200 flex items-center gap-4"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-lg italic text-gray-700">
                  "{testimonial.quote}"
                </p>
                <p className="mt-2 font-bold text-gray-800">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
}
