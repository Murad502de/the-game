import { useEffect, useRef } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export const useScrollAnimation = () => {
  const wrap = useRef();
  const computers = useRef();
  const scroll = useRef();
  const spaces = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(scroll.current, {
      translateX: 0,
    }, {
      translateX: -scroll.current.offsetWidth,
      ease: 'none',
      duration: 1,
      scrollTrigger: {
        trigger: scroll.current,
        start: 'top-=24px top',
        end: 'bottom',
        scrub: 0.6,
        pin: true,
      }
    });

    return () => {
      pin.kill();
    };
  }, []);

  // useEffect(() => {
  //   let difference = computers.current.offsetWidth - spaces.current.offsetWidth;

  //   function getTween(b, e, i) {
  //     return b + (i / 99) * (e - b);
  //   }

  //   let tick;

  //   window.addEventListener("scroll", () => {
  //     tick = wrap.current.offsetTop;

  //     let currentPos = (tick * 99) / (scroll.current.offsetHeight - wrap.current.offsetHeight);

  //     computers.current.style.left = `-${getTween(
  //       0,
  //       difference,
  //       currentPos
  //     )}px`;
  //   });
  // }, [wrap, computers, scroll, spaces]);

  return {
    wrap,
    computers,
    scroll,
    spaces,
  };
};
