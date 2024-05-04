import styles from "./TextSwiper.module.scss";

import { Pagination, EffectFade, Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface TextSwiperProps {
  data: {
    name: string;
    info: string;
    distance: string;
    time: string;
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
      pagination={{
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return (
            '<span class="' + className + '">' + data[index].name + "</span>"
          );
        },
      }}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      onSwiper={(e: any) => setInfoSwiper(e)}
      controller={{ control: imagesSwiper }}
      className={styles.slider}
    >
      {data.map((item) => (
        <SwiperSlide
          className={styles.slider__slide}
          key={item.name.replace(" ", "")}
        >
          <h2 className={styles.slider__slide_title}>{item.name}</h2>
          <p className={styles.slider__slide_info}>{item.info}</p>

          <div className={styles.slider__slide_data}>
            <div className={styles.slider__slide_data_item}>
              <p className={styles.slider__slide_data_title}>Avg. distance</p>
              <p className={styles.slider__slide_data_value}>{item.distance}</p>
            </div>

            <div className={styles.slider__slide_data_item}>
              <p className={styles.slider__slide_data_title}>
                Est. travel time
              </p>
              <p className={styles.slider__slide_data_value}>{item.time}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
