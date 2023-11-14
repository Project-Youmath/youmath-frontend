import styles from "./index.module.scss";
import { Text } from "../../components/ui/typography/text/text";
import { FooterDescription } from "./components/footer-description";
import { FooterInfo } from "./components/footer-info";
import FooterLogoContactLine from "./components/footer-logo-contact-line";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <FooterLogoContactLine />
        <FooterDescription />
        <Text
          size={"small"}
          textType={"text"}
          textColor={"white"}
          extraclass={styles.year}
        >
          2023
        </Text>
        <FooterInfo />
      </div>
    </footer>
  );
};
export default Footer;
