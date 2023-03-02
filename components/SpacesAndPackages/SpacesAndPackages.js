import styles from "./SpacesAndPackages.module.scss";
import Image from "next/image";
import BootcampCard from "./components/BootcampCard/BootcampCard";
import PremiumCard from "./components/PremiumCard/PremiumCard";
import VipCard from "./components/VipCard/VipCard";
import CyberButton from "../../UI/CyberButton/CyberButton";
import keyboard from "../../public/icons/keyboard.svg";
import mouse from "../../public/icons/mouse.svg";
import micro from "../../public/icons/micro.svg";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

const SpacesAndPackages = () => {

    const {contentRef} = useScrollAnimation()

    return (
      <div className={styles.spacesScroll}>
        <section className={styles.sapWrapper}>
          <div className={styles.sapInner}>
            <div className={styles.scroll}>
              <div className={styles.containerWrapper}>
                <div className={styles.container}>
                  <div className={styles.containerWrapper__title}>
                    Spaces <br /> and Packages
                  </div>
                </div>
                  <main className={styles.sapContentWrapper}>
                      <div ref={contentRef} className={styles.sapContent}>
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
                          className={styles.equipmentLeftColumn__img1}
                          src={keyboard}
                          alt="keyboard"
                        />
                        <Image
                          className={styles.equipmentLeftColumn__img2}
                          src={mouse}
                          alt="mouse"
                        />
                        <Image src={micro} alt="micro" />
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
}

export default SpacesAndPackages;