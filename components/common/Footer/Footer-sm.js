import styles from "./Footer.module.scss";
import Image from "next/image";
import footerLogo from "../../../public/images/footer_logo.svg";
import maps from "../../../public/icons/maps.svg";
import instagram from "../../../public/icons/instagram.svg";

const FooterSm = () => {
    return (
        <footer className={styles.smFooter}>
            <div className={styles.container}>
                <Image className={styles.smFooter__logo} src={footerLogo} alt="footerLogo" />
                <div className={styles.smLocation}>
                    <div className={styles.smLocation__text}>The Game LLC, JBR, Bahar 2</div>
                    <div className={styles.smMaps}>
                        <Image src={maps} alt="maps" />
                        <div className={styles.smMaps__text}>Open in maps</div>
                    </div>
                </div>

                <div className={styles.smExplore}>Explore</div>

                <ul className={styles.smList}>
                    <li className={styles.smItem}>Gaming</li>
                    <li className={styles.smItem}>Lounge</li>
                    <li className={styles.smItem}>Cinema</li>
                    <li className={styles.smItem}>Prices</li>
                </ul>

                <div className={styles.smInst}>
                    <Image src={instagram} alt="instagram" />
                    <div className={styles.smInst__text}>Instagram</div>
                </div>

                <div className={styles.smDesigned}>
                    Website design and development by <span>Acorn</span>
                </div>

                <div className={styles.smDesigned2}>
                    Website design <br/> and development by <span>Acorn</span>
                </div>

                <div className={styles.smPolicy}>
                    <div className={styles.smPolicy__leftText}>Privacy Policy</div>
                    <div className={styles.smPolicy__rightText}>© 2023</div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSm;