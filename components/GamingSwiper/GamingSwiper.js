import styles from "./GamingSwiper.module.scss";
import Image from "next/image";
import { swiperImages } from "../../mocks/swiperImages";
import { useGamingSwiper } from "./hooks/useGamingSwiper";

const GamingSwiper = () => {
    const {scrollableElementsRef} = useGamingSwiper();

    return (
        <div className={styles.swiperWrapper}>
            <div ref={scrollableElementsRef} className={styles.scrollElements}>
                {swiperImages.map(swiper => <Image key={swiper.id} draggable={false} src={swiper.url} alt={swiper.alt} />)}
            </div>
        </div>
    )
}

export default GamingSwiper;