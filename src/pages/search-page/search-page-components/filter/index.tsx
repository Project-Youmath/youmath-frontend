import { useAppSelector } from "../../../../store/hooks/use-app-selector";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
const SearchFilter = () => {
  const { countTasks } = useAppSelector((state) => state.getTasksReducer);
  const [active, setActive] = useState(0);
  const [count, setCount] = useState([0, 0, 0, 0]);
  useEffect(() => {
    setCount([countTasks, countTasks, 0, 0]);
  }, [countTasks]);
  useEffect(() => {
    switch (active) {
      case 0:
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
    }
  }, [active]);
  return (
    <section className={styles.section}>
      {["Все", "Решение", "Подразделы", "Разделы"].map((title, i) => (
        <div
          className={active === i ? styles.active : ""}
          onClick={() => setActive(i)}
        >{`${title} (${count[i]})`}</div>
      ))}
    </section>
  );
};
export default SearchFilter;
