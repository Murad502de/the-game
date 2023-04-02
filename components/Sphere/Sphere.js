import { useEffect, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import styles from "./Sphere.module.scss";
import logo from "../../public/images/logo-dark.svg";
import menu from "../../public/icons/menu.svg";
import mouse from "../../public/icons/mouse-white.svg";
import MenuPopup from "../common/MenuPopup/MenuPopup";
import counter from "../../store/index";
import Image from "next/image";
// import Experience from "./three/Experience";
import { run } from "./sphereanim";

import classNames from "classnames";
import Background from "../../public/images/firstPlan-bg.png";
import Sand from "../../public/images/first_plan_element.png";

const Sphere = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const menuPopupRef = useClickOutside(() => { //TODO
    setIsVisible(false);
  });

  useEffect(() => {
    setLoaded(!loaded);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });

    run();
  }, [loaded]);

  const toggleMenuVisibility = () => setIsVisible((prev) => !prev); //TODO

  return (
    <section id="first" className={styles.sphere}>
      <div className={styles.sphereContainer}>
        <div className={styles.sphereTopbar}>
          <div className={classNames(styles.sphereTopbarTitle, styles.sphereTopbarTitleFirst)}>
            Book Your Seat
          </div>

          <div className={classNames(styles.sphereTopbarTitle, styles.sphereTopbarTitleFirstMobile)}>
            Book
          </div>

          <Image
            className={styles.sphereTopbarLogo}
            onLoad={() => counter.increment()}
            src={logo}
            alt="logo"
            priority
          />

          <div ref={menuPopupRef} className={classNames(styles.sphereTopbarTitle, styles.sphereTopbarTitleSecond, styles.navigationLink, styles.navigationMenu, styles.linkMenuOrder)}>
            <div onClick={toggleMenuVisibility} className={classNames(styles.navigationLinkWithIcon, styles.navigationLinkWithIconBurger)}>
              <span>Menu</span>

              <svg className={classNames(styles.sphereTopbarTitleSecondIconMenu)} width="21" height="10" viewBox="0 0 21 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.45 7.27273H21V10H9.45V7.27273Z" fill="white" />
                <path className={styles.sphereTopbarTitleSecondIconMenuFill} d="M9.45 7.27273H21V10H9.45V7.27273Z" fill="white" />
                <path d="M0 0H21V2.72727H0V0Z" fill="white" />
                <path className={styles.sphereTopbarTitleSecondIconMenuFill} d="M0 0H21V2.72727H0V0Z" fill="white" />
              </svg>

            </div>
            <MenuPopup isVisible={isVisible} />
          </div>
        </div>
      </div>

      <div id="sphere_wrapper" className={styles.sphereWrapper}>
        <div className={styles.sphereCanvasContainer}>
          <canvas id="canvas" className={styles.cnv}></canvas>
        </div>
      </div>

      <div className={styles.sphereMain}>
        <div className={styles.sphereInfo}>
          <div className={styles.sphereTitle}>
            Let’s find<br /> another <br /> place
          </div>

          <div className={classNames(styles.sphereTitle, styles.sphereTitleTwo)}>
            Place for<br /> relaxed<br />pastime
          </div>
        </div>

        <div className={styles.sphereInfo__mobile}>
          <div className={styles.sphereTitle}>
            Let’s find<br /> another place
          </div>

          <div className={classNames(styles.sphereTitle, styles.sphereTitleTwo)}>
            place for relaxed<br />  pastime
          </div>
        </div>
      </div>

      <div className={styles.sphereScroll}>
        Scroll to Start
      </div>

      <Image
        className={classNames(styles.sphereBackground)}
        onLoad={() => counter.increment()}
        src={Background}
        alt="logo"
        priority
      />
      <Image
        className={classNames(styles.sphereSand)}
        onLoad={() => counter.increment()}
        src={Sand}
        alt="logo"
        priority
      />
    </section>
  );
};

export default Sphere;
