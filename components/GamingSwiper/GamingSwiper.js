import styles from "./GamingSwiper.module.scss";
import { swiperImages } from "../../mocks/swiperImages";
import counter from "../../store/index";
import Image from "next/image";
import { useGamingSwiperAnimation } from "./hooks/useGamingSwiperAnimation";

const GamingSwiper = () => {
  const { scroll } = useGamingSwiperAnimation();

  return (
    <div className={styles.gamingSwiperWrapper}>
      <div id="gameswiper_container" className={styles.gamingSwiperContainer}>
        <div id="gameswiper_elements" ref={scroll} className={styles.scrollElements}>
          {swiperImages.map((swiper) => (
            <div className={styles.scrollElement} key={swiper.id}>
              <span className={styles.scrollElementTitle}>{swiper.title}</span>
              <Image
                className={styles.scrollElementImg}
                onLoad={() => counter.increment()}
                key={swiper.id}
                draggable={false}
                src={swiper.url}
                alt={swiper.alt}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamingSwiper;
