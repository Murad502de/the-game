import styles from "./GamingSwiper.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import first_slide from "../../public/images/first_slide.png";
import second_slide from "../../public/images/second_slide.png";
import third_slide from "../../public/images/third_slide.png";
import fourth_slide from "../../public/images/fourth_slide.png";
import five_slide from "../../public/images/five_slide.png";

const GamingSwiper = () => {
    return (
        <div className={styles.swiperWrapper}>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <Image src={first_slide} alt="first_slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={second_slide} alt="first_slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={third_slide} alt="first_slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={fourth_slide} alt="first_slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={five_slide} alt="first_slide" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default GamingSwiper;