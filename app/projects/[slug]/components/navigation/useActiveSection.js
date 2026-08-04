"use client";

import { useEffect, useState } from "react";

export default function useActiveSection(ids = []) {
  const [activeSection, setActiveSection] = useState(ids[0] || "");

  useEffect(() => {
    if (!ids.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);

      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [ids]);

  return activeSection;
}
