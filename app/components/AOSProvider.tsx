"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface AOSProviderProps {
  children: React.ReactNode;
}

export function AOSProvider({ children }: AOSProviderProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      offset: 100,
      delay: 0,
      anchorPlacement: "top-bottom",
    });

    // Refresh AOS on route changes or dynamic content
    const refreshAOS = () => {
      AOS.refresh();
    };

    // Listen for dynamic content changes
    const observer = new MutationObserver(refreshAOS);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: false,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
}
