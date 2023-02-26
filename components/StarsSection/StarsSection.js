import styles from "./StarsSection.module.scss";
import CyberButton from "../../UI/CyberButton/CyberButton";

const StarsSection = () => {
    return (
        <div className={styles.starsWrapper}>
            <div className={styles.container}>
                <div className={styles.starsInner}>
                    <div className={styles.infoBlock}>
                        <div className={styles.topInfoBlock}>
                            <div className={styles.infoCard}>
                                <div className={styles.infoCard__title}>Cinema</div>
                                <div className={styles.infoCard__subTitle}>Noise-insulated room where you can't hear outside noises, imitation starry sky, food and drinks right in the comfortable chair</div>
                                <div className={styles.infoCardCapacity}>
                                    <div className={styles.infoCardCapacity__title}>Capacity</div>
                                    <div className={styles.infoCardCapacity__value}>up to 4 people</div>
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
                                            <div className={styles.costRightBottomRow__item}>199</div>
                                            <div className={styles.costRightBottomRow__item}>499</div>
                                            <div className={styles.costRightBottomRow__item}>699</div>
                                        </div>
                                    </div>
                                </div>


                                <div className={styles.mobileCardCost}>
                                    <div className={styles.leftColumn}>
                                        <div className={styles.leftColumn__title}>Hours</div>
                                        <div className={styles.leftColumn__text}>1</div>
                                        <div className={styles.leftColumn__text}>3</div>
                                        <div className={styles.leftColumn__text}>5</div>
                                    </div>
                                    <div className={styles.rightColumn}>
                                        <div className={styles.rightColumn__title}>AED</div>
                                        <div className={styles.rightColumn__text}>199</div>
                                        <div className={styles.rightColumn__text}>499</div>
                                        <div className={styles.rightColumn__text}>699</div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.infoCard__title}>Cinema Max</div>
                                <div className={styles.infoCard__subTitle}>Same as Cinema, with a captivating atmosphere and great technical equipment, but for larger companies</div>
                                <div className={styles.infoCard__maxCapacity}>up to 8 people</div>
                                <div className={styles.costValues}>
                                    <div className={styles.costValuesTopRow}>
                                        <div className={styles.costValuesTopRow__item}>1</div>
                                        <div className={styles.costValuesTopRow__item}>3</div>
                                        <div className={styles.costValuesTopRow__item}>5</div>
                                    </div>
                                    <div className={styles.costValuesBottomRow}>
                                        <div className={styles.costValuesBottomRow__item}>249</div>
                                        <div className={styles.costValuesBottomRow__item}>599</div>
                                        <div className={styles.costValuesBottomRow__item}>899</div>
                                    </div>
                                </div>

                                <div id={styles.forSmall} className={styles.infoCardCapacity}>
                                    <div className={styles.infoCardCapacity__title}>Capacity</div>
                                    <div className={styles.infoCardCapacity__value}>up to 8 people</div>
                                </div>

                                <div id={styles.forSmall} className={styles.cardCost}>
                                
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
                                            <div className={styles.costRightBottomRow__item}>249</div>
                                            <div className={styles.costRightBottomRow__item}>899</div>
                                            <div className={styles.costRightBottomRow__item}>599</div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.mobileCostValues}>
                                    <div className={styles.leftColumn}>
                                        <div className={styles.leftColumn__item}>1</div>
                                        <div className={styles.leftColumn__item}>3</div>
                                        <div className={styles.leftColumn__item}>5</div>
                                    </div>
                                    <div className={styles.rightColumn}>
                                        <div className={styles.rightColumn__item}>249</div>
                                        <div className={styles.rightColumn__item}>599</div>
                                        <div className={styles.rightColumn__item}>899</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.infoBlock}>
                        <div className={styles.infoBlock__title}>Cinemas equipment</div>

                        <div className={styles.cinemasEquipment}>
                            <div className={styles.equipmentItem}>
                                <div className={styles.equipmentItem__title}>TV</div>
                                <div className={styles.equipmentItem__description}>
                                    QLED 4K Ultra HD <br />
                                    IMAX Enhanced <br />
                                    Dolby Vision IQ · Atmos <br />
                                    120Hz MEMC
                                </div>
                            </div>

                            <div className={styles.equipmentItem}>
                                <div className={styles.equipmentItem__title}>Services</div>
                                <div className={styles.equipmentItem__description}>
                                    Netflix Premium <br />
                                    YouTube Premium <br />
                                    Disney+ <br />
                                    MEGOGO
                                </div>
                            </div>

                            <div className={styles.equipmentItem}>
                                <div className={styles.equipmentItem__title}>Sound</div>
                                <div className={styles.equipmentItem__description}>
                                    3D Dolby Atmos / DTS:X
                                    True 11.1.4ch Sound
                                    22 Speakers
                                </div>
                            </div>


                            <div className={styles.equipmentItem}>
                                <div className={styles.equipmentItem__title}>Console</div>
                                <div className={styles.equipmentItem__description}>
                                    PS5 with many games
                                    PS VR2 <br />
                                    DualSense for 4 playes
                                </div>
                            </div>
                        </div>
                    </div>

                    <CyberButton btnClassName={styles.starsInner__btn} color="primary">Book Your Seat</CyberButton>

                </div>
            </div>
        </div>
    )
}

export default StarsSection;