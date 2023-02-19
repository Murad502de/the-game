import styles from "./MenuPopup.module.scss";
import Image from "next/image";
import classNames from "classnames";
import phone from "../../../public/icons/phone.svg";
import telegram from "../../../public/icons/telegram.svg";
import whatsapp from "../../../public/icons/whatsapp.svg";
import instagram from "../../../public/icons/instagram.svg";
import maps from "../../../public/icons/maps.svg";
import CyberButton from "../../../UI/CyberButton/CyberButton";

const MenuPopup = ({isVisible}) => {

    return (
        <div className={classNames(styles.menuPopupWrapper, {
            [styles.toVisiblePopupWrapper]: isVisible
        })}>
            <div className={styles.menuPopupInner}>
                <div className={styles.menuPopupInner__title}>Contacts</div>
                <div className={styles.menuPopupLink}>
                    <Image src={phone} alt="phone" />
                    <div>Phone</div>
                </div>
                <div className={styles.menuPopupLink}>
                    <Image src={telegram} alt="telegram" />
                    <div>Telegram</div>
                </div>
                <div className={styles.menuPopupLink}>
                    <Image src={whatsapp} alt="whatsapp" />
                    <div>Whatsapp</div>
                </div>
                <div className={styles.menuPopupLink}>
                    <Image src={instagram} alt="instagram" />
                    <div>Instagram</div>
                </div>
                <div className={styles.menuPopupLink}>
                    <Image src={maps} alt="maps" />
                    <div>Maps</div>
                </div>
            </div>

            <CyberButton>Book Your Seat</CyberButton>
        </div>
    )
}

export default MenuPopup;