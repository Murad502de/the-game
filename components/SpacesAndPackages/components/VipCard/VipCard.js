import styles from "../card.module.scss";

const VipCard = () => {
    return (
        <div style={{width: 960}} className={styles.cardWrapper}>
            <div className={styles.cardInner}>
                <div className={styles.cardInner__title}>Vip</div>
                <div className={styles.cardInner__subTitle}>for 1 person</div>
                <div className={styles.cardInner__room}>Room 5</div>
                <div className={styles.cardInner__descriptionRoom}>The fastest computers in the world</div>
                <div className={styles.cardMetrics}>
                    <div className={styles.metricsLeftColumn}>
                        <div className={styles.metricsLeftColumn__item}>Processor</div>
                        <div className={styles.metricsLeftColumn__item}>Video</div>
                        <div className={styles.metricsLeftColumn__item}>Monitor</div>
                    </div>
                    <div className={styles.metricsRightColumn}>
                        <div className={styles.metricsRightColumn__item}>13900KS</div>
                        <div className={styles.metricsRightColumn__item}>RTX4090</div>
                        <div className={styles.metricsRightColumn__item}>32”(4K/240Hz)</div>
                    </div>
                </div>

                <div className={styles.cardCost}>
                    <div className={styles.costLeftColumn}>
                        <div className={styles.costLeftColumn__item}>Hours</div>
                        <div className={styles.costLeftColumn__item}>Price <span id={styles.extraSpan}>AED</span></div>
                    </div>
                    
                    <div className={styles.costRightColumn}>
                        <div className={styles.costRightTopRow}>
                            <div className={styles.costRightTopRow__item}>1</div>
                            <div className={styles.costRightTopRow__item}>3</div>
                            <div className={styles.costRightTopRow__item}>5</div>
                        </div>
                        <div className={styles.costRightBottomRow}>
                            <div className={styles.costRightBottomRow__item}>89</div>
                            <div className={styles.costRightBottomRow__item}>199</div>
                            <div className={styles.costRightBottomRow__item}>299</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.cardInner}>
                <div className={styles.cardInner__title}>Vip +</div>
                <div className={styles.cardInner__subTitle}>for 1 person with friends </div>
                <div className={styles.cardInner__room}>Room 6</div>
                <div className={styles.cardInner__descriptionRoom}>As a VIP, with the ability to relax in it with friends, as the room with a sofa.</div>
                <div className={styles.metricsValues}>
                    <div className={styles.metricsValues__value}>13900KS</div>
                    <div className={styles.metricsValues__value}>RTX4090</div>
                    <div className={styles.metricsValues__value}>42”(4K/120Hz)</div>
                </div>

                <div className={styles.costValues}>
                    <div className={styles.costValuesTopRow}>
                        <div className={styles.costValuesTopRow__item}>1</div>
                        <div className={styles.costValuesTopRow__item}>3</div>
                        <div className={styles.costValuesTopRow__item}>5</div>
                    </div>
                    <div className={styles.costValuesBottomRow}>
                        <div className={styles.costValuesBottomRow__item}>99</div>
                        <div className={styles.costValuesBottomRow__item}>233</div>
                        <div className={styles.costValuesBottomRow__item}>333</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VipCard;