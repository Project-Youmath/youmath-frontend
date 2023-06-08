import styles from "./index.module.scss";

import { useAppSelector } from "../../../../store/hooks/use-app-selector";
import SubcategorySearchCard from "./subcategory";
import TaskSearchCard from "./task";
import CategorySearchCard from "./category";

const SearchPageCards = () => {
  const {
    tasks,
    subcategories,
    categories,
    filter,
    countCategories,
    countSubcategories,
    lengthCategories,
    lengthSubcategories,
  } = useAppSelector((state) => state.searchReducer);
  return (
    <section className={styles.section}>
      {[0, 3].includes(filter) &&
        categories.map((category: any) => (
          <CategorySearchCard
            key={`search${category.title + category.id}`}
            category={category}
          />
        ))}
      {(filter === 2 || (!filter && lengthCategories === countCategories)) &&
        subcategories.map((subcategory: any) => (
          <SubcategorySearchCard
            key={`search${subcategory.title + subcategory.id}`}
            subcategory={subcategory}
          ></SubcategorySearchCard>
        ))}
      {(filter === 1 ||
        (!filter &&
          lengthCategories === countCategories &&
          lengthSubcategories === countSubcategories)) &&
        tasks.map((task: any) => (
          <TaskSearchCard key={`search${task.title + task.id}`} task={task} />
        ))}
    </section>
  );
};
export default SearchPageCards;
