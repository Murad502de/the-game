import styles from "./ContactSection.module.scss";
import Image from "next/image";
import last_left from "../../public/images/last_left_page.png";
import last_right from "../../public/images/last_right_page.png";
import CyberButton from "../../UI/CyberButton/CyberButton";
import Footer from "../common/Footer/Footer";
import FooterMobile from "../common/Footer/Footer-mobile";
import FooterSm from "../common/Footer/Footer-sm";
import FooterXxsm from "../common/Footer/Footer-xxsm";

const ContactSection = () => {
    return (
        <section className={styles.contactWrapper}>
            <Image src={last_left} className={styles.leftImage} alt="last_left_image" />
            <Image src={last_right} className={styles.rightImage} alt="last_left_image" />

            <div className={styles.contactInner}>
                <div className={styles.container}>
                    <div className={styles.booking}>
                        <div className={styles.booking__title}>Welcome <br/> to The Game</div>
                        <CyberButton color="primary2" btnClassName={styles.booking__btn}>Book your PC</CyberButton>
                        <div className={styles.booking__text}>Contact Us for group reservations</div>
                        <div className={styles.bookingContactBtns}>
                            <CyberButton btnClassName={styles.fullWidth} color="simple">Phone</CyberButton>
                            <CyberButton color="simple">Telegram</CyberButton>
                            <CyberButton color="simple">WhatsApp</CyberButton>
                        </div>
                    </div>
                </div>

                <Footer />
                <FooterMobile />
                <FooterSm />
                <FooterXxsm />
            </div>
        </section>
    )
}

export default ContactSection;