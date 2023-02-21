import styles from "./LoungeSection.module.scss";
import Image from "next/image";
import popCorn from "../../public/images/pop-corn.png";
import cocaCola from "../../public/images/cocacola.png";
import classNames from "classnames";
import { useIntersection } from "../../hooks/useIntersection";
import React from "react";

const LoungeSection = React.forwardRef((props, ref) => {
    const {isIntersecting, nodeRef} = useIntersection();
    
    return (
        <div ref={ref} className={styles.loungeWrapper}>
            <div className={styles.loungeInner}>
                <div className={styles.container}>
                    <div className={styles.loungeInner__menu}>Lounge</div>
                    <div className={styles.loungeInner__title}>.. for Your <br/> Friends or Partners</div>
                    <div className={styles.loungeInner__text}>Gather your friends together in one place. Have a buddy championship and we'll provide everything you need for it.</div>

                    <div ref={nodeRef} className={styles.loungeImages}>
                        <Image src={cocaCola} alt="cocaCola" className={classNames(styles.loungeImages__image1, {[styles.loungeImages__image1Active]: isIntersecting})} />
                        <Image src={popCorn} alt="popCorn" className={classNames(styles.loungeImages__image2, {[styles.loungeImages__image2Active]: isIntersecting})} />
                    </div>

                    <div className={styles.loungeText}>In the lounge area you can have a snack, drink from the bar, <br /> order snacks and watch live TV in the company.</div>
                </div>
            </div>
        </div>
    )
})

export default LoungeSection;