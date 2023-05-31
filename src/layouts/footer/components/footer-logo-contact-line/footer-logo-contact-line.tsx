import styles from "./footer-logo-contact-line.module.scss";
import logo from "../../../../assets/images/logo.png";
import { Text } from "../../../../components/ui/typography/text/text";
import { Link } from "react-router-dom";

export const FooterLogoContactLine = () => {
  return (
    <div className={styles.logoContactLine}>
      <img
        src={logo}
        alt="Логотип youmath"
        className={styles.logoContactLine__logo}
      />
      <Link to={"/feedback"} style={{ textDecoration: "none" }}>
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
