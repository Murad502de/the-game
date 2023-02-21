import styles from "./Navigation.module.scss";
import Image from "next/image";
import MenuPopup from "../MenuPopup/MenuPopup";
import logo from "../../../public/images/logo-light.svg";
import menu from "../../../public/icons/menu.svg"
import { useNavigation } from "./hooks/useNavigation";

const Navigation = ({gamingSectionRef, loungeSectionRef, cinemaSectionRef}) => {

    const {isMenuVisible, toggleMenuVisibility, menuPopupRef, scrollToSection} = useNavigation();

    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigationLinks}>
                <li onClick={() => scrollToSection(gamingSectionRef)} className={styles.navigationLinks__link}>Gaming</li>
                <li onClick={() => scrollToSection(loungeSectionRef)} className={styles.navigationLinks__link}>Lounge</li>
                <li onClick={() => scrollToSection(cinemaSectionRef)} className={styles.navigationLinks__link}>Cinema</li>
            </ul>

            <div className={styles.navigationLogo}>
                <Image src={logo} alt="logo" />
            </div>

            <ul className={styles.navigationLinks}>
                <li className={styles.navigationLinks__link}>Up</li>
                <li className={styles.navigationLinks__link}>Book</li>
                <li ref={menuPopupRef} className={styles.navigationMenu}>
                    <div onClick={toggleMenuVisibility} className={styles.navigationMenu__linkWithIcon}>
                        <div>Menu</div>
                        <Image src={menu} alt="menu" />
                    </div>
                    <MenuPopup isVisible={isMenuVisible}  />
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;