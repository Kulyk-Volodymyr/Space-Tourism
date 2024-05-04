import { useState, useEffect } from "react";
import styles from "./Destination.module.scss";
import { PageTitle } from "../../components/PageTitle";
import { ImageSwiper } from "../../components/DestinationPage/ImageSwiper";
import { TextSwiper } from "../../components/DestinationPage/TextSwiper";
import { DESTINATION } from "../../data/destination";

interface DestinationProps {
  setActiveLink: Function;
}

export const Destination = ({ setActiveLink }: DestinationProps) => {
  const [imagesSwiper, setImagesSwiper] = useState(null);
  const [infoSwiper, setInfoSwiper] = useState(null);

  useEffect(() => {
    setActiveLink(2);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <PageTitle number="01" text="Pick your destination" />

        <div className={styles.sliders}>
          <div className={styles.sliders__sliderImage}>
            <ImageSwiper
              data={DESTINATION}
              setImagesSwiper={setImagesSwiper}
              infoSwiper={infoSwiper}
            />
          </div>

          <div className={styles.sliders__sliderinfo}>
            <TextSwiper
              data={DESTINATION}
              setInfoSwiper={setInfoSwiper}
              imagesSwiper={imagesSwiper}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
