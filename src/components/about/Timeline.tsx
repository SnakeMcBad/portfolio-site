"use client";

import { timeline } from "@/data/timeline";
import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

export default function Timeline() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 90%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.35,
  });

  return (
    <section className="timeline-section" ref={sectionRef}>
      <div className="timeline-container">
        <div className="timeline-line-track" />
        <motion.div
          className="timeline-line-fill"
          style={{ scaleY: smoothProgress }}
        />

        <div className="timeline-line-start" />
        <div className="timeline-line-end" />

        {timeline.map((item, index) => (
          <motion.div
            key={`${item.title}-${index}`}
            className={`timeline-item ${item.side}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <motion.div
              className="timeline-content"
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <span className="timeline-date">{item.date}</span>
              <h3>{item.title}</h3>
              <p className="timeline-sub">{item.subtitle}</p>

              <ul>
                {item.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}