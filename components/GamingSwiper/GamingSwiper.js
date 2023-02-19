import styles from "./GamingSwiper.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { swiperImages } from "../../__mocks__/swiperImages";
import 'swiper/css';

const GamingSwiper = () => {
    return (
        <div className={styles.swiperWrapper}>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
            >   
                {swiperImages.map((swiper) => 
                    <SwiperSlide key={swiper.id}>
                        <Image src={swiper.url} alt={swiper.alt} />
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default GamingSwiper;