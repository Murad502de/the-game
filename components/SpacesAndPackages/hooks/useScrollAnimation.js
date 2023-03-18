import { useEffect, useRef } from "react";

export const useScrollAnimation = () => {
  const wrap = useRef();
  const computers = useRef();
  const scroll = useRef();
  const spaces = useRef();

  useEffect(() => {
    let difference = computers.current.offsetWidth - spaces.current.offsetWidth;
    function getTween(b, e, i) {
      return b + (i / 99) * (e - b);
    }
    let tick;
    window.addEventListener("scroll", () => {
      tick = wrap.current.offsetTop;
      let currentPos =
        (tick * 99) / (scroll.current.offsetHeight - wrap.current.offsetHeight);

      computers.current.style.left = `-${getTween(
        0,
        difference,
        currentPos
      )}px`;
    });
  }, [wrap, computers, scroll, spaces]);

  return {
    wrap,
    computers,
    scroll,
    spaces,
  };
};
