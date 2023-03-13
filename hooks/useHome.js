import { useRef, useState, useEffect } from "react";

export const useHome = () => {
  const gamingSectionRef = useRef();
  const loungeSectionRef = useRef();
  const cinemaSectionRef = useRef();
  const starSectionRef = useRef();
  const sapSectionRef = useRef();

  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => setLoading(false), 0);
    return () => clearTimeout(timeOutId);
  }, []);

  useEffect(() => {
    document.addEventListener("wheel", (event) => {
      if (event.deltaY > 0) {
        setIsScrolled(true);
      }
    });
    return () => {
      if (isScrolled) {
        document.removeEventListener("scroll");
      }
    };
  }, []);

  return {
    gamingSectionRef,
    loungeSectionRef,
    cinemaSectionRef,
    loading,
    isScrolled,
    starSectionRef,
    sapSectionRef,
  };
};
