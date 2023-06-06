import styles from "./index.module.scss";
import { PopularTaskCardBaseInfo } from "../base-info";
import { PopularTaskCardExternalInfo } from "../external-info";
import { CategoryResource } from "../../../../api/types/resource/category-resource";
import { FC } from "react";

interface PopularTaskCardProps {
  category: CategoryResource;
  extraClass: string;
}

export const PopularTaskCard: FC<PopularTaskCardProps> = ({
  category,
  extraClass,
}) => {
  return (
    <div className={styles.popularTaskCard}>
      <PopularTaskCardBaseInfo category={category} extraClass={extraClass} />
      <PopularTaskCardExternalInfo
        landscape={true}
        category={category}
        extraClass={extraClass}
      />
    </div>
  );
};
