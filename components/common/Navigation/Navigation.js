import styles from "./Navigation.module.scss";
import MenuPopup from "../MenuPopup/MenuPopup";
import logo from "../../../public/images/logo-light.svg";
import menu from "../../../public/icons/menu.svg";
import logo_xsm from "../../../public/icons/logo-xsm.svg";
import logo_xxsm from "../../../public/icons/logo-xxsm.svg";
import { useNavigation } from "./hooks/useNavigation";
import classNames from "classnames";
import counter from "../../../store/index";
import Image from "next/image";

const Navigation = ({
  gamingSectionRef,
  loungeSectionRef,
  cinemaSectionRef,
}) => {
  const { isMenuVisible, toggleMenuVisibility, menuPopupRef, scrollToSection } =
    useNavigation();
  return (
    <nav className={styles.navigation}>
      <div className={styles.navigationInner}>
        <ul className={styles.navigationLinks}>
          <li
            onClick={() => scrollToSection(gamingSectionRef)}
            className={styles.navigationLinks__link}
          >
            Gaming
          </li>
          <li
            onClick={() => scrollToSection(loungeSectionRef)}
            className={styles.navigationLinks__link}
          >
            Lounge
          </li>
          <li
            onClick={() => scrollToSection(cinemaSectionRef)}
            className={styles.navigationLinks__link}
          >
            Cinema
          </li>
        </ul>

        <div className={styles.navigationLogo}>
          <Image
            onLoad={() => counter.increment()}
            src={logo}
            alt="logo"
            priority
          />
        </div>

        <div className={styles.navigationLogo__xsm}>
          <Image
            onLoad={() => counter.increment()}
            src={logo_xsm}
            alt="logo"
            priority
          />
        </div>

        <div className={styles.navigationLogo__xxsm}>
          <Image
            onLoad={() => counter.increment()}
            src={logo_xxsm}
            alt="logo"
            priority
          />
        </div>

        <ul className={styles.navigationLinks}>
          <li
            className={classNames(
              styles.navigationLinks__link,
              styles.linkUpOrder
            )}
          >
            Up
          </li>
          <li
            className={classNames(
              styles.navigationLinks__link,
              styles.linkBookOrder
            )}
          >
            Book
          </li>
          <li
            ref={menuPopupRef}
            className={classNames(styles.navigationMenu, styles.linkMenuOrder)}
          >
            <div
              onClick={toggleMenuVisibility}
              className={styles.navigationMenu__linkWithIcon}
            >
              <div>Menu</div>
              <Image onLoad={() => counter.increment()} src={menu} alt="menu" />
            </div>
            <MenuPopup isVisible={isMenuVisible} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
