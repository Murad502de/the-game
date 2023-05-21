import { useEffect, useRef } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export const useGamingSwiperAnimation = () => {
  const wrap = useRef();
  const computers = useRef();
  const scroll = useRef();
  const spaces = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {    
    const pin = gsap.fromTo(scroll.current, {
      translateX: 0,
    }, {
      translateX: -scroll.current.offsetWidth + document.querySelector('#gameswiper_container').offsetWidth,
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

  return {
    wrap,
    computers,
    scroll,
    spaces,
  };
};
