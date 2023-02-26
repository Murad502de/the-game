import styles from "./Footer.module.scss";
import Image from "next/image";
import footerLogo from "../../../public/images/footer_logo.svg";
import maps from "../../../public/icons/maps.svg";
import instagram from "../../../public/icons/instagram.svg";

const FooterXxsm = () => {
    return (
        <footer className={styles.xxsmFooter}>
            <div className={styles.container}>
                <Image src={footerLogo} alt="logo" /> 
                <div className={styles.xxsmLocation}>
                    The Game LLC, JBR, Bahar 2
                </div>
                <div className={styles.xxsmMaps}>
                    <Image src={maps} alt="maps" />
                    <div className={styles.xxsmMaps__text}>Open in maps</div>
                </div>
                <div className={styles.footerXxsmData}>
                    <div className={styles.leftColumn}>
                        <div className={styles.leftColumn__explore}>Explore</div>
                        <div className={styles.leftColumn__item}>Gaming</div>
                        <div className={styles.leftColumn__item}>Lounge</div>
                        <div className={styles.leftColumn__item}>Cinema</div>
                        <div className={styles.leftColumn__item}>Prices</div>
                    </div>
                    <div className={styles.rightColumn}>
                        <div className={styles.rightColumnInst}>
                            <Image src={instagram} alt="instagram" />
                            <div className={styles.rightColumnInst__text}>Instagram</div>
                        </div>
                        <div className={styles.xxsmDesigned}>
                            Website design and development by <span>Acorn</span>
                        </div>
                        <div className={styles.xxsmPolicy__leftText}>Privacy Policy</div>
                        <div className={styles.xxsmPolicy__rightText}>© 2023</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterXxsm;