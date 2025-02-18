"use client";

import LocomotiveScrollInit from "./components/LocomotiveScroll.";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WeDeliver from "./components/WeDeliver";
import LatestProperties from "./components/LatestProperties";
import OurPortfiolio from "./components/OurPortfiolio";
import Gallery from "./components/Gallery";
import Testimonies from "./components/Testimonies";
import FindUs from "./components/FindUs";
import LatestNews from "./components/LatestNews";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div >
      {/* <LocomotiveScrollInit /> */}
      <Navbar />
      <Hero />
      <WeDeliver />
      <LatestProperties />
      <OurPortfiolio />
      <Gallery />
      <Testimonies />
      <FindUs />
      <LatestNews />
      <Footer />
    </div>
  );
}
