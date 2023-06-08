import styles from "./index.module.scss";
import { CategorySectionContentInfo } from "./content-info";
import { SubcategoryCard } from "./subcategory-card";
import { useAppSelector } from "../../../../store/hooks/use-app-selector";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../../store/hooks/use-app-dispatch";
import { getCategoryThunk } from "../../../../store/thunks";
import Loader from "../../../../components/loader";
import TaskCard from "../../../../components/task-card";

export const CategorySectionContent = () => {
  const dispatch = useAppDispatch();
  const { isLoading, category } = useAppSelector(
    (state) => state.categoryReducer
  );
  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(getCategoryThunk(categoryId ?? ""));
  }, [dispatch, categoryId]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={styles.section}>
          <CategorySectionContentInfo />
          <div className={styles.cardsSubsections}>
            {category?.subsections?.map((subcategory) => (
              <SubcategoryCard
                key={subcategory.title + subcategory.id}
                subcategory={subcategory}
              />
            ))}
          </div>
          <div className={styles.cardsTasks}>
            {!category?.subsections?.length &&
              category?.articles.map((task) => (
                <TaskCard key={task.title + task.id} task={task} />
              ))}
          </div>
        </section>
      )}
    </>
  );
};
