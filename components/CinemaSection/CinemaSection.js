import React from "react";
import styles from "./CinemaSection.module.scss";
import Image from "next/image";
import {useIntersection} from "../../hooks/useIntersection";
import classNames from "classnames";
import first_grid from "../../public/images/first_grid.png";
import second_grid from "../../public/images/second_grid.png";
import third_grid from "../../public/images/third_grid.png";
import grid1_md from "../../public/images/grid_1-md.png";
import grid2_md from "../../public/images/grid-2_md.png";
import grid_md from "../../public/images/grid3.png";
import CyberButton from "../../UI/CyberButton/CyberButton";

const CinemaSection = React.forwardRef((props, ref) => {
    const {isIntersecting, nodeRef} = useIntersection();
    
    return (
        <section ref={ref} className={styles.cinemaWrapper}>
            <div className={styles.container}>
                <div className={styles.cinemaWrapper__title}>Cinema</div>
            </div>

            <main className={styles.cinemaContent}>
                <div className={styles.container}>
                    <div className={styles.cinemaContent__title}>.. and for Your Lover</div>
                    <div className={styles.cinemaContent__subTitle}>Сinemas Specifications</div>
                    <div className={styles.cinemaContent__subTitle}>Reserve</div>
                    <div className={styles.cinemaContent__text}>
                        The entire cinema is at your service. Whether it's a date for two or inviting a large group, any movie will 
                        be even more comfortable in our state-of-the-art cinema.
                    </div>
                </div>
            </main>

            <div className={styles.container}>
                <div className={styles.cinemaText__md}>
                    The entire cinema is at your service. Whether it's a date for two or inviting a large group, any movie will be even more comfortable in our state-of-the-art cinema.
                </div>
                <CyberButton btnClassName={styles.redBookSeat} color="red">Book Your Seat</CyberButton>
            </div>

            <div className={styles.meetingPlacesWrapper}>
                <div className={styles.container}>
                    <div className={styles.meetingPlacesInner}>
                        <div className={styles.placesPictures}>
                            <div className={styles.placesLeftColumn}>
                                <Image className={styles.placesLeftColumn__img} src={first_grid} alt="first_grid" />
                                <Image className={styles.placesLeftColumn__img} src={second_grid} alt="second_grid" />

                                <Image className={styles.placesLeftColumn__img_md} src={grid2_md} alt="second_grid" />
                                <Image className={styles.placesLeftColumn__img_md} src={grid1_md} alt="first_grid" />
                            </div>
                            <Image src={third_grid} alt="third_grid" className={styles.third_grid} />
                        </div>
                        <div ref={nodeRef} className={classNames(styles.meetingPlacesInner__highLightText, {
                            [styles.meetingPlacesInner__textInViewport]: isIntersecting
                        })}>
                            <span className={classNames(styles.blur, {
                                [styles.blurActive]: isIntersecting
                            })}></span>
                            Your meeting place
                        </div>

                        <Image className={styles.grid3_md} src={grid_md} alt="grid_md" />
                    </div>
                </div>
            </div>
        </section>
    )
})

export default CinemaSection;