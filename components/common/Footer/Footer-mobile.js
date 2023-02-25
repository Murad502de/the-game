import styles from "./Footer.module.scss";
import Image from "next/image";
import logo from "../../../public/images/footer_logo.svg";
import instagram from "../../../public/icons/instagram.svg";
import maps from "../../../public/icons/maps.svg";

const FooterMobile = () => {
    return (
        <footer className={styles.footerMobile}>
            <div className={styles.container}>
                <div className={styles.footerMobileLogo}>
                    <Image className={styles.footerMobileLogo__logo} src={logo} alt="logo" />
                    <div className={styles.logoInstagram}>
                        <Image src={instagram} alt="insta" />
                        <div className={styles.logoInstagram__text}>Instagram</div>
                    </div>
                </div>

                <div className={styles.footerMobileExplore}>
                    <div className={styles.exploreLeftColumn}>
                        <div className={styles.exploreLeftColumn__text}>The Game LLC, JBR, Bahar 2</div>
                        <div className={styles.exploreLeftMaps}>
                            <Image src={maps} alt="maps" />
                            <div className={styles.exploreLeftMaps__text}>Open in maps</div>
                        </div>
                    </div>
                    <div className={styles.exploreRightColumn}>
                        <div className={styles.exploreRightColumn__text}>Explore</div>
                        <ul className={styles.exploreList}>
                            <li className={styles.exploreList__item}>Gaming</li>
                            <li className={styles.exploreList__item}>Lounge</li>
                            <li className={styles.exploreList__item}>Cinema</li>
                            <li className={styles.exploreList__item}>Prices</li>
                        </ul>
                    </div>
                </div>
                

                <div className={styles.footerMobileRoots}>
                    <div className={styles.rootsLeftColumn}>
                        Website design <br/> and development by <span>Acorn</span> 
                    </div>
                    <div className={styles.rootsRightColumn}>
                        <div className={styles.policy}>Privacy Policy</div>
                        <div className={styles.year}>© 2023</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterMobile;