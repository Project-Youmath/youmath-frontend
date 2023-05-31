import styles from "./footer.module.scss";
import { FooterLogoContactLine } from "../footer-logo-contact-line/footer-logo-contact-line";
import { Text } from "../../../ui/typography/text/text";
import { FooterDescription } from "../footer-description/footer-description";
import { FooterInfo } from "../footer-info/footer-info";

export const Footer = () => {
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
