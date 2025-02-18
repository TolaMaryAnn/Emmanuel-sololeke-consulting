"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebook, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Assets/sololeke_5bg.jpg"
          alt="estate agency"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 pt-20">
        <motion.div
          className="text-white max-w-md space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 4 }}
        >
          <h2 className="text-2xl md:text-3xl text-green-500 font-thin leading-tight">
            Estate Agency
          </h2>
          <div className="text-6xl md:text-8xl font-extrabold tracking-wide">
            <span className="border-b-4 border-white pb-1">EMMANUEL</span>
            <br />
            SOLOLEKE
          </div>
          <p className="text-sm md:text-base">
            <span className="text-lg font-bold">
              Get more real estate leads with Residence
            </span>
            <br />
            Engage with our professional real estate agents to sell, buy or rent
            your home.
          </p>
        </motion.div>

        <motion.div
          className="bg-black bg-opacity-90 py-6 px-16 max-w-md relative mt-8 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute inset-0 border-4 border-white pointer-events-none"
            initial={{ scale: 0 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          ></motion.div>
          <h3 className="text-2xl font-extrabold text-green-500">
            YOUR NEW HOME AWAITS.
          </h3>
          <p className="text-lg tracking-wider text-white">
            Contact us to get the best offer!
          </p>
          <form className="space-y-4 mt-10">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-green-500"
              >
                First Name*
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter Your First Name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-green-500"
              >
                Last Name*
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter Your Last Name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-green-500"
              >
                Email*
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter Your Email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-green-500"
              >
                Message*
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write to us"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-500 text-white font-bold rounded-md shadow-md hover:bg-green-600 focus:outline-none"
            >
              Reach out
            </button>
          </form>
          <div className="flex space-x-4 justify-center mt-4">
            <a href="#" className="text-white hover:text-green-500 text-3xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-white hover:text-green-500 text-3xl">
              <FaTwitter />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
