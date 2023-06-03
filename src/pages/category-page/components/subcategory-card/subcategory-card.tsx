import styles from "./subcategory-card.module.scss";
import { H3 } from "../../../../components/ui/typography/h3/h3";
import { Text } from "../../../../components/ui/typography/text/text";
import { Link, useParams } from "react-router-dom";
import { FC } from "react";
import { ArrowRightSmallIcon } from "../../../../components/ui/icons/arrow-right-small-icon";
import { startPage } from "../../../../data/ constants";
interface ISubcategoryCardProps {
  subcategory: {
    id: number;
    title: string;
    description: string | null;
    read_counter: number;
    articles_count?: number | null;
  };
}
export const SubcategoryCard: FC<ISubcategoryCardProps> = ({ subcategory }) => {
  const { categoryId } = useParams();
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
        <div className={`${styles.categoryCard__taskCount}`}>
          {`${subcategory.articles_count ?? "нет"} вариантов`}
        </div>
        <Link
          to={`${startPage}categories/category/${categoryId}/subcategory/${subcategory.id}?subsection=${subcategory.id}`}
          className={`${styles.categoryCard__link} ${styles.categoryCard__allVariants}`}
        >
          <span> К списку вариантов</span>
          <ArrowRightSmallIcon />
        </Link>
      </div>
    </div>
  );
};
