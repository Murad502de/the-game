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

const ContactSection = ({ gaming, lounge, cinema, sap }) => {
  const scrollToTop = () =>
    window.scrollTo({
      top: gaming.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });

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
  return (
    <section className={styles.contactWrapper}>
      <Image
        onLoad={() => counter.increment()}
        src={last_left}
        className={styles.leftImage}
        alt="last_left_image"
        priority
      />
      <Image
        onLoad={() => counter.increment()}
        src={last_right}
        className={styles.rightImage}
        alt="last_left_image"
        priority
      />

      <div className={styles.contactInner}>
        <div className={styles.container}>
          <div className={styles.booking}>
            <div className={styles.booking__title}>
              Welcome <br /> to The Game
            </div>
            <CyberButton color="primary2" btnClassName={styles.booking__btn}>
              Book your PC
            </CyberButton>
            <div className={styles.booking__text}>
              Contact Us for group reservations
            </div>
            <div className={styles.bookingContactBtns}>
              <CyberButton btnClassName={styles.fullWidth} color="simple">
                Phone
              </CyberButton>
              <CyberButton color="simple">Telegram</CyberButton>
              <CyberButton color="simple">WhatsApp</CyberButton>
            </div>
          </div>
        </div>

        <Footer
          scrollToTop={scrollToTop}
          scrollToLounge={scrollToLounge}
          scrollToCinema={scrollToCinema}
          scrollToSap={scrollToSap}
        />
        <FooterMobile
          scrollToTop={scrollToTop}
          scrollToLounge={scrollToLounge}
          scrollToCinema={scrollToCinema}
          scrollToSap={scrollToSap}
        />
        <FooterSm
          scrollToTop={scrollToTop}
          scrollToLounge={scrollToLounge}
          scrollToCinema={scrollToCinema}
          scrollToSap={scrollToSap}
        />
        <FooterXxsm
          scrollToTop={scrollToTop}
          scrollToLounge={scrollToLounge}
          scrollToCinema={scrollToCinema}
          scrollToSap={scrollToSap}
        />
      </div>
    </section>
  );
};

export default ContactSection;
