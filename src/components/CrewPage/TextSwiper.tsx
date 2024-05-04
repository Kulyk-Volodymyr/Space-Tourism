import styles from "./TextSwiper.module.scss";

import { Pagination, EffectFade, Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface TextSwiperProps {
  data: {
    position: string;
    name: string;
    info: string;
    image: string;
  }[];
  setInfoSwiper: Function;
  imagesSwiper: any;
}

export const TextSwiper = ({
  data,
  setInfoSwiper,
  imagesSwiper,
}: TextSwiperProps) => {
  return (
    <Swiper
      modules={[Pagination, EffectFade, Controller]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      grabCursor={true}
      pagination={{ clickable: true }}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      onSwiper={(e: any) => setInfoSwiper(e)}
      controller={{ control: imagesSwiper }}
      className={styles.sliderInfo}
    >
      {data.map((item) => (
        <SwiperSlide
          className={styles.sliderInfo__slide}
          key={item.name.replace(" ", "")}
        >
          <h3 className={styles.sliderInfo__slide_position}>{item.position}</h3>
          <h2 className={styles.sliderInfo__slide_name}>{item.name}</h2>
          <p className={styles.sliderInfo__slide_info}>{item.info}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
