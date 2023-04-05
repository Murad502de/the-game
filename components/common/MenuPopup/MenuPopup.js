import styles from "./MenuPopup.module.scss";
import classNames from "classnames";
import phone from "../../../public/icons/phone.svg";
import telegram from "../../../public/icons/telegram.svg";
import whatsapp from "../../../public/icons/whatsapp.svg";
import instagram from "../../../public/icons/instagram.svg";
import maps from "../../../public/icons/maps.svg";
import CyberButton from "../../../UI/CyberButton/CyberButton";
import Image from "next/image";

import counter from "../../../store/index";

const MenuPopup = ({ isVisible }) => {
  const mapsUrl = 'https://www.google.com/maps/place/The+Game+-+(Premium+Lounge)/@25.0771504,55.1316332,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f159f14ace101:0x649faf546b5a79cc!8m2!3d25.0771456!4d55.1338219?coh=164777&entry=tt';

  return (
    <div
      id="menu"
      className={classNames(styles.menuPopupWrapper, {
        [styles.toVisiblePopupWrapper]: isVisible,
      })}
    >
      <div className={styles.menuPopupInner}>
        <div className={styles.menuPopupInner__title}>Contacts</div>
        <div className={styles.menuPopupLink}>
          <Image
            onLoad={() => counter.increment()}
            src={phone}
            alt="phone"
            priority
          />
          <div>Phone</div>
        </div>
        <div className={styles.menuPopupLink}>
          <Image
            onLoad={() => counter.increment()}
            src={telegram}
            alt="telegram"
            priority
          />
          <div>Telegram</div>
        </div>
        <div className={styles.menuPopupLink}>
          <Image
            onLoad={() => counter.increment()}
            src={whatsapp}
            alt="whatsapp"
            priority
          />
          <div>Whatsapp</div>
        </div>
        <div className={styles.menuPopupLink}>
          <Image
            onLoad={() => counter.increment()}
            src={instagram}
            alt="instagram"
            priority
          />
          <div>Instagram</div>
        </div>
        <div className={styles.menuPopupLink}>
          <Image
            onLoad={() => counter.increment()}
            src={maps}
            alt="maps"
            priority
          />
          <div onClick={() => { window.open(mapsUrl, '_blank').focus() }}>Maps</div>
        </div>
      </div>

      <CyberButton>Book Your Seat</CyberButton>
    </div>
  );
};

export default MenuPopup;
