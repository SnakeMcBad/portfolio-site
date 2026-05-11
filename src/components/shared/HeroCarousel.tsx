"use client";

import { useState, useEffect } from "react";

const carouselImages = [
  "/features/Posts1.png",
  "/features/ComposeLayer.png",
  "/features/Blogs1.png",
  "/features/Blogs2.png",
  "/features/Groups1.png",
  "/features/Groups2.png",
  "/features/chatroom1.png",
  "/features/Notifications.png",
  "/features/Profile.png",
  "/features/adminactions.png",
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-carousel" aria-hidden="true">
      {carouselImages.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`hero-carousel-img${i === current ? " visible" : ""}`}
        />
      ))}
      <div className="hero-carousel-overlay" />
    </div>
  );
}
