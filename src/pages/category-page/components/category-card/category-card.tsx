import styles from "./category-card.module.scss";
import { H3 } from "../../../../components/ui/typography/h3/h3";
import { Text } from "../../../../components/ui/typography/text/text";
import { Link } from "react-router-dom";
import { FC } from "react";
import { ArrowRightSmallIcon } from "../../../../components/ui/icons/arrow-right-small-icon";
interface ICategoryCardProps {
  subcategory: {
    id: number;
    title: string;
    description: string | null;
    read_counter: number;
  };
}
export const CategoryCard: FC<ICategoryCardProps> = ({ subcategory }) => {
  return (
    <div className={styles.categoryCard}>
      <H3 textColor="white">{subcategory.title}</H3>
      <Text
        size="small"
        textType="text"
        textColor="white"
        extraclass={styles.categoryCard__description}
      >
        {subcategory.description ?? ""}
      </Text>
      <div className={styles.categoryCard__links}>
        <Link
          to={""}
          className={`${styles.categoryCard__link} ${styles.categoryCard__variantsCount}`}
        >
          {`${25} вариантов`}
        </Link>
        <Link
          to={"subcategory"}
          className={`${styles.categoryCard__link} ${styles.categoryCard__allVariants}`}
        >
          <span> К списку вариантов</span>
          <ArrowRightSmallIcon />
        </Link>
      </div>
    </div>
  );
};
// https://youmath.ru/api/v1/sections/1/

// в     "subsections": [
//         {
//             нет  "articles_count": 1, он нужен чтобы лишние запросы не делать ради цифры
