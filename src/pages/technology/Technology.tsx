import { useState, useEffect } from "react";
import styles from "./Technology.module.scss";
import { PageTitle } from "../../components/PageTitle";
import { ImageSwiper } from "../../components/TechnologyPage/ImageSwiper";
import { TextSwiper } from "../../components/TechnologyPage/TextSwiper";
import { TECHNOLOGY } from "../../data/technology";

interface TechnologyProps {
  setActiveLink: Function;
}

export const Technology = ({ setActiveLink }: TechnologyProps) => {
  const [imagesSwiper, setImagesSwiper] = useState(null);
  const [infoSwiper, setInfoSwiper] = useState(null);

  useEffect(() => {
    setActiveLink(4);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <PageTitle number="03" text="Space launch 101" />
      </div>

      <div className={styles.sliders}>
        <div className={styles.sliders__sliderImage}>
          <ImageSwiper
            data={TECHNOLOGY}
            setImagesSwiper={setImagesSwiper}
            infoSwiper={infoSwiper}
          />
        </div>

        <div className={styles.sliders__sliderinfo}>
          <TextSwiper
            data={TECHNOLOGY}
            setInfoSwiper={setInfoSwiper}
            imagesSwiper={imagesSwiper}
          />
        </div>
      </div>
    </main>
  );
};
