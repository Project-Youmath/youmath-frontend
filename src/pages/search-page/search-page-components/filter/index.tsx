import { useAppDispatch } from "../../../../store/hooks/use-app-dispatch";
import { useAppSelector } from "../../../../store/hooks/use-app-selector";
import { searchActions } from "../../../../store/slices/search-slice";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
const SearchFilter = () => {
  const dispatch = useAppDispatch();
  const { countTasks, countCategories, countSubcategories } = useAppSelector(
    (state) => state.searchReducer
  );
  const [active, setActive] = useState(0);
  useEffect(() => {
    dispatch(searchActions.changeFilter(active));
  }, [active, dispatch]);
  return (
    <section className={styles.section}>
      {["Все", "Решение", "Подразделы", "Разделы"].map((title, i) => (
        <div
          key={title}
          className={active === i ? styles.active : ""}
          onClick={() => setActive(i)}
        >{`${title} (${
          [
            countTasks + countCategories + countSubcategories,
            countTasks,
            countSubcategories,
            countCategories,
          ][i]
        })`}</div>
      ))}
    </section>
  );
};
export default SearchFilter;
