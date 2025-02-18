"use client";

import { useEffect } from "react";

const LocomotiveScrollInit = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("locomotive-scroll").then((LocomotiveScroll) => {
        const scroll = new LocomotiveScroll.default({
          el: document.querySelector("[data-scroll-container]"),
          smooth: true,
        });

        return () => scroll.destroy();
      });
    }
  }, []);

  return null;
};

export default LocomotiveScrollInit;
