"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
// import { useRef, useEffect } from "react";

export default function Contact() {


  return (
    <div
      className="relative bg-gradient-to-b from-green-50 via-white to-gray-100 min-h-screen"
      
    >
      <Navbar />

      <main className="relative flex flex-col items-center justify-center mt-6 py-16 px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-green-600 mb-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
            Contact Us
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We'd love to hear from you!
        </motion.p>

        <motion.div
         //  ref={formRef}
          className="bg-white shadow-xl rounded-lg p-8 md:p-12 w-full max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>
            </div>
            {/* <div>
              <label className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter the subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div> */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                placeholder="Write your message here"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
              >
                Reach Out
              </button>
            </div>
          </form>
        </motion.div>
      </main>

      <section className="py-16 ">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-bold text-green-600 mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Contact Information
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 shadow-lg md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className=" p-6 rounded-lg shadow-md flex items-center">
              <FiMail className="text-green-500 text-4xl mr-4" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">sololekeagency@gmail.com</p>
              </div>
            </div>
            <div className=" p-6 rounded-lg shadow-md flex items-center">
              <FiPhone className="text-green-500 text-4xl mr-4" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">07045632782</p>
              </div>
            </div>
            <div className=" p-6 rounded-lg shadow-md flex items-center">
              <FiMapPin className="text-green-500 text-4xl mr-4" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Location</h3>
                <p className="text-gray-600">Eto Baba, Jos, Plateau State</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
}
