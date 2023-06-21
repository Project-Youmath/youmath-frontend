import styles from "./index.module.scss";
import { Text } from "../ui/typography/text/text";
import { RightArrowIcon } from "../ui/icons/right-arrow-icon";
import { FC } from "react";
import { Link } from "react-router-dom";
import { CategoryResource } from "../../api/types/resource/category-resource";
import { startPage } from "../../data/ constants";

interface PopularCategoryCardProps {
  category: CategoryResource;
}

const CategoryCard: FC<PopularCategoryCardProps> = ({ category }) => {
  return (
    <Link
      to={`${startPage}categories/category/${category.id}`}
      className={styles.link}
    >
      <div className={styles.section}>
        <div className={styles.info}>
          <Text size="large" textType="text" textColor="black">
            {category.title}
          </Text>
          {category.subtitle && (
            <Text size="small" textType="text" textColor="dim">
              {category.subtitle}
            </Text>
          )}
        </div>
        <RightArrowIcon classname={styles.arrow} />
      </div>
    </Link>
  );
};
export default CategoryCard;
