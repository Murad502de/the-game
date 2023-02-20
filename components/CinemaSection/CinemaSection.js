import styles from "./CinemaSection.module.scss";
import Image from "next/image";
import {useIntersection} from "../../hooks/useIntersection";
import classNames from "classnames";
import first_grid from "../../public/images/first_grid.png";
import second_grid from "../../public/images/second_grid.png";
import third_grid from "../../public/images/third_grid.png";

const CinemaSection = () => {
    const {isIntersecting, nodeRef} = useIntersection();
    
    return (
        <section className={styles.cinemaWrapper}>
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

            <div className={styles.meetingPlacesWrapper}>
                <div className={styles.container}>
                    <div className={styles.meetingPlacesInner}>
                        <div className={styles.placesPictures}>
                            <div className={styles.placesLeftColumn}>
                                <Image src={first_grid} />
                                <Image src={second_grid} />
                            </div>
                            <Image src={third_grid} />
                        </div>
                        <div ref={nodeRef} className={classNames(styles.meetingPlacesInner__highLightText, {
                            [styles.meetingPlacesInner__textInViewport]: isIntersecting
                        })}>
                            <span className={classNames(styles.blur, {
                                [styles.blurActive]: isIntersecting
                            })}></span>
                            Your meeting place
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CinemaSection;