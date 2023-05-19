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
                    </div>
                    <div className={styles.cinemasDtlsVar1ColumnRightRow}>
                      <div className={styles.cinemasDtlsVar1ColumnRightRowItem}>199</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.cinemasCinemaMax}>
                <div className={styles.infoBlockTit}>Cinema Max</div>

                <div className={styles.cinemasDescription}>
                  Same as Cinema, with a captivating atmosphere and great technical equipment, but for larger companies
                </div>

                <div className={classNames(styles.cinemasDtls, styles.cinemasDtlsVar1)}>
                  <div className={styles.cinemasDtlsVar1ColumnLeft}>
                    <div class={classNames(styles.cinemasDtlsTit, styles.cinemasDtlsVar1Tit)}>Capacity</div>
                    <div class={classNames(styles.cinemasDtlsTit, styles.cinemasDtlsVar1Tit)}>Hours</div>
                    <div class={classNames(styles.cinemasDtlsTit, styles.cinemasDtlsVar1Tit)}>AED</div>
                  </div>
                  <div className={styles.cinemasDtlsVar1ColumnRight}>
                    <div className={styles.cinemasDtlsVar1ColumnRightRow}>
                      <div className={styles.cinemasDtlsVar1ColumnRightRowItem}>up to 8</div>
                    </div>
                    <div className={styles.cinemasDtlsVar1ColumnRightRow}>
                      <div className={styles.cinemasDtlsVar1ColumnRightRowItem}>1</div>
                    </div>
                    <div className={styles.cinemasDtlsVar1ColumnRightRow}>
                      <div className={styles.cinemasDtlsVar1ColumnRightRowItem}>299</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={classNames(styles.cinemasDtls, styles.cinemasDtlsVar2)}>
              <div className={styles.cinemasDtlsVar2Row}>
                <div class={classNames(styles.cinemasDtlsTit)}>Capacity</div>

                <div className={styles.cinemasDtlsVar2Capacity}>
                  <div className={styles.cinemasDtlsVar2CapacityFour}>up to 4</div>
                  <div className={styles.cinemasDtlsVar2CapacityEight}>up to 8</div>
                </div>
              </div>

              <div className={styles.cinemasDtlsVar2Row}>
                <div className={styles.cinemasDtlsVar2Hours}>
                  <div className={styles.cinemasDtlsVar2HoursLeft}>
                    <div className={styles.cinemasDtlsVar2HoursLeftColumnFirst}>
                      <div className={classNames(styles.cinemasDtlsTit, styles.cinemasDtlsVar2HoursLeftColumnTit)}>Hours</div>
                      <div className={styles.cinemasDtlsVar2HoursLeftColumnVal}>1</div>
                    </div>
                    <div className={styles.cinemasDtlsVar2HoursLeftColumnSecond}>
                      <div className={classNames(styles.cinemasDtlsTit, styles.cinemasDtlsVar2HoursLeftColumnTit)}>AED</div>
                      <div className={styles.cinemasDtlsVar2HoursLeftColumnVal}>199</div>
                    </div>
                  </div>

                  <div className={styles.cinemasDtlsVar2HoursRight}>
                    <div className={styles.cinemasDtlsVar2HoursRightColumnFirst}>
                      <div className={styles.cinemasDtlsVar2HoursRightColumnTit}>Hours</div>
                      <div className={styles.cinemasDtlsVar2HoursRightColumnVal}>1</div>
                    </div>
                    <div className={styles.cinemasDtlsVar2HoursRightColumnSecond}>
                      <div className={styles.cinemasDtlsVar2HoursRightColumnTit}>AED</div>
                      <div className={styles.cinemasDtlsVar2HoursRightColumnVal}>299</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={classNames(styles.cinemasDtls, styles.cinemasDtlsVar3)}>
              <div className={classNames(styles.cinemasDtls, styles.cinemasDtlsVar3ColumnLeft)}>
                <div className={classNames(styles.cinemasDtls, styles.cinemasDtlsVar3ColumnTitles)}>
                  <div className={classNames(styles.cinemasDtls, styles.cinemasDtlsVar3ColumnTit)}>Capacity</div>
                  <div className={classNames(styles.cinemasDtls, styles.cinemasDtlsTit, styles.cinemasDtlsVar3ColumnTit)}>Hours</div>
                  <div className={classNames(styles.cinemasDtls, styles.cinemasDtlsVar3ColumnTit)}>
                    <span className={styles.cinemasDtlsTit}>Price</span>
                    &nbsp;AED
                  </div>
                </div>

                <div className={classNames(styles.cinemasDtls, styles.cinemasDtlsVar3ColumnVals)}>
                  <div className={classNames(styles.cinemasDtls, styles.cinemasDtlsVar3ColumnVal)}>up to 4 people</div>
                  <div className={classNames(styles.cinemasDtls, styles.cinemasDtlsVar3ColumnVal)}>1</div>
                  <div className={classNames(styles.cinemasDtls, styles.cinemasDtlsVar3ColumnVal)}>199</div>
                </div>
              </div>

              <div className={classNames(styles.cinemasDtls, styles.cinemasDtlsVar3ColumnRight)}>
                <div className={classNames(styles.cinemasDtls, styles.cinemasDtlsVar3ColumnVals)}>
                  <div className={classNames(styles.cinemasDtls, styles.cinemasDtlsVar3ColumnVal, styles.cinemasDtlsVar3ColumnValBold)}>up to 8 people</div>
                  <div className={classNames(styles.cinemasDtls, styles.cinemasDtlsVar3ColumnVal)}>1</div>
                  <div className={classNames(styles.cinemasDtls, styles.cinemasDtlsVar3ColumnVal)}>299</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <div className={styles.infoBlockTit}>Cinemas equipment</div>
            <div className={styles.cinemasEquipments}>
              <div className={styles.cinemasEquipment}>
                <div className={styles.cinemasEquipmentTit}>TV</div>
                <div className={styles.cinemasEquipmentDesc}>
                  <span>QLED 4K Ultra HD</span><br/>
                  <span>IMAX Enhanced</span><br/>
                  <span>Dolby Vision IQ · Atmos</span><br/>
                  <span>120Hz MEMC</span>
                </div>
              </div>

              <div className={classNames(styles.cinemasEquipment, styles.cinemasEquipmentToMd)}>
                <div className={styles.cinemasEquipmentTit}>Sound</div>
                <div className={styles.cinemasEquipmentDesc}>
                  <span>3D Dolby Atmos / DTS:X</span><br/>
                  <span>True 11.1.4ch Sound</span><br/>
                  <span>22 Speakers</span>
                </div>
              </div>

              <div className={classNames(styles.cinemasEquipment, styles.cinemasEquipmentFromMd)}>
                <div className={styles.cinemasEquipmentTit}>Services</div>
                <div className={styles.cinemasEquipmentDesc}>
                  <span>Netflix Premium</span><br/>
                  <span>YouTube Premium</span><br/>
                  <span>Disney+</span><br/>
                  <span>MEGOGO</span>
                </div>
              </div>

              <div className={classNames(styles.cinemasEquipment, styles.cinemasEquipmentToMd)}>
                <div className={styles.cinemasEquipmentTit}>Services</div>
                <div className={styles.cinemasEquipmentDesc}>
                  <span>Netflix Premium</span><br/>
                  <span>YouTube Premium</span><br/>
                  <span>Disney+</span><br/>
                  <span>MEGOGO</span>
                </div>
              </div>

              <div className={classNames(styles.cinemasEquipment, styles.cinemasEquipmentFromMd)}>
                <div className={styles.cinemasEquipmentTit}>Sound</div>
                <div className={styles.cinemasEquipmentDesc}>
                  <span>3D Dolby Atmos / DTS:X</span><br/>
                  <span>True 11.1.4ch Sound</span><br/>
                  <span>22 Speakers</span>
                </div>
              </div>

              <div className={styles.cinemasEquipment}>
                <div className={styles.cinemasEquipmentTit}>Console</div>
                <div className={styles.cinemasEquipmentDesc}>
                  <span>PS5 with many games</span><br/>
                  <span>PS VR2</span><br/>
                  <span>DualSense for 4 playes</span>
                </div>
              </div>
            </div>
          </div>

          <CyberButton btnClassName={styles.btn} color="primary">
            Book Your Seat
          </CyberButton>
        </div>
      </div>
    </div>
  );
});

export default StarsSection;