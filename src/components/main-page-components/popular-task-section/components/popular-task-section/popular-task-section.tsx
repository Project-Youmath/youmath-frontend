import styles from "./popular-task-section.module.scss";
import { H2 } from "../../../../ui/typography/h2/h2";
import { PopularTaskCard } from "../../../../popular-task-card";
import { useAppDispatch } from "../../../../../hooks/use-app-dispatch";
import { useAppSelector } from "../../../../../hooks/use-app-selector";
import { useEffect } from "react";
import { getPopularCategoriesThunk } from "../../../../../store/thunks";

export const PopularTaskSection = () => {
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
    <div className={styles.popularTaskSection}>
      <div className={styles.popularTaskSection__content}>
        <H2>Популярные задачи</H2>
        <div className={styles.popularTaskSection__taskList}>
          {categories.map((category, i) => (
            <PopularTaskCard
              key={"popularTaskSection__task-" + i}
              category={category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
