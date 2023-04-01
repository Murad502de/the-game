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

  // const menuPopupRef = useClickOutside(() => { //TODO
  //   setIsVisible(false);
  // });

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

  // const toggleMenuVisibility = () => setIsVisible((prev) => !prev); //TODO

  return (
    <section id="first" className={styles.sphere}>
      <div id="sphere_wrapper" className={styles.sphereWrapper}>
        <div className={styles.sphereContainer}></div>

        <div className={styles.sphereCanvasContainer}>
          <canvas id="canvas" className={styles.cnv}></canvas>
        </div>
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
