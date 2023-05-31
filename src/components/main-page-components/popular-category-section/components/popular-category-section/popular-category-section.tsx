import styles from "./popular-category-section.module.scss";
import { H2 } from "../../../../ui/typography/h2/h2";
import CategoryCard from "../../../../category-card";
import { Link } from "react-router-dom";
import { RightArrowIcon } from "../../../../ui/icons/right-arrow-icon";
import { useAppSelector } from "../../../../../hooks/use-app-selector";
import { useEffect } from "react";
import { useAppDispatch } from "../../../../../hooks/use-app-dispatch";
import { getPopularCategoriesThunk } from "../../../../../store/thunks";

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
