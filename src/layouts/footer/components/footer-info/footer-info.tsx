import styles from "./footer-info.module.scss";
import { Text } from "../../../../components/ui/typography/text/text";

export const FooterInfo = () => {
  return (
    <div className={styles.footerInfo}>
      <Text
        size={"default"}
        textType={"footer"}
        textColor={"white"}
        extraclass={styles.footerInfo__materialInfo}
      >
        Все материалы представленные на сайте исключительно с целью ознакомления
        читателями и не преследуют коммерческих целей или нарушение авторских
        прав.
      </Text>
      <Text
        size={"default"}
        textType={"footer"}
        textColor={"white"}
        extraclass={styles.footerInfo__metric}
      >
        Яндекс Метрики
      </Text>
    </div>
  );
};
