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
import { AiOutlineArrowUp } from "react-icons/ai";

const Navigation = ({
  gamingSectionRef,
  loungeSectionRef,
  cinemaSectionRef,
  onUpClick,
  onLogoClick,
}) => {
  const {
    isMenuVisible,
    isMenuVisibleMd,
    toggleMenuVisibility,
    toggleMenuVisibilityMd,
    menuPopupRef,
    menuPopupRefMd,
    scrollToSection,
  } = useNavigation();

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationLinks}>
        <li onClick={() => scrollToSection(gamingSectionRef)} className={styles.navigationLink}>
          Gaming
        </li>

        <li onClick={() => scrollToSection(loungeSectionRef)} className={styles.navigationLink}>
          Lounge
        </li>

        <li onClick={() => scrollToSection(cinemaSectionRef)} className={styles.navigationLink}>
          Cinema
        </li>
      </ul>

      <Image
        className={styles.navigationLogo}
        onLoad={() => counter.increment()}
        src={logo}
        alt="logo"
        priority
        onClick={() => { if (onLogoClick) onLogoClick(); }}
      />

      <ul className={classNames(styles.navigationLinks, styles.navigationLinksRight)}>
        <li onClick={() => { if (onUpClick) onUpClick(); }} className={classNames(styles.navigationLink, styles.navigationLinkWithIcon, styles.navigationLinkWithIconArrow)}>
          <AiOutlineArrowUp />
          <span>Up</span>
        </li>

        <li className={classNames(styles.navigationLink, styles.linkBookOrder)}>
          Book
        </li>

        <li id="li-1" ref={menuPopupRef} className={classNames(styles.navigationLink, styles.navigationMenu, styles.linkMenuOrder)}>
          <div onClick={toggleMenuVisibility} className={classNames(styles.navigationLinkWithIcon, styles.navigationLinkWithIconBurger)}>
            <span>Menu</span>
            <Image onLoad={() => counter.increment()} src={menu} alt="menu" />
          </div>

          <MenuPopup isVisible={isMenuVisible} />
        </li>
      </ul>

      <ul className={classNames(styles.navigationLinks, styles.navigationLinksRight, styles.navigationLinksRight_md)}>
        <li id="li-2" ref={menuPopupRefMd} className={classNames(styles.navigationLink, styles.navigationMenu, styles.linkMenuOrder)}>
          <div onClick={toggleMenuVisibilityMd} className={classNames(styles.navigationLinkWithIcon, styles.navigationLinkWithIconBurger)}>
            <span>Menu</span>
            <Image onLoad={() => counter.increment()} src={menu} alt="menu" />
          </div>

          <MenuPopup isVisible={isMenuVisibleMd} />
        </li>

        <li onClick={() => { if (onUpClick) onUpClick(); }} className={classNames(styles.navigationLink, styles.navigationLinkWithIcon, styles.navigationLinkWithIconArrow)}>
          <AiOutlineArrowUp />
          <span>Up</span>
        </li>

        <li className={classNames(styles.navigationLink, styles.linkBookOrder)}>
          Book
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
