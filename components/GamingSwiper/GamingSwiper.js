import styles from "./GamingSwiper.module.scss";
import { swiperImages } from "../../mocks/swiperImages";
import { useGamingSwiper } from "./hooks/useGamingSwiper";
import counter from "../../store/index";
import Image from "next/image";

const GamingSwiper = () => {
  const { scrollableElementsRef } = useGamingSwiper();

  return (
    <div className={styles.swiperWrapper}>
      <div ref={scrollableElementsRef} className={styles.scrollElements}>
        {swiperImages.map((swiper) => (
          <Image
            onLoad={() => counter.increment()}
            key={swiper.id}
            draggable={false}
            src={swiper.url}
            alt={swiper.alt}
            priority
          />
        ))}
      </div>
    </div>
  );
};

export default GamingSwiper;
