"use client";

import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function FindUs() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-black mb-10">
          YOUR DREAM HOUSE IS ONE STEP AWAY!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center  shadow-lg  p-6 text-center">
            <FaPhoneAlt className="text-green-500 w-20 h-20 mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Call Us</h3>
            <p className="text-gray-600">Free Calls</p>
            <p className="mt-2 text-lg text-green-500 font-bold">07045632782</p>
          </div>

          <div className="flex flex-col items-center shadow-lg  p-6 text-center">
            <FaMapMarkerAlt className="text-green-500 w-20 h-20 mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Find Us</h3>
            <p className="text-gray-600">Eto Baba</p>
            <p className="mt-2 text-lg text-green-500 font-bold">
              Jos, Plateau State
            </p>
          </div>

          <div className="flex flex-col items-center shadow-lg  p-6 text-center">
            <FaEnvelope className="text-green-500 w-20 h-20 mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Email Us</h3>
            <p className="text-gray-600">Direct Email</p>
            <p className="mt-2 text-lg text-green-500 font-bold">
              sololekeagency@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
