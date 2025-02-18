"use client";


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-green-50" >
      
      <Navbar />

      <section className="relative mt-12 min-h-screen flex flex-col items-center justify-center py-16">
        <div className="container mx-auto px-6 grid gap-12 md:grid-cols-2 items-center">
          <motion.div
            className="text-gray-800 text-center md:text-left max-w-3xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="md:text-6xl text-4xl font-bold mb-6 text-green-500">About Us</h1>
            <p className="text-lg leading-relaxed mb-4">
              Emmanuel Sololeke Consulting is a leading real estate brokerage
              specializing in connecting clients with their dream properties.
              With a focus on personalized service and market expertise, we
              strive to make the buying and selling process seamless and
              rewarding.
            </p>
            <p className="text-lg leading-relaxed">
              Our team of experienced agents is dedicated to providing top-notch
              guidance and support, ensuring that every client's real estate
              journey is a success.
            </p>
          </motion.div>

          <motion.div className="relative w-full h-[300px] md:h-[400px] overflow-hidden mt-8 md:mt-0">
            <motion.div
              className="w-full h-full"
              style={{
                scale: 1 + scrollPosition * 0.0005,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src="/Assets/sale-3701777_1280.jpg"
                alt="About us"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative min-h-screen flex flex-col items-center justify-between text-center text-gray-800">
        <div className="relative px-6  pt-16 md:pt-24">
          <h1 className="md:text-9xl text-6xl tracking-wider font-bold mb-6 text-black">
            Your Dream Home Awaits
          </h1>
        </div>

        <motion.div className="relative w-full px-4 md:px-0 h-[500px] md:h-[700px] overflow-hidden mt-8 md:mt-12">
          <motion.div
            className="w-full h-full"
            style={{
              scale: 1 + scrollPosition * 0.0005,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Image
              src="/Assets/sololeke_5bg.jpg"
              alt=""
              layout="fill"
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-16 mt-12 md:mt-52">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="md:text-6xl text-4xl font-bold mb-12 text-green-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Meet Our Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="team-member bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="/Assets/business-8788632_1280.jpg"
                  alt="Linda Smith"
                  className="object-cover rounded-full"
                  layout="fill"
                />
              </div>
              <h3 className="font-semibold text-xl">Linda Smith</h3>
              <p className="text-gray-500">CEO</p>
              <p className="mt-4 text-gray-600">
                Linda has over 15 years of experience in real estate, bringing a
                wealth of expertise in property management and development. She
                leads the team with a focus on customer satisfaction and
                innovation.
              </p>
            </motion.div>

            <motion.div
              className="team-member bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="/Assets/business-8788636_1280.jpg"
                  alt="Jane Parker"
                  className="object-cover rounded-full"
                  layout="fill"
                />
              </div>
              <h3 className="font-semibold text-xl">Jane Parker</h3>
              <p className="text-gray-500">Marketing Lead</p>
              <p className="mt-4 text-gray-600">
                Jane specializes in digital marketing strategies, social media
                management, and brand building. Her innovative campaigns have
                successfully raised the profile of numerous properties.
              </p>
            </motion.div>

            <motion.div
              className="team-member bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="/Assets/business-8788635_1280.jpg"
                  alt="John Wilson"
                  className="object-cover rounded-full"
                  layout="fill"
                />
              </div>
              <h3 className="font-semibold text-xl">John Wilson</h3>
              <p className="text-gray-500">Lead Developer</p>
              <p className="mt-4 text-gray-600">
                John is responsible for the development of our digital
                platforms. With a background in full-stack development, he
                ensures our website is user-friendly and up-to-date with the
                latest technology.
              </p>
            </motion.div>

            <motion.div
              className="team-member bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="/Assets/business-8788601_1280.jpg"
                  alt="Alex Robin"
                  className="object-cover rounded-full"
                  layout="fill"
                />
              </div>
              <h3 className="font-semibold text-xl">Alex Robin</h3>
              <p className="text-gray-500">Designer</p>
              <p className="mt-4 text-gray-600">
                Alex brings a creative flair to the team, designing beautiful
                and functional layouts for our properties. His designs help
                clients visualize their dream homes through stunning visuals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
