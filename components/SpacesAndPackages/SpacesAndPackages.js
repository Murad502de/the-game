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

const SpacesAndPackages = React.forwardRef((props, ref) => {
  const { wrap, computers, scroll, spaces } = useScrollAnimation();

  return (
    <div ref={ref} className={styles.spacesScroll}>
      <section className={styles.sapWrapper}>
        <div className={styles.sapInner}>
          <div ref={scroll} className={styles.scroll}>
            <div ref={wrap} className={styles.containerWrapper}>
              <div className={styles.container}>
                <div className={styles.containerWrapper__title}>
                  Spaces <br /> and Packages
                </div>
              </div>
              <main ref={spaces} className={styles.sapContentWrapper}>
                <div ref={computers} className={styles.sapContent}>
                  <PremiumCard />
                  <BootcampCard />
                  <VipCard />
                </div>
              </main>
            </div>
          </div>

          <div className={styles.sapBooking}>
            <div className={styles.container}>
              <div className={styles.sapBookingInner}>
                <div className={styles.sapBookingInner__btn}>
                  <CyberButton color="primary-2">book your seat</CyberButton>
                </div>
                <div className={styles.innerRightColumn}>
                  <div className={styles.innerRightColumn__title}>
                    Each option is equipped with the best peripherals:
                  </div>
                  <div className={styles.equipment}>
                    <div className={styles.equipmentLeftColumn}>
                      <Image
                        onLoad={() => counter.increment()}
                        className={styles.equipmentLeftColumn__img1}
                        src={keyboard}
                        alt="keyboard"
                        priority
                      />
                      <Image
                        onLoad={() => counter.increment()}
                        className={styles.equipmentLeftColumn__img2}
                        src={mouse}
                        alt="mouse"
                        priority
                      />
                      <Image
                        onLoad={() => counter.increment()}
                        src={micro}
                        alt="micro"
                        priority
                      />
                    </div>
                    <div className={styles.equipmentRightColumn}>
                      <div className={styles.equipmentRightColumn__item}>
                        ROG Strix Scope RX TKL Wireless Deluxe
                      </div>
                      <div className={styles.equipmentRightColumn__item}>
                        ROG Keris Wireless AimPoint
                      </div>
                      <div className={styles.equipmentRightColumn__item}>
                        ROG Fusion II 300
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default SpacesAndPackages;
