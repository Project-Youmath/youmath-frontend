import styles from "./index.module.scss";
import { useAppSelector } from "../../../../store/hooks/use-app-selector";
import { useLocation } from "react-router-dom";

const SearchPageTitle = () => {
  const { search } = useLocation();
  const query = decodeURIComponent(search.slice(8));
  const { tasks } = useAppSelector((state) => state.getTasksReducer);
  return (
    <>
      {tasks.length ? (
        <>
          <div className={styles.title}> "Результаты поиска по запросу" </div>
          <div
            className={`${styles.title} ${styles.query}`}
          >{`«${query}»`}</div>
        </>
      ) : (
        <>
          <span className={styles.title}>По запросу</span>
          <span
            className={`${styles.title} ${styles.query}`}
          >{` «${query}» `}</span>
          <span className={styles.title}>ничего не найдено</span>
        </>
      )}
    </>
  );
};
export default SearchPageTitle;
