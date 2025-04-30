import { useEffect, useState } from "react";

export function useCurrentSection() {
  const [currentSection, setCurrentSection] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll(".porfolio-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: .25, 
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return { currentSection };
}
