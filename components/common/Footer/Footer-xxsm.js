import styles from "./Footer.module.scss";
import footerLogo from "../../../public/images/footer_logo.svg";
import maps from "../../../public/icons/maps.svg";
import instagram from "../../../public/icons/instagram.svg";
import counter from "../../../store/index";
import Image from "next/image";

const FooterXxsm = ({
  scrollToTop,
  scrollToLounge,
  scrollToCinema,
  scrollToSap,
}) => {
  return (
    <footer className={styles.xxsmFooter}>
      <div className={styles.container}>
        <Image
          onLoad={() => counter.increment()}
          src={footerLogo}
          alt="logo"
          priority
        />
        <div className={styles.xxsmLocation}>The Game LLC, JBR, Bahar 2</div>
        <div className={styles.xxsmMaps}>
          <Image
            onLoad={() => counter.increment()}
            src={maps}
            alt="maps"
            priority
          />
          <div className={styles.xxsmMaps__text}>Open in maps</div>
        </div>
        <div className={styles.footerXxsmData}>
          <div className={styles.leftColumn}>
            <div className={styles.leftColumn__explore}>Explore</div>
            <div onClick={scrollToTop} className={styles.leftColumn__item}>
              Gaming
            </div>
            <div onClick={scrollToLounge} className={styles.leftColumn__item}>
              Lounge
            </div>
            <div onClick={scrollToCinema} className={styles.leftColumn__item}>
              Cinema
            </div>
            <div onClick={scrollToSap} className={styles.leftColumn__item}>
              Prices
            </div>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.rightColumnInst}>
              <Image
                onLoad={() => counter.increment()}
                src={instagram}
                alt="instagram"
                priority
              />
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
  );
};

export default FooterXxsm;
