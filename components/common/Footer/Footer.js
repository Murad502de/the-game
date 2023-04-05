import styles from "./Footer.module.scss";
import footerLogo from "../../../public/images/footer_logo.svg";
import maps from "../../../public/icons/maps.svg";
import instagram from "../../../public/icons/instagram.svg";
import counter from "../../../store/index";
import Image from "next/image";

const Footer = ({
  scrollToTop,
  scrollToLounge,
  scrollToCinema,
  scrollToSap,
  openInMaps,
  openTgWithAcorn,
}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerInner}>
          <div className={styles.footerTopRow}>
            <Image
              onLoad={() => counter.increment()}
              src={footerLogo}
              className={styles.footerTopRow__logo}
              alt="footerLogo"
              priority
            />
            <div className={styles.explore}>
              <div className={styles.explore__text}>Explore</div>
              <ul className={styles.exploreList}>
                <li onClick={scrollToTop} className={styles.exploreList__item}>
                  Gaming
                </li>
                <li
                  onClick={scrollToLounge}
                  className={styles.exploreList__item}
                >
                  Lounge
                </li>
                <li
                  onClick={scrollToCinema}
                  className={styles.exploreList__item}
                >
                  Cinema
                </li>
                <li onClick={scrollToSap} className={styles.exploreList__item}>
                  Prices
                </li>
              </ul>
            </div>
            <div className={styles.instagram}>
              <Image
                onLoad={() => counter.increment()}
                src={instagram}
                alt="instagram"
                priority
              />
              <div className={styles.instagram__text}>Instagram</div>
            </div>
          </div>

          <div className={styles.footerBottomRow}>
            <div className={styles.firstBottomColumn}>
              <div className={styles.firstBottomColumn__location}>
                The Game LLC, JBR, Bahar 2
              </div>
              <div className={styles.maps}>
                <Image
                  onLoad={() => counter.increment()}
                  src={maps}
                  alt="maps"
                  priority
                />
                <div className={styles.maps__text} onClick={() => openInMaps()}>Open in maps</div>
              </div>
            </div>
            <div className={styles.secondBottomColumn}>
              Website design and development by <span onClick={() => openTgWithAcorn()}>Acorn</span>
            </div>
            <div className={styles.privacy}>
              <div className={styles.privacy__text}>Privacy Policy</div>
              <div className={styles.privacy__year}>© 2023</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
