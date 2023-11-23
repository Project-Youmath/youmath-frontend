import styles from "./index.module.scss";
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
      {/* Yandex.Metrika informer */}
      <a
        href="https://metrika.yandex.ru/stat/?id=95653484&amp;from=informer"
        target="_blank"
        rel="noopener noreferrer">
        <img
          src="https://informer.yandex.ru/informer/95653484/3_1_FFFFFFFF_EFEFEFFF_0_pageviews"
          alt="Яндекс.Метрика"
          title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)"
          className="ym-advanced-informer"
          data-cid="95653484"
          data-lang="ru" />
      </a>
      {/* Yandex.Metrika informer */}
      {/* <Text
        size={"default"}
        textType={"footer"}
        textColor={"white"}
        extraclass={styles.footerInfo__metric}
      >
        Яндекс Метрики
      </Text> */}
    </div>
  );
};
