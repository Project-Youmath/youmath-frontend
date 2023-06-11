import styles from "./index.module.scss";
import { Text } from "../../../../components/ui/typography/text/text";

export const FooterDescription = () => {
  return (
    <Text
      size={"default"}
      textType={"footer"}
      textColor={"white"}
      extraclass={styles.footerDescription}
    >
      Примеры решения задач и типовых расчетов по высшей математике для
      студентов 1 и 2 курса Самарского Государственного Технического
      Университета.
    </Text>
  );
};
