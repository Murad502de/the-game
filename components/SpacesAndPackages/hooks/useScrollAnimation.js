import { useEffect, useRef } from "react";

export const useScrollAnimation = () => {
    const contentRef = useRef();

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => endScroll();
    }, [contentRef]);

    const endScroll = () => {
        window.removeEventListener("scroll", handleScroll);
    }

    const handleScroll = () => {
        if (window.scrollY > 7300 && window.scrollY < 9800) {
          contentRef.current.style.left = `-${(window.scrollY - 7800)}px`;
        }
    };

    return {contentRef};
}  