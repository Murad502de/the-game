import styles from "./SpacesAndPackages.module.scss";
import BootcampCard from "./components/BootcampCard/BootcampCard";
import PremiumCard from "./components/PremiumCard/PremiumCard";
import VipCard from "./components/VipCard/VipCard";
import CyberButton from "../../UI/CyberButton/CyberButton";
import keyboard from "../../public/icons/keyboard.svg";
import mouse from "../../public/icons/mouse.svg";
import micro from "../../public/icons/micro.svg";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import counter from "../../store/index";
import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const SpacesAndPackages = React.forwardRef((props, ref) => {
  const { wrap, computers, scroll, spaces } = useScrollAnimation();

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

  return (
    <section ref={ref} className={`spaces-and-packages ${styles.SpacesAndPackages}`}>
      <div ref={spaces} className={styles.container}>
        <div className={styles.header}>
          <div className={styles.header__title}>
            Spaces <br /> and Packages
          </div>
        </div>
        <div ref={scroll} className={`spaces-and-packages__main ${styles.main}`}>
          <PremiumCard className="fact" />
          <BootcampCard className="fact" />
          <VipCard className="fact" />
        </div>
        <div className={styles.footer}>footer</div>
      </div>
    </section>
  );
});

export default SpacesAndPackages;
