import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import burger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";

interface HeaderProps {
  activeLink: number;
  navbarHidden: boolean;
  setNavbarHidden: Function;
}

const navbarItems: Array<{
  link: string;
  number: string;
  name: string;
}> = [
  {
    link: "/",
    number: "00",
    name: "Home",
  },
  {
    link: "/destination",
    number: "01",
    name: "Destination",
  },
  {
    link: "/crew",
    number: "02",
    name: "Crew",
  },
  {
    link: "/technology",
    number: "03",
    name: "Technology",
  },
];

export const Header = ({
  activeLink,
  navbarHidden,
  setNavbarHidden,
}: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Link to="/" onClick={() => setNavbarHidden(true)}>
          <img src={logo} alt="logo" className={styles.header__logo} />
        </Link>

        <div className={styles.header__line}></div>

        <div
          className={
            navbarHidden
              ? styles.header__navbar
              : `${styles.header__navbar} ${styles.header__navbar_open}`
          }
        >
          <ul className={styles.header__navbar_list}>
            {navbarItems.map((item, index) => (
              <li
                key={item.name}
                className={
                  activeLink === index + 1
                    ? `${styles.header__navbar_item} ${styles.header__navbar_item_active}`
                    : styles.header__navbar_item
                }
              >
                <Link
                  to={item.link}
                  className={styles.header__navbar_link}
                  onClick={() => setNavbarHidden(!navbarHidden)}
                >
                  <span className={styles.header__navbar_link_number}>
                    {item.number}{" "}
                  </span>
                  <span className={styles.header__navbar_link_text}>
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={styles.header__button}
          onClick={() => setNavbarHidden(!navbarHidden)}
        >
          <img
            src={navbarHidden ? burger : close}
            alt="burger"
            className={styles.header__button_img}
          />
        </div>
      </div>
    </header>
  );
};
