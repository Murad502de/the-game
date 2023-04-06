import styles from "./ContactSection.module.scss";
import last_left from "../../public/images/last_left_page.png";
import last_right from "../../public/images/last_right_page.png";
import CyberButton from "../../UI/CyberButton/CyberButton";
import Footer from "../common/Footer/Footer";
import FooterMobile from "../common/Footer/Footer-mobile";
import FooterSm from "../common/Footer/Footer-sm";
import FooterXxsm from "../common/Footer/Footer-xxsm";
import counter from "../../store/index";
import Image from "next/image";
import classNames from "classnames";

const ContactSection = ({ gaming, lounge, cinema, sap }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: gaming.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  const scrollToLounge = () => {
    window.scrollTo({
      top: lounge.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  const scrollToCinema = () => {
    window.scrollTo({
      top: cinema.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  const scrollToSap = () => {
    window.scrollTo({
      top: sap.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  const openInMaps = () => { //FIXME make one shared service
    const mapsUrl = 'https://www.google.com/maps/place/The+Game+-+(Premium+Lounge)/@25.0771504,55.1316332,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f159f14ace101:0x649faf546b5a79cc!8m2!3d25.0771456!4d55.1338219?coh=164777&entry=tt';

    window.open(mapsUrl, '_blank').focus();
  };
  const openTgWithAcorn = () => { //FIXME make one shared service
    const url = "https://t.me/povetev";

    window.open(url, '_blank').focus();
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactSectionBackdrop}>
        <Image
          onLoad={() => counter.increment()}
          src={last_left}
          className={styles.contactSectionBackdropLeft}
          alt="last_left_image"
          priority
        />
        <Image
          onLoad={() => counter.increment()}
          src={last_right}
          className={styles.contactSectionBackdropRight}
          alt="last_left_image"
          priority
        />
      </div>

      <div className={styles.contactSectionWrapper}>
        <div className={styles.contactSectionContainer}>
          <div className={styles.contactSectionTitle}>
            Welcome <br /> to The Game
          </div>

          <div className={styles.contactSectionContainerMain}>
            <CyberButton color="primary2" btnClassName={classNames(styles.contactSectionBtn, styles.contactSectionBooking)}>
              Book your PC
            </CyberButton>

            <div className={classNames(styles.contactSectionText, styles.contactSectionTextOneRow)}>
              Contact Us for group reservations
            </div>

            <div className={classNames(styles.contactSectionText, styles.contactSectionTextTwoRows)}>
              Contact Us for group <br /> reservations
            </div>

            <div className={styles.contactSectionContacts}>
              <CyberButton btnClassName={classNames(styles.contactSectionBtn, styles.contactSectionContact)} color="simple">
                Phone
              </CyberButton>
              <CyberButton btnClassName={classNames(styles.contactSectionBtn, styles.contactSectionContact)} color="simple">Telegram</CyberButton>
              <CyberButton btnClassName={classNames(styles.contactSectionBtn, styles.contactSectionContact)} color="simple">WhatsApp</CyberButton>
            </div>
          </div>
        </div>

        <div className={styles.contactSectionFooter}>
          <Footer
            scrollToTop={scrollToTop}
            scrollToLounge={scrollToLounge}
            scrollToCinema={scrollToCinema}
            scrollToSap={scrollToSap}
            openInMaps={openInMaps}
            openTgWithAcorn={openTgWithAcorn}
          />
          <FooterMobile
            scrollToTop={scrollToTop}
            scrollToLounge={scrollToLounge}
            scrollToCinema={scrollToCinema}
            scrollToSap={scrollToSap}
            openInMaps={openInMaps}
            openTgWithAcorn={openTgWithAcorn}
          />
          <FooterSm
            scrollToTop={scrollToTop}
            scrollToLounge={scrollToLounge}
            scrollToCinema={scrollToCinema}
            scrollToSap={scrollToSap}
            openInMaps={openInMaps}
            openTgWithAcorn={openTgWithAcorn}
          />
          <FooterXxsm
            scrollToTop={scrollToTop}
            scrollToLounge={scrollToLounge}
            scrollToCinema={scrollToCinema}
            scrollToSap={scrollToSap}
            openInMaps={openInMaps}
            openTgWithAcorn={openTgWithAcorn}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
