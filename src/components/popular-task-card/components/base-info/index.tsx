import styles from "./index.module.scss";
import { PopularTaskCardVariants } from "../variants";
import { CategoryResource } from "../../../../api/types/resource/category-resource";
import { FC } from "react";
import { Link } from "react-router-dom";
import { PopularTaskCardExternalInfo } from "../external-info";

interface PopularTaskCardBaseInfoProps {
  category: CategoryResource;
  extraClass: string;
}

export const PopularTaskCardBaseInfo: FC<PopularTaskCardBaseInfoProps> = ({
  category,
  extraClass,
}) => {
  return (
    <div className={styles.section}>
      <Link to={`categories/category/${category.id}`} className={styles.title}>
        {category.title}
      </Link>

      <span className={`${styles.author} ${styles[extraClass]}`}>
        {category.subtitle}
      </span>

      <PopularTaskCardExternalInfo
        landscape={false}
        category={category}
        extraClass={extraClass}
      />

      <PopularTaskCardVariants category={category} extraClass={extraClass} />
    </div>
  );
};
