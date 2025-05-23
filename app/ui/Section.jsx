"use client";
import { useEffect } from "react";

const Section = ({ id, children }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add the class when the section is in view
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is in view
      }
    );

    const section = document.getElementById(id);
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [id]);

  return (
    <section id={id} className="section mb-[40px]">
      {children}
    </section>
  );
};

export default Section;
