import styles from "./index.module.scss";
import { PopularTaskCard } from "../../../../../../components/popular-task-card";
import { useAppDispatch } from "../../../../../../store/hooks/use-app-dispatch";
import { useEffect, useState } from "react";
import { getPopularCategoriesThunk } from "../../../../../../store/thunks";
import { useAppSelector } from "../../../../../../store/hooks/use-app-selector";
import Container from "../../../../../../layouts/container";
import { useSwipeable } from "react-swipeable";

export const PopularTaskSection = () => {
  const dispatch = useAppDispatch();
  const { isLoading, isSuccess, categories } = useAppSelector(
    (state) => state.popularCategoryReducer
  );
  const [activeCard, setActiveCard] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      activeCard && setActiveCard((p) => p - 1);
    },
    onSwipedRight: () => {
      activeCard < 2 && setActiveCard((p) => p + 1);
    },
  });
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
          <div className={`${styles.taskList} ${styles.landscape}`}>
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
          <div
            ref={handlers.ref}
            className={`${styles.taskList} ${styles.portrait}`}
          >
            {categories
              .map(
                (category, i) =>
                  activeCard === i && (
                    <PopularTaskCard
                      extraClass={["darkBlue", "white", "darkGreen"][i]}
                      key={"popularTaskSection__task-" + i}
                      category={category}
                    />
                  )
              )
              .slice(0, 3)}
            <div className={styles.points}>
              {[...Array(3)].map((_, i) => (
                <span
                  key={"point" + i}
                  className={`${styles.point} ${
                    activeCard === i ? styles.active : ""
                  }`}
                >
                  &bull;
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
