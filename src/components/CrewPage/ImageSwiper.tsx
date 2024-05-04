import styles from "./ImageSwiper.module.scss";

import { EffectFade, Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface ImageSwiperProps {
  data: {
    position: string;
    name: string;
    info: string;
    image: string;
    imageWebp: string;
  }[];
  setImagesSwiper: Function;
  infoSwiper: any;
}

export const ImageSwiper = ({
  data,
  setImagesSwiper,
  infoSwiper,
}: ImageSwiperProps) => {
  return (
    <Swiper
      modules={[EffectFade, Controller]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      grabCursor={true}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      onSwiper={(e: any) => setImagesSwiper(e)}
      controller={{ control: infoSwiper }}
      className={styles.slider}
    >
      {data.map((item) => (
        <SwiperSlide
          className={styles.slider__slide}
          key={item.name.replace(" ", "")}
        >
          <picture>
            <source type="image/webp" srcSet={item.imageWebp} />
            <source type="image/png" srcSet={item.image} />
            <img
              src={item.image}
              alt={item.name}
              className={styles.slider__slide_img}
            />
          </picture>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
