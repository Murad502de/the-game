import { useEffect, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import styles from "./Sphere.module.scss";
import logo from "../../public/images/logo-dark.svg";
import menu from "../../public/icons/menu.svg";
import mouse from "../../public/icons/mouse-white.svg";
import sand from "../../public/images/first_plan_element.png";
import MenuPopup from "../common/MenuPopup/MenuPopup";
import counter from "../../store/index";
import Image from "next/image";
// import Experience from "./three/Experience";
import { run } from "./sphereanim";

const Sphere = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const menuPopupRef = useClickOutside(() => {
    setIsVisible(false);
  });

  useEffect(() => {
    setLoaded(!loaded);
  }, []);

  useEffect(() => {
    run();
  }, [loaded]);

  const toggleMenuVisibility = () => setIsVisible((prev) => !prev);

  return (
    <>
      <div id="first" className={styles.sphereWrapper}>
        <div id="container" className={styles.container}>
          <div className={styles.overlay}>
            <div className={styles.overlayWrapper}>
              <header className={styles.sphereHeader}>
                <div id="scroll-to-book" className={styles.sphereHeader__text}>
                  Book Your Seat
                </div>
                <Image
                  onLoad={() => counter.increment()}
                  src={logo}
                  alt="dark-logo"
                  priority
                />
                <div ref={menuPopupRef} className={styles.sphereHeaderMenu}>
                  <div
                    onClick={toggleMenuVisibility}
                    className={styles.menuLink}
                  >
                    <div className={styles.menuLink__text}>Menu</div>
                    <Image
                      onLoad={() => counter.increment()}
                      src={menu}
                      alt="menu"
                      priority
                    />
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
            </div>
          </div>

          <canvas id="canvas" className={styles.cnv}></canvas>

          <footer className={styles.sphereFooter}>
            <Image
              onLoad={() => counter.increment()}
              src={mouse}
              alt="mouse"
              priority
            />
            <div className={styles.sphereFooter__text}>Scroll to Start</div>
          </footer>
        </div>
        <Image
          onLoad={() => counter.increment()}
          className={styles.sandElement}
          src={sand}
          alt="sand"
          priority
        />
      </div>
    </>
  );
};

export default Sphere;
