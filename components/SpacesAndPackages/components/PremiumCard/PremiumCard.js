import styles from "../card.module.scss";

const PremiumCard = () => {
    return (
        <div style={{width: 960}} className={styles.cardWrapper}>
            <div className={styles.cardInner}>
                <div className={styles.cardInner__title}>Premium</div>
                <div className={styles.cardInner__subTitle}>for 10 persons</div>
                <div className={styles.cardInner__room}>Room 4, 7</div>
                <div className={styles.cardInner__descriptionRoom}>Modern gaming hardware, premium comfort and a private room for 10 people</div>
                <div className={styles.cardMetrics}>
                    <div className={styles.metricsLeftColumn}>
                        <div className={styles.metricsLeftColumn__item}>Processor</div>
                        <div className={styles.metricsLeftColumn__item}>Video</div>
                        <div className={styles.metricsLeftColumn__item}>Monitor</div>
                    </div>
                    <div className={styles.metricsRightColumn}>
                        <div className={styles.metricsRightColumn__item}>13400F </div>
                        <div className={styles.metricsRightColumn__item}>6700XT</div>
                        <div className={styles.metricsRightColumn__item}>27"(2K/240Hz)</div>
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
                            <div className={styles.costRightBottomRow__item}>29</div>
                            <div className={styles.costRightBottomRow__item}>69</div>
                            <div className={styles.costRightBottomRow__item}>99</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.cardInner}>
                <div className={styles.cardInner__title}>Premium +</div>
                <div className={styles.cardInner__subTitle}>for 10 persons</div>
                <div className={styles.cardInner__room}>Room 1</div>
                <div className={styles.cardInner__descriptionRoom}>All the same as the Premium, with 32" monitors with action game hardware</div>
                <div className={styles.metricsValues}>
                    <div className={styles.metricsValues__value}>13600KF</div>
                    <div className={styles.metricsValues__value}>6750XT</div>
                    <div className={styles.metricsValues__value}>32”(2K/240Hz)</div>
                </div>

                <div className={styles.costValues}>
                    <div className={styles.costValuesTopRow}>
                        <div className={styles.costValuesTopRow__item}>1</div>
                        <div className={styles.costValuesTopRow__item}>3</div>
                        <div className={styles.costValuesTopRow__item}>5</div>
                    </div>
                    <div className={styles.costValuesBottomRow}>
                        <div className={styles.costValuesBottomRow__item}>39</div>
                        <div className={styles.costValuesBottomRow__item}>99</div>
                        <div className={styles.costValuesBottomRow__item}>133</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PremiumCard;