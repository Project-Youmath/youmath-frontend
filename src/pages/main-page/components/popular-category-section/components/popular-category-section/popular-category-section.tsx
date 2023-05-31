import styles from "./popular-category-section.module.scss";
import { H2 } from "../../../../../../components/ui/typography/h2/h2";
import CategoryCard from "../../../../../../components/category-card";
import { Link } from "react-router-dom";
import { RightArrowIcon } from "../../../../../../components/ui/icons/right-arrow-icon";
import { useEffect } from "react";
import { useAppDispatch } from "../../../../../../store/hooks/use-app-dispatch";
import { getPopularCategoriesThunk } from "../../../../../../store/thunks";
import { useAppSelector } from "../../../../../../store/hooks/use-app-selector";

export const PopularCategorySection = () => {
  const dispatch = useAppDispatch();
  const { isLoading, isSuccess, categories } = useAppSelector(
    (state) => state.popularCategoryReducer
  );

  useEffect(() => {
    if (!isLoading && !isSuccess) {
      dispatch(getPopularCategoriesThunk());
    }

    // eslint-disable-next-line
  }, []);

  return (
    <section className={styles.popularCategorySection}>
      <H2>Популярные разделы</H2>
      <div className={styles.popularCategorySection__categories}>
        {categories.map((category, i) => (
          <CategoryCard key={category.title + i} category={category} />
        ))}
      </div>
      <Link
        to={"/sections"}
        className={styles.popularCategorySection__allCategoriesLink}
      >
        Смотреть все{" "}
        <RightArrowIcon
          classname={styles.popularCategorySection__allCategoriesLinkICon}
        />
      </Link>
    </section>
  );
};
