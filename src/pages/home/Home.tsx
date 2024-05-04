import { useEffect } from "react";
import styles from "./Home.module.scss";
import { ExploreLink } from "../../components/ExploreLink";

interface HomeProps {
  setActiveLink: Function;
  setNavbarHidden: Function;
}

export const Home = ({ setActiveLink, setNavbarHidden }: HomeProps) => {
  useEffect(() => {
    setActiveLink(1);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.info}>
          <p className={styles.info__subtitle}>So, you want to travel to</p>
          <h1 className={styles.info__title}>Space</h1>
          <p className={styles.info__text}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className={styles.explore}>
          <ExploreLink setNavbarHidden={setNavbarHidden} />
        </div>
      </div>
    </main>
  );
};
