import { Text } from "../ui/typography/text/text";
import { FooterDescription } from "./components/footer-description/footer-description";
import { FooterInfo } from "./components/footer-info/footer-info";
import { FooterLogoContactLine } from "./components/footer-logo-contact-line/footer-logo-contact-line";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <FooterLogoContactLine />
        <FooterDescription />
        <Text
          size={"small"}
          textType={"text"}
          textColor={"white"}
          extraclass={styles.footer__year}
        >
          2023
        </Text>
        <FooterInfo />
      </div>
    </footer>
  );
};
export default Footer;
