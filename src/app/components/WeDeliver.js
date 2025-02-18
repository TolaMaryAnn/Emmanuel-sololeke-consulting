"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WeDeliver() {
  const services = [
    {
      title: "Buy a home with us",
      description:
        "This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Valley.",
      imageUrl: "/Assets/home.gif",
    },
    {
      title: "Sell your home with us",
      description:
        "This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Valley.",
      imageUrl: "/Assets/sell_home.gif",
    },
    {
      title: "Evaluate your home with us",
      description:
        "This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Valley.",
      imageUrl: "/Assets/evaluate.gif",
    },
    {
      title: "Free certified appraisal",
      description:
        "This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Valley.",
      imageUrl: "/Assets/certificate.gif",
    },
  ];

  return (
    <div className="py-40 md:py-20 bg-gray-50">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-green-500 mb-4">
          We Deliver Enduring Results
        </h2>
      </div>

      <div className="container mx-auto px-6 mt-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-xl py-12 px-6 shadow-green-500 transition-shadow duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="relative w-full h-72">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  layout="fill"
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
