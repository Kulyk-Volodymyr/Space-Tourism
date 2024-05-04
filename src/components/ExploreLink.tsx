import { useState, useRef } from "react";
import styles from "./ExploreLink.module.scss";
import { Link } from "react-router-dom";

interface ExploreProps {
  setNavbarHidden: Function;
}

export const ExploreLink = ({ setNavbarHidden }: ExploreProps) => {
  const container = useRef<HTMLDivElement>(null);
  const linkCircle = useRef<HTMLDivElement>(null);
  const [linkCoords, setLinkCoords] = useState([50, 50]);
  const [bgAnimation, setBgAnimation] = useState(false);

  const checkCircle = (x: number, y: number, r: number) => {
    x < r / 2 ? (x = r / 2 - x) : (x = r / 2 - (r - x));
    y < r / 2 ? (y = r / 2 - y) : (y = r / 2 - (r - y));
    return x ** 2 + y ** 2 <= (r / 2) ** 2;
  };

  const handleMouseMove = (e: any) => {
    let containerSize: number = container.current
      ? container.current?.clientWidth
      : 0;
    let mouseX =
      e.clientX -
      (container.current ? container.current?.getBoundingClientRect().x : 0);
    let mouseY =
      e.clientY -
      (container.current ? container.current?.getBoundingClientRect().y : 0);

    if (checkCircle(mouseX, mouseY, containerSize)) {
      setLinkCoords([
        (mouseX * 100) / containerSize,
        (mouseY * 100) / containerSize,
      ]);
    } else {
      setLinkCoords([50, 50]);
    }
  };

  return (
    <div
      className={styles.container}
      ref={container}
      onMouseOver={(e) => handleMouseMove(e)}
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseOut={() => setLinkCoords([50, 50])}
    >
      <div
        className={styles.content}
        ref={linkCircle}
        style={{ left: `${linkCoords[0]}%`, top: `${linkCoords[1]}%` }}
      >
        <div
          className={
            bgAnimation
              ? `${styles.content__bg1} ${styles.linkAnimation}`
              : styles.content__bg1
          }
        ></div>
        <div
          className={
            bgAnimation
              ? `${styles.content__bg1} ${styles.linkAnimation} ${styles.delay2s}`
              : styles.content__bg1
          }
        ></div>
        <div
          className={
            bgAnimation
              ? `${styles.content__bg1} ${styles.linkAnimation} ${styles.delay4s}`
              : styles.content__bg1
          }
        ></div>
        <div className={styles.content__link}>
          <Link
            to="/destination"
            className={styles.content__link_text}
            onClick={() => setNavbarHidden(true)}
            onMouseOver={() => setBgAnimation(true)}
            onMouseOut={() => setBgAnimation(false)}
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};
