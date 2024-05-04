import { useState, useEffect } from "react";
import styles from "./Crew.module.scss";
import { PageTitle } from "../../components/PageTitle";
import { ImageSwiper } from "../../components/CrewPage/ImageSwiper";
import { TextSwiper } from "../../components/CrewPage/TextSwiper";
import { CREW } from "../../data/crew";

interface CrewProps {
  setActiveLink: Function;
}

export const Crew = ({ setActiveLink }: CrewProps) => {
  const [imagesSwiper, setImagesSwiper] = useState(null);
  const [infoSwiper, setInfoSwiper] = useState(null);

  useEffect(() => {
    setActiveLink(3);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <PageTitle number="02" text="Meet your crew" />

        <div className={styles.sliders}>
          <div className={styles.sliders__sliderImage}>
            <ImageSwiper
              data={CREW}
              setImagesSwiper={setImagesSwiper}
              infoSwiper={infoSwiper}
            />
          </div>

          <div className={styles.sliders__sliderinfo}>
            <TextSwiper
              data={CREW}
              setInfoSwiper={setInfoSwiper}
              imagesSwiper={imagesSwiper}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
