import styles from "./popular-task-card-base-info.module.scss";
import { H3 } from "../../../ui/typography/h3/h3";
import { Text } from "../../../ui/typography/text/text";
import { PopularTaskCardVariants } from "../variants/popular-task-card-variants";
import { CategoryResource } from "../../../../api/types/resource/category-resource";
import { FC } from "react";
import { Link } from "react-router-dom";

interface PopularTaskCardBaseInfoProps {
  category: CategoryResource;
}

export const PopularTaskCardBaseInfo: FC<PopularTaskCardBaseInfoProps> = ({
  category,
}) => {
  return (
    <div className={styles.popularTaskCardBaseInfo}>
      <div>
        <Link to={`categories/category/${category.id}`}>
          <H3 textColor="white" decoration="underline">
            {category.title}
          </H3>
        </Link>
        {category.author && (
          <Text size="small" textType="text" textColor="white">
            {category.author}
          </Text>
        )}
      </div>

      <PopularTaskCardVariants
        category={category}
        extraClass={styles.popularTaskCardBaseInfo__variants}
      />
    </div>
  );
};
