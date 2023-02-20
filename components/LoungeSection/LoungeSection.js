import styles from "./LoungeSection.module.scss";
import Image from "next/image";
import popCorn from "../../public/images/pop-corn.png";
import cocaCola from "../../public/images/cocacola.png";
import { useLoungeSection } from "./hooks/useLoungeSection";
import classNames from "classnames";

const LoungeSection = () => {
    const {isLoungeVisible, loungeRef} = useLoungeSection();
    
    return (
        <div className={styles.loungeWrapper}>
            <div className={styles.loungeInner}>
                <div className={styles.container}>
                    <div className={styles.loungeInner__menu}>Lounge</div>
                    <div className={styles.loungeInner__title}>.. for Your <br/> Friends or Partners</div>
                    <div className={styles.loungeInner__text}>Gather your friends together in one place. Have a buddy championship and we'll provide everything you need for it.</div>

                    <div ref={loungeRef} className={styles.loungeImages}>
                        <Image src={cocaCola} className={classNames(styles.loungeImages__image1, {[styles.loungeImages__image1Active]: isLoungeVisible})} />
                        <Image src={popCorn} className={classNames(styles.loungeImages__image2, {[styles.loungeImages__image2Active]: isLoungeVisible})} />
                    </div>

                    <div className={styles.loungeText}>In the lounge area you can have a snack, drink from the bar, <br /> order snacks and watch live TV in the company.</div>
                </div>
            </div>
        </div>
    )
}

export default LoungeSection;