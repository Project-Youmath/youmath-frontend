import styles from "./header-nav.module.scss";
import { Text } from "../../../../components/ui/typography/text/text";
import { Link } from "react-router-dom";
import { startPage } from "../../../../data/ constants";

export const HeaderNav = () => {
  return (
    <nav className={styles.headerNav}>
      <Link to={startPage + "/categories"} className={styles.Link}>
        <Text
          size={"default"}
          textType={"button"}
          textColor={"white"}
          extraclass={styles.headerNav__link}
        >
          Разделы
        </Text>
      </Link>
      <Link to={startPage + "/about"} className={styles.Link}>
        <Text
          size={"default"}
          textType={"button"}
          textColor={"white"}
          extraclass={styles.headerNav__link}
        >
          О проекте
        </Text>
      </Link>
    </nav>
  );
};
