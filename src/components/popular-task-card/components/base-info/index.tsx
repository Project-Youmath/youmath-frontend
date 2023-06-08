import styles from "./index.module.scss";
import { H3 } from "../../../ui/typography/h3/h3";
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
      <Link to={`categories/category/${category.id}`} className={styles.link}>
        <H3 textColor="white" decoration="underline">
          {category.title}
        </H3>
      </Link>
      {category.author && (
        <span className={`${styles.author} ${styles[extraClass]}`}>
          {category.author}
        </span>
      )}
      <PopularTaskCardExternalInfo
        landscape={false}
        category={category}
        extraClass={extraClass}
      />

      <PopularTaskCardVariants category={category} extraClass={extraClass} />
    </div>
  );
};
