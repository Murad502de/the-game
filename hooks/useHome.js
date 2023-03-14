import { useRef, useState, useEffect } from "react";

export const useHome = () => {
  const gamingSectionRef = useRef();
  const loungeSectionRef = useRef();
  const cinemaSectionRef = useRef();
  const starSectionRef = useRef();
  const sapSectionRef = useRef();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeOutId = setTimeout(() => setLoading(false), 0);
    return () => clearTimeout(timeOutId);
  }, []);

  return {
    gamingSectionRef,
    loungeSectionRef,
    cinemaSectionRef,
    loading,
    starSectionRef,
    sapSectionRef,
  };
};
