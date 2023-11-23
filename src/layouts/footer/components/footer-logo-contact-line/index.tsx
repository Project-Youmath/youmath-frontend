import styles from "./index.module.scss";
import logo from "../../../../assets/images/logo.png";
import { Text } from "../../../../components/ui/typography/text/text";
import { Link } from "react-router-dom";
import { startPage } from "../../../../data/ constants";

const FooterLogoContactLine = () => {
  return (
    <div className={styles.logoContactLine}>
      <Link to={startPage} onClick={() => window.scrollTo(0, 0)}>
        {" "}
        <img
          src={logo}
          alt="Логотип youmath"
          className={styles.logoContactLine__logo}
        />
      </Link>
      <Link to={startPage + "feedback"} style={{ textDecoration: "none" }} onClick={() => window.scrollTo(0, 0)}>
        <Text
          size={"default"}
          textType={"button"}
          textColor={"white"}
          extraclass={styles.logoContactLine__contact}
        >
          Связаться с нами
        </Text>
      </Link>
    </div>
  );
};
export default FooterLogoContactLine;
