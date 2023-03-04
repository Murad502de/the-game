import { useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import styles from "./Sphere.module.scss";
import Image from "next/image";
import logo from "../../public/images/logo-dark.svg";
import menu from "../../public/icons/menu.svg";
import mouse from "../../public/icons/mouse-white.svg";
import sand from "../../public/images/first_plan_element.png";
import MenuPopup from "../common/MenuPopup/MenuPopup";

const Sphere = () => {
  const [isVisible, setIsVisible] = useState(false);

  const menuPopupRef = useClickOutside(() => {
    setIsVisible(false);
  });

  const toggleMenuVisibility = () => setIsVisible((prev) => !prev);

  return (
    <div className={styles.sphereWrapper}>
      <div className={styles.container}>
        <header className={styles.sphereHeader}>
          <div className={styles.sphereHeader__text}>Book Your Seat</div>
          <Image src={logo} alt="dark-logo" />
          <div ref={menuPopupRef} className={styles.sphereHeaderMenu}>
            <div onClick={toggleMenuVisibility} className={styles.menuLink}>
              <div className={styles.menuLink__text}>Menu</div>
              <Image src={menu} alt="menu" />
            </div>
            <MenuPopup isVisible={isVisible} />
          </div>
        </header>

        <main className={styles.sphereMainContent}>
          <div className={styles.sphereMainContent__text}>
            Let’s find another place
          </div>
          <div className={styles.sphereMainContent__text}>
            Place for relaxed pastime
          </div>
        </main>

        <footer className={styles.sphereFooter}>
          <Image src={mouse} alt="mouse" />
          <div className={styles.sphereFooter__text}>Scroll to Start</div>
        </footer>
      </div>
      <Image className={styles.sandElement} src={sand} alt="sand" />
    </div>
  );
};

export default Sphere;
