import styles from "./Footer.module.scss";
import footerLogo from "../../../public/images/footer_logo.svg";
import maps from "../../../public/icons/maps.svg";
import instagram from "../../../public/icons/instagram.svg";
import counter from "../../../store/index";
import Image from "next/image";

const FooterSm = () => {
  return (
    <footer className={styles.smFooter}>
      <div className={styles.container}>
        <Image
          onLoad={() => counter.increment()}
          className={styles.smFooter__logo}
          src={footerLogo}
          alt="footerLogo"
          priority
        />
        <div className={styles.smLocation}>
          <div className={styles.smLocation__text}>
            The Game LLC, JBR, Bahar 2
          </div>
          <div className={styles.smMaps}>
            <Image
              onLoad={() => counter.increment()}
              src={maps}
              alt="maps"
              priority
            />
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
          <Image
            onLoad={() => counter.increment()}
            src={instagram}
            alt="instagram"
            priority
          />
          <div className={styles.smInst__text}>Instagram</div>
        </div>

        <div className={styles.smDesigned}>
          Website design and development by <span>Acorn</span>
        </div>

        <div className={styles.smDesigned2}>
          Website design <br /> and development by <span>Acorn</span>
        </div>

        <div className={styles.smPolicy}>
          <div className={styles.smPolicy__leftText}>Privacy Policy</div>
          <div className={styles.smPolicy__rightText}>© 2023</div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSm;
