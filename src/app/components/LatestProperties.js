"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLaptopHouse, FaBath, FaCar, FaBuilding } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import Image from "next/image";

const properties = [
  {
    imageUrl: "/Assets/villas.jpg",
    name: "Luxury House in Greenville",
    price: "$1,200,000",
    description:
      "This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Valley.",
    units: 5,
    size: "3500 sqft",
    floors: 3,
    parking: 4,
    yearBuilt: 2022,
  },
  {
    imageUrl: "/Assets/industrial.jpg",
    name: "Modern Condo for Sale",
    price: "$650,000",
    description:
      "This property offers a spacious interior and modern amenities for comfortable living.",
    units: 10,
    size: "1500 sqft",
    floors: 2,
    parking: 2,
    yearBuilt: 2023,
  },
  {
    imageUrl: "/Assets/news_temp_2.jpg",
    name: "Stylish Condo in Manhattan",
    price: "$850,000",
    description:
      "A stylish condo with beautiful interiors and easy access to city amenities.",
    units: 8,
    size: "1200 sqft",
    floors: 1,
    parking: 1,
    yearBuilt: 2021,
  },
  {
    imageUrl: "/Assets/office.jpg",
    name: "Office Space for Rent",
    price: "$650,000",
    description:
      "Modern office space in a prime location with excellent facilities.",
    units: 10,
    size: "1500 sqft",
    floors: 3,
    parking: 2,
    yearBuilt: 2024,
  },
];

export default function LatestProperties() {
  return (
    <div className="relative bg-gray-50 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-green-500 mb-4">
            Latest Published Properties
          </h2>
        </div>

        <div className="grid grid-cols-1 px-2 md:grid-cols-2 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 shadow-green-500 hover:shadow-xl hover:shadow-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="relative w-full h-64">
                <Image
                  src={property.imageUrl}
                  alt={property.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl text-green-500 font-bold">
                  {property.name}
                </h3>
                <p className="text-lg text-gray-600">{property.price}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {property.description}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <p>
                    <FaLaptopHouse className="inline text-green-500 mr-2" />
                    {property.units} Units
                  </p>
                  <p>
                    <FaBuilding className="inline text-green-500 mr-2" />
                    {property.size}
                  </p>
                  <p>
                    <GiFamilyHouse className="inline text-green-500 mr-2" />
                    {property.floors} Floors
                  </p>
                  <p>
                    <FaCar className="inline text-green-500 mr-2" />
                    {property.parking} Parking
                  </p>
                  <p className="col-span-2">Year Built: {property.yearBuilt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
