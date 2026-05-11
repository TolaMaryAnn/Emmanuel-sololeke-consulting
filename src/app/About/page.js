"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaAward, FaHandshake, FaSearchLocation } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import Link from "next/link";
// Add this at the top with other imports
import dynamic from "next/dynamic";

const values = [
  {
    icon: FaAward,
    title: "Excellence",
    desc: "We deliver premium real estate experiences with certified expertise and dedication to quality.",
  },
  {
    icon: FaHandshake,
    title: "Trust",
    desc: "Our clients trust us because we are transparent, honest, and dependable in every transaction.",
  },
  {
    icon: FaSearchLocation,
    title: "Local Expertise",
    desc: "Deep knowledge of the Plateau State and Nigerian property market means smarter decisions for you.",
  },
];

const team = [
  {
    src: "/Assets/business-8788632_1280.jpg",
    name: "Linda Smith",
    role: "CEO & Principal Agent",
    bio: "Over 15 years of real estate leadership. Linda drives client satisfaction and strategic growth at Kodan Consulting.",
  },
  {
    src: "/Assets/business-8788636_1280.jpg",
    name: "Jane Parker",
    role: "Marketing Lead",
    bio: "Jane's innovative campaigns have placed Kodan properties front and center in a competitive market.",
  },
  {
    src: "/Assets/business-8788635_1280.jpg",
    name: "John Wilson",
    role: "Senior Property Consultant",
    bio: "John's expert market analysis helps clients secure the best investment opportunities in Plateau State.",
  },
  {
    src: "/Assets/business-8788601_1280.jpg",
    name: "Alex Robin",
    role: "Interior Design Advisor",
    bio: "Alex brings a creative eye to every property, helping clients visualize their dream spaces beautifully.",
  },
];

export default function About() {
  return (
    <div className="bg-white">
      <Navbar />
      {/* Hero Section */}
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex items-end pb-16 overflow-hidden"
        style={{
          backgroundImage: "url('/Assets/sale-3701777_1280.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e]/85 via-[#0a0f1e]/60 to-emerald-950/50" />

        <div className="container mx-auto px-6 md:px-12 pt-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block text-emerald-400 font-semibold text-sm tracking-widest uppercase mb-4 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full">
              About Us
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-6">
              Who We Are
            </h1>
            <p className="text-white/70 max-w-xl text-base md:text-lg leading-relaxed">
              Kodan Consulting is Plateau State&apos;s most trusted real estate
              brokerage — connecting families, investors, and businesses with
              exceptional properties.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story + Image */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <span className="inline-block text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-4 bg-emerald-50 px-4 py-1.5 rounded-full">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Building Legacies,{" "}
              <span className="gradient-text">One Property at a Time</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Kodan Consulting is a leading real estate brokerage in Nigeria,
              specializing in connecting clients with their dream properties.
              With a focus on personalized service and deep market expertise, we
              make the buying and selling process seamless and rewarding.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our team of experienced agents is dedicated to providing top-notch
              guidance and support, ensuring that every client&apos;s real
              estate journey is a complete success.
            </p>
            <Link
              href="/Contact"
              className="btn-primary inline-flex items-center gap-2 text-white font-bold px-8 py-3.5 rounded-full"
            >
              Work With Us <HiArrowRight />
            </Link>
          </motion.div>

          <motion.div
            className="relative w-full h-80 md:h-[440px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <Image
              src="/Assets/houses.jpg"
              alt="Kodan Consulting Properties"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
            {/* Floating badge */}
            <div className="float-badge absolute bottom-6 left-6 bg-white rounded-2xl px-5 py-3 shadow-xl">
              <p className="text-2xl font-black text-emerald-600">10+</p>
              <p className="text-gray-500 text-xs font-medium">
                Years in Real Estate
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-black text-gray-900">
              Our <span className="gradient-text">Core Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="rounded-2xl p-8 border border-gray-100 card-hover bg-white"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <div className="w-13 h-13 w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-5">
                  <v.icon className="text-emerald-600 text-xl" />
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">
                  {v.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-emerald-600 font-semibold text-sm tracking-widest uppercase mb-4 bg-emerald-50 px-4 py-1.5 rounded-full">
              The Experts
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={member.src}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-base">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 text-xs font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
