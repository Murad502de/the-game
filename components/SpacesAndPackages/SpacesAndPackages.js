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
import classNames from "classnames";
import { bookSeat } from '../../services/bookingService';

const SpacesAndPackages = React.forwardRef((props, ref) => {
  const { scroll } = useScrollAnimation();

  return (
    <section ref={ref} className={`spaces-and-packages ${styles.SpacesAndPackages}`}>
      <div id="sap_container" className={styles.container}>
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

        <div className={styles.footer}>
          <div className={styles.booking}>
            <CyberButton btnClassName={styles.booking__btn} color="primary-2" onClick={bookSeat}>
              Book Your Seat
            </CyberButton>

            <div className={styles.booking__options}>
              <div className={classNames(styles.booking__options_title, styles.booking__options_title_sm)}>
                Each option is equipped with the best peripherals:
              </div>

              <div className={classNames(styles.booking__options_title, styles.booking__options_title_xxsm)}>
                Each option is equipped <br /> with the best peripherals:
              </div>

              <div className={styles.booking__option}>
                <div className={styles.booking__option__logo}>
                  <Image
                    onLoad={() => counter.increment()}
                    className={styles.booking__option__logo_img}
                    src={keyboard}
                    alt="keyboard"
                    priority
                  />
                </div>

                <div className={styles.booking__option__desc}>
                  ROG Strix Scope RX TKL Wireless Deluxe
                </div>
              </div>

              <div className={styles.booking__option}>
                <div className={styles.booking__option__logo}>
                  <Image
                    onLoad={() => counter.increment()}
                    className={styles.booking__option__logo_img}
                    src={mouse}
                    alt="mouse"
                    priority
                  />
                </div>

                <div className={styles.booking__option__desc}>
                  ROG Keris Wireless AimPoint
                </div>
              </div>

              <div className={styles.booking__option}>
                <div className={styles.booking__option__logo}>
                  <Image
                    onLoad={() => counter.increment()}
                    className={styles.booking__option__logo_img}
                    src={micro}
                    alt="micro"
                    priority
                  />
                </div>

                <div className={styles.booking__option__desc}>
                  ROG Fusion II 300
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default SpacesAndPackages;
