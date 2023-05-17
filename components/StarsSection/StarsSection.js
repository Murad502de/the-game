import styles from "./StarsSection.module.scss";
import CyberButton from "../../UI/CyberButton/CyberButton";
import React, { useEffect } from "react";
import { starsAnimation } from "../../utils/starsAnimation";
import { Canvas } from "@react-three/fiber";
import classNames from "classnames";

const StarsSection = React.forwardRef((props, ref) => {
  useEffect(() => {
    starsAnimation();
  }, []);

  return (
    <div ref={ref} id="starsWrapper" className={styles.starsWrapper}>
      <div className={styles.container}>
        <div className={styles.starsInner}>
          <div className={styles.infoBlock}>
            <div className={styles.cinemas}>
              <div className={styles.cinemasCinema}>
                <div className={styles.infoBlockTit}>Cinema</div>

                <div className={styles.cinemasDescription}>
                  Noise-insulated room where you can't hear outside noises, imitation starry sky, food and drinks right in the comfortable chair.
                </div>

                <div className={classNames(styles.cinemasDtls, styles.cinemasDtlsVar1)}>
                  <div className={styles.cinemasDtlsVar1ColumnLeft}>
                    <div class={classNames(styles.cinemasDtlsTit, styles.cinemasDtlsVar1Tit)}>Capacity</div>
                    <div class={classNames(styles.cinemasDtlsTit, styles.cinemasDtlsVar1Tit)}>Hours</div>
                    <div class={classNames(styles.cinemasDtlsTit, styles.cinemasDtlsVar1Tit)}>AED</div>
                  </div>
                  <div className={styles.cinemasDtlsVar1ColumnRight}>
                    <div className={styles.cinemasDtlsVar1ColumnRightRow}>
                      <div className={styles.cinemasDtlsVar1ColumnRightRowItem}>up to 4</div>
                    </div>
                    <div className={styles.cinemasDtlsVar1ColumnRightRow}>
                      <div className={styles.cinemasDtlsVar1ColumnRightRowItem}>1</div>
                      <div className={styles.cinemasDtlsVar1ColumnRightRowItem}>3</div>
                      <div className={styles.cinemasDtlsVar1ColumnRightRowItem}>5</div>
                    </div>
                    <div className={styles.cinemasDtlsVar1ColumnRightRow}>
                      <div className={styles.cinemasDtlsVar1ColumnRightRowItem}>199</div>
                      <div className={styles.cinemasDtlsVar1ColumnRightRowItem}>499</div>
                      <div className={styles.cinemasDtlsVar1ColumnRightRowItem}>699</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.cinemasCinemaMax}>
                <div className={styles.infoBlockTit}>Cinema Max</div>
                <div className={styles.cinemasDescription}>
                  Same as Cinema, with a captivating atmosphere and great technical equipment, but for larger companies
                </div>
              </div>
            </div>
          </div>

          <div className={styles.infoBlock}>
          </div>

          <CyberButton btnClassName={styles.starsInner__btn} color="primary">
            Book Your Seat
          </CyberButton>
        </div>
      </div>
    </div>
  );
});

export default StarsSection;
