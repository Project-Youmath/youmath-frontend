import styles from "./index.module.scss";
import { Text } from "../../../ui/typography/text/text";
import { Link } from "react-router-dom";
import { FC } from "react";
import { CategoryResource } from "../../../../api/types/resource/category-resource";
import { useAppSelector } from "../../../../store/hooks/use-app-selector";
import { startPage } from "../../../../data/ constants";

interface PopularTaskCardVariantsProps {
  extraClass: string;
  category?: CategoryResource;
}

export const PopularTaskCardVariants: FC<PopularTaskCardVariantsProps> = ({
  category,
  extraClass,
}) => {
  const { isSuccess } = useAppSelector((state) => state.popularCategoryReducer);

  return (
    <section
      className={
        extraClass ? `${styles.section} ${extraClass}` : styles.section
      }
    >
      {isSuccess && (
        <>
          {category?.popular_articles.length !== 0 && (
            <Text size="large" textType="text" textColor="white">
              Варианты
            </Text>
          )}
          <div className={styles.variants}>
            {category?.popular_articles
              .map((popular_article, i) => (
                <Link
                  key={`popular_article${popular_article.id}`}
                  to={`${startPage}categories/category/${category.id}/subcategory/none/task/${popular_article.id}`}
                  className={`${styles[extraClass]} ${styles.link}`}
                >
                  {popular_article.title.split(" ").slice(1, 2).join(" ")}
                </Link>
              ))
              .slice(0, 3)}
          </div>
        </>
      )}
    </section>
  );
};
