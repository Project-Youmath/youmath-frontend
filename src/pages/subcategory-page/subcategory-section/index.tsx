import Loader from "../../../components/loader";
import TaskCard from "../../../components/task-card";
import { H2 } from "../../../components/ui/typography/h2/h2";
import { useAppSelector } from "../../../store/hooks/use-app-selector";
import styles from "./index.module.scss";
const SectionSubcategory = () => {
  const { subcategory } = useAppSelector((state) => state.subcategoryReducer);
  const { isLoading, tasks } = useAppSelector((state) => state.getTasksReducer);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={styles.section}>
          <H2>{subcategory?.title ?? ""}</H2>
          <p className={styles.description}>{subcategory?.description} </p>
          <div className={styles.cards}>
            {tasks.map((task) => (
              <TaskCard key={task.title + task.id} task={task}></TaskCard>
            ))}
          </div>
        </section>
      )}
    </>
  );
};
export default SectionSubcategory;
