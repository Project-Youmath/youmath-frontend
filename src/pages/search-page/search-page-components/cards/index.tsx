import styles from "./index.module.scss";

import { useAppSelector } from "../../../../store/hooks/use-app-selector";

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
          <div
            className={`${styles.cards} ${styles.categories}`}
            key={`search${category.title + category.id}`}
          >
            <div className={styles.title}>{category.title}</div>
            <div className={styles.subtitle}>{category.title}</div>
            <div className={styles.description}>{category.description}</div>
          </div>
        ))}
      {(filter === 2 || (!filter && lengthCategories === countCategories)) &&
        subcategories.map((subcategory: any) => (
          <div
            className={`${styles.cards} ${styles.subcategories}`}
            key={`search${subcategory.title + subcategory.id}`}
          >
            <div className={styles.title}>{subcategory.title}</div>
            <div className={styles.subtitle}>{subcategory.title}</div>
            <div className={styles.description}>{subcategory.description}</div>
          </div>
        ))}
      {(filter === 1 ||
        (!filter &&
          lengthCategories === countCategories &&
          lengthSubcategories === countSubcategories)) &&
        tasks.map((task: any) => (
          <div
            className={`${styles.cards} ${styles.tasks}`}
            key={`search${task.title + task.id}`}
          >
            <div className={styles.title}>{task.title}</div>
            <div className={styles.subtitle}>{task.title}</div>
            <div className={styles.description}>{task.description}</div>
          </div>
        ))}
    </section>
  );
};
export default SearchPageCards;
