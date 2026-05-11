"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Buy a Home",
    description:
      "Explore a curated selection of residential properties across Jos and beyond. We match you with your ideal home.",
    imageUrl: "/Assets/home.gif",
    icon: "🏡",
  },
  {
    title: "Sell Your Property",
    description:
      "Get maximum value for your property with our expert market analysis and wide reach across Plateau State.",
    imageUrl: "/Assets/sell_home.gif",
    icon: "🤝",
  },
  {
    title: "Property Valuation",
    description:
      "Accurate market valuations backed by data and years of local expertise to help you make informed decisions.",
    imageUrl: "/Assets/evaluate.gif",
    icon: "📊",
  },
  {
    title: "Free Certified Appraisal",
    description:
      "Our certified agents provide detailed property appraisals at no cost, giving you complete peace of mind.",
    imageUrl: "/Assets/certificate.gif",
    icon: "🏆",
  },
];

export default function WeDeliver() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-4 bg-emerald-50 px-4 py-1.5 rounded-full">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            We Deliver{" "}
            <span className="gradient-text">Enduring Results</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            At Kodan Consulting, we provide comprehensive real estate services
            tailored to meet your unique needs and goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl p-6 border border-gray-100 card-hover"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              {/* Top accent line */}
              <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full mb-5 group-hover:w-full transition-all duration-500" />

              {/* Icon */}
              <span className="text-3xl mb-4 block">{service.icon}</span>

              {/* GIF Image */}
              <div className="relative w-full h-40 rounded-xl overflow-hidden mb-5">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>

              <h3 className="text-base font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
