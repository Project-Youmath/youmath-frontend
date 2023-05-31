import styles from "./popular-task-section.module.scss";
import { H2 } from "../../../../../../components/ui/typography/h2/h2";
import { PopularTaskCard } from "../../../../../../components/popular-task-card";
import { useAppDispatch } from "../../../../../../store/hooks/use-app-dispatch";
import { useEffect } from "react";
import { getPopularCategoriesThunk } from "../../../../../../store/thunks";
import { useAppSelector } from "../../../../../../store/hooks/use-app-selector";

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
