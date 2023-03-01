import { useEffect, useRef, useState } from "react";

export const useScrollAnimation = () => {
    const contentRef = useRef();

    const [scroll, setScroll] = useState(true);


    useEffect(() => {
      if (contentRef && contentRef.current) {
        contentRef.current.addEventListener("wheel", handleScroll);
      } else {
        endScroll()
      }
      return () => endScroll();
    }, [contentRef]);

    const endScroll = () => {
        contentRef.current.removeEventListener("wheel", handleScroll);
    }

    const handleScroll = (event) => {
        event.preventDefault();
        const coordinates = contentRef.current.getBoundingClientRect();
        const coordinatesRatio = coordinates.left / coordinates.width;
        if (coordinatesRatio < 0.5 || coordinatesRatio > -0.5) {
            contentRef.current.style.left = `${
            coordinates.left - event.deltaY * 1.5
            }px`;
        }
    };

    return {contentRef};
}  