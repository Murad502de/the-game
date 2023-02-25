import styles from "./LoungeSection.module.scss";
import React from "react";
import LoungeImages from "./components/LoungeImages/LoungeImages";

const LoungeSection = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className={styles.loungeWrapper}>
            <div className={styles.loungeInner}>
                <div className={styles.container}>
                    <div className={styles.loungeInner__menu}>Lounge</div>
                    <div className={styles.loungeInner__title}>.. for Your <br/> Friends or Partners</div>
                    <div className={styles.loungeInner__text}>Gather your friends together in one place. Have a buddy championship and we'll provide everything you need for it.</div>

                    <LoungeImages />
                    
                    <div className={styles.loungeText}>In the lounge area you can have a snack, drink from the bar, <br /> order snacks and watch live TV in the company.</div>
                </div>
            </div>
        </div>
    )
})

export default LoungeSection;