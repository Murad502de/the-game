import styles from "./Navigation.module.scss";
import Image from "next/image";
import logo from "../../../public/images/logo-light.svg";
import menu from "../../../public/icons/menu.svg"

const Navigation = () => {
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
                <li className={styles.navigationLinks__linkWithIcon}>
                    <div>Menu</div>
                    <Image src={menu} />
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;