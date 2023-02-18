import styles from "./Navigation.module.scss";
import Image from "next/image";
import MenuPopup from "../MenuPopup/MenuPopup";
import logo from "../../../public/images/logo-light.svg";
import menu from "../../../public/icons/menu.svg"
import { useNavigation } from "./hooks/useNavigation";

const Navigation = () => {
    const {isMenuVisible, toggleMenuvisibility} = useNavigation();
    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigationLinks}>
                <li className={styles.navigationLinks__link}>Gaming</li>
                <li className={styles.navigationLinks__link}>Lounge</li>
                <li className={styles.navigationLinks__link}>Cinema</li>
            </ul>

            <div className={styles.navigationLogo}>
                <Image src={logo} />
            </div>

            <ul className={styles.navigationLinks}>
                <li className={styles.navigationLinks__link}>Up</li>
                <li className={styles.navigationLinks__link}>Book</li>
                <li onClick={toggleMenuvisibility} className={styles.navigationLinks__linkWithIcon}>
                    <div>Menu</div>
                    <Image src={menu} />
                </li>
                <MenuPopup isVisible={isMenuVisible} />
            </ul>
        </nav>
    )
}

export default Navigation;