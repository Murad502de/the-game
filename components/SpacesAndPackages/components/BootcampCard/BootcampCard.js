import styles from "../card.module.scss";

const BootcampCard = () => {
    return (
        <div style={{width: 660}} className={styles.cardWrapper}>
            <div className={styles.cardInner}>
                <div className={styles.cardInner__title}>Bootcamp</div>
                <div className={styles.cardInner__subTitle}>for 5 persons</div>
                <div className={styles.cardInner__room}>Room 2, 3</div>
                <div className={styles.cardInner__descriptionRoom}>Computers from the Premium +, for 5 people, designed for CS:GO championships</div>

                <div className={styles.cardMetrics}>
                    <div className={styles.metricsLeftColumn}>
                        <div className={styles.metricsLeftColumn__item}>Processor</div>
                        <div className={styles.metricsLeftColumn__item}>Video</div>
                        <div className={styles.metricsLeftColumn__item}>Monitor <span id={styles.extraSpan}>CS:GO Specials</span></div>
                    </div>
                    <div className={styles.metricsRightColumn}>
                        <div className={styles.metricsRightColumn__item}>13600KF</div>
                        <div className={styles.metricsRightColumn__item}>6750XT</div>
                        <div className={styles.metricsRightColumn__item}>25”(FHD/360Hz)</div>
                    </div>
                </div>

                <div className={styles.cardCost}>
                    <div className={styles.costLeftColumn}>
                        <div className={styles.costLeftColumn__item}>Hours</div>
                        <div className={styles.costLeftColumn__item}>Price <span>AED</span></div>
                    </div>
                    
                    <div className={styles.costRightColumn}>
                        <div className={styles.costRightTopRow}>
                            <div className={styles.costRightTopRow__item}>1</div>
                            <div className={styles.costRightTopRow__item}>3</div>
                            <div className={styles.costRightTopRow__item}>5</div>
                        </div>
                        <div className={styles.costRightBottomRow}>
                            <div className={styles.costRightBottomRow__item}>49</div>
                            <div className={styles.costRightBottomRow__item}>119</div>
                            <div className={styles.costRightBottomRow__item}>169</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BootcampCard;