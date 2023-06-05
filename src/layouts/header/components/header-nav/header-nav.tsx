import styles from "./header-nav.module.scss";
import { Link } from "react-router-dom";
import { startPage } from "../../../../data/ constants";
import { BurgerIcon } from "../../../../components/ui/icons/burger-icon";

export const HeaderNav = () => {
  return (
    <nav className={styles.headerNav}>
      <Link
        to={startPage + "categories"}
        className={`${styles.link} ${styles.categories}`}
      >
        Разделы
      </Link>
      <Link
        to={startPage + "about"}
        className={`${styles.link} ${styles.about}`}
      >
        О проекте
      </Link>
      <Link
        to={startPage + "categories"}
        className={`${styles.link} ${styles.categories_burger}`}
      >
        <BurgerIcon />
      </Link>
    </nav>
  );
};
