import styles from "./index.module.scss";
import { Text } from "../../components/ui/typography/text/text";
import { FooterDescription } from "./components/footer-description";
import { FooterInfo } from "./components/footer-info";
import FooterLogoContactLine from "./components/footer-logo-contact-line";
import { useEffect, useRef, useState } from "react";
import ButtonUpContainer from "../../components/ButtonUpContainer";

const Footer = () => {
  const ref = useRef<HTMLElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current !== null) {
      setHeight(ref.current.clientHeight);
    }
  }, []);

  return (
    <footer className={styles.footer} ref={ref}>
      <ButtonUpContainer footerHeight={height}/>
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
