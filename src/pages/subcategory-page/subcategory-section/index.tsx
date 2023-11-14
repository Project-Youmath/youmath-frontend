import TaskCard from "../../../components/task-card";
import { useAppSelector } from "../../../store/hooks/use-app-selector";
import styles from "./index.module.scss";
const SectionSubcategory = () => {
  const { subcategory } = useAppSelector((state) => state.subcategoryReducer);
  const { tasks } = useAppSelector((state) => state.getTasksReducer);

  return (
    <section className={styles.section}>
      <div className={styles.title}>{subcategory?.title}</div>
      <div className={styles.subtitle}>{subcategory?.title}</div>
      <div className={styles.description}>{subcategory?.description} </div>

      <div className={styles.cards}>
        {tasks.map((task) => (
          <TaskCard key={task.title + task.id} task={task}></TaskCard>
        ))}
      </div>
    </section>
  );
};
export default SectionSubcategory;
