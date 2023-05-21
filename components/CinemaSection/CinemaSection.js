import React from "react";
import styles from "./CinemaSection.module.scss";
import { useIntersection } from "../../hooks/useIntersection";
import classNames from "classnames";
import first_grid from "../../public/images/first_grid.png";
import second_grid from "../../public/images/second_grid.png";
import first_grid_md from "../../public/images/first_grid_md.png";
import second_grid_md from "../../public/images/second_grid_md.png";
import third_grid from "../../public/images/third_grid.png";
import grid_md from "../../public/images/grid3.png";
import CyberButton from "../../UI/CyberButton/CyberButton";
import counter from "../../store/index";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { bookSeat } from '../../services/bookingService';

const CinemaSection = React.forwardRef(({ starSectionRef }, ref) => {
  const { isIntersecting, nodeRef } = useIntersection();

  const scrollToStar = () => {
    window.scrollTo({
      top: starSectionRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section ref={ref} className={styles.cinemaWrapper}>
      <div className={styles.container}>
        <div className={styles.cinemaWrapper__title}>Cinema</div>
      </div>

      <main className={styles.cinemaContent}>
        <div className={styles.container}>
          <div className={styles.cinemaContent__title}>
            .. and for Your Lover
          </div>
          <div
            onClick={scrollToStar}
            className={styles.cinemaContent__subTitle}
          >
            Сinemas Specifications
          </div>
          <div className={styles.cinemaContent__subTitle} onClick={bookSeat}>Reserve</div>
          <div className={`${styles.cinemaContent__text} ${styles.hidetext}`}>
            The entire cinema is at your service. Whether it's a date for two or
            inviting a large group, any movie will be even more comfortable in
            our state-of-the-art cinema.
          </div>
        </div>
      </main>

      <div className={styles.container}>
        <div className={styles.cinemaText__md}>
          The entire cinema is at your service. Whether it's a date for two or
          inviting a large group, any movie will be even more comfortable in our
          state-of-the-art cinema.
        </div>
        <CyberButton btnClassName={styles.redBookSeat} color="red" onClick={bookSeat}>
          Book Your Seat
        </CyberButton>
      </div>

      <div className={styles.meetingPlacesWrapper}>
        <div className={styles.container}>
          <div className={styles.meetingPlacesInner}>
            <div className={styles.placesPictures}>
              <div className={styles.placesLeftColumn}>
                <Image
                  className={styles.placesLeftColumn__img}
                  src={first_grid}
                  alt="first_grid"
                  onLoad={() => counter.increment()}
                  priority
                />
                <Image
                  className={styles.placesLeftColumn__img}
                  src={second_grid}
                  alt="second_grid"
                  onLoad={() => counter.increment()}
                  priority
                />

                <Image
                  className={styles.placesLeftColumn__img_md}
                  src={first_grid_md}
                  alt="first_grid"
                  onLoad={() => counter.increment()}
                  priority
                />
                <Image
                  className={styles.placesLeftColumn__img_md}
                  src={second_grid_md}
                  alt="second_grid"
                  onLoad={() => counter.increment()}
                  priority
                />
              </div>
              <Image
                src={third_grid}
                alt="third_grid"
                className={styles.third_grid}
                onLoad={() => counter.increment()}
                priority
              />
            </div>
            <div
              ref={nodeRef}
              className={classNames(styles.meetingPlacesInner__highLightText, {
                [styles.meetingPlacesInner__textInViewport]: isIntersecting,
              })}
            >
              <span
                className={classNames(styles.blur, {
                  [styles.blurActive]: isIntersecting,
                })}
              ></span>
              Your meeting place
            </div>

            <Image
              onLoad={() => counter.increment()}
              className={styles.grid3_md}
              src={grid_md}
              alt="grid_md"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default observer(CinemaSection);
