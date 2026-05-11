"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Kodan Consulting made finding our family home an absolute breeze. The team was professional, attentive, and truly listened to what we wanted. We couldn't be happier!",
    name: "David Gilmore",
    role: "Homeowner, Jos",
    image: "/Assets/customer_temp_0.png",
    rating: 5,
  },
  {
    quote:
      "The Kodan team helped me sell my property at an excellent price within just two weeks. Their market knowledge and dedication are unmatched in Plateau State.",
    name: "Susan Barkley",
    role: "Property Seller",
    image: "/Assets/customer_temp_1.png",
    rating: 5,
  },
  {
    quote:
      "As a first-time buyer, I was nervous about the process. Kodan Consulting walked me through every step with patience and expertise. Highly recommended!",
    name: "Lisa Simpson",
    role: "First-time Buyer",
    image: "/Assets/customer_temp_2.png",
    rating: 5,
  },
];

export default function Testimonies() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Assets/house-1158139_1280.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e]/90 via-[#0a0f1e]/80 to-emerald-950/70" />
      </div>

      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-emerald-400 font-semibold text-sm tracking-widest uppercase mb-4 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group glass rounded-2xl p-7 flex flex-col gap-4 border border-white/10 hover:border-emerald-500/30 transition-all duration-400"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
            >
              <FaQuoteLeft className="text-emerald-500/50 text-2xl flex-shrink-0" />

              <p className="text-white/80 text-sm leading-relaxed italic flex-1">
                "{testimonial.quote}"
              </p>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="text-amber-400 text-xs" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border-2 border-emerald-500/40">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={44}
                    height={44}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{testimonial.name}</p>
                  <p className="text-emerald-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Average rating badge */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 glass rounded-full px-8 py-3 border border-white/10">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-amber-400 text-sm" />
              ))}
            </div>
            <span className="text-white font-bold">4.9/5</span>
            <span className="text-gray-400 text-sm">from 200+ clients</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
