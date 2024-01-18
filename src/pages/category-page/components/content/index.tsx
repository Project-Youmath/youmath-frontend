import styles from "./index.module.scss";
import { CategorySectionContentInfo } from "./content-info";
import { SubcategoryCard } from "./subcategory-card";
import { useAppSelector } from "../../../../store/hooks/use-app-selector";

import Loader from "../../../../components/Loader";
import TaskCard from "../../../../components/task-card";

export const CategorySectionContent = () => {
  const { isLoading, category } = useAppSelector(
    (state) => state.categoryReducer
  );
  const { subcategories } = useAppSelector(
    (state) => state.subcategoriesReducer
  );
  const { tasks } = useAppSelector((state) => state.getTasksReducer);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={styles.section}>
          <CategorySectionContentInfo />
          {category?.subsection_exist ? (
            <div className={styles.cardsSubsections}>
              {subcategories?.map((subcategory) => (
                <SubcategoryCard
                  key={subcategory.title + subcategory.id}
                  subcategory={subcategory}
                />
              ))}
            </div>
          ) : (
            <div className={styles.cardsTasks}>
              {tasks.map((task) => (
                <TaskCard key={task.title + task.id} task={task} />
              ))}
            </div>
          )}
        </section>
      )}
    </>
  );
};
