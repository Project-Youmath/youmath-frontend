import styles from "./index.module.scss";
import { PopularTaskCard } from "../../../../../../components/popular-task-card";
import { useAppDispatch } from "../../../../../../store/hooks/use-app-dispatch";
import { useEffect } from "react";
import { getPopularCategoriesThunk } from "../../../../../../store/thunks";
import { useAppSelector } from "../../../../../../store/hooks/use-app-selector";
import Container from "../../../../../../layouts/container";

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
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <div className={styles.title}>Популярные задачи</div>
          <div className={styles.taskList}>
            {categories
              .map((category, i) => (
                <PopularTaskCard
                  extraClass={["darkBlue", "white", "darkGreen"][i]}
                  key={"popularTaskSection__task-" + i}
                  category={category}
                />
              ))
              .slice(0, 3)}
          </div>
        </div>
      </Container>
    </section>
  );
};
