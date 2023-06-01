import Loader from "../../../components/loader";
import TaskCard from "../../../components/task-card";
import { H2 } from "../../../components/ui/typography/h2/h2";
import { useAppSelector } from "../../../store/hooks/use-app-selector";
import styles from "./index.module.scss";
const SectionSubcategory = () => {
  const { subcategory } = useAppSelector((state) => state.subcategoryReducer);
  const { isLoading, tasks } = useAppSelector((state) => state.getTasksReducer);

  return (
    <section className={styles.__section}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <H2>{subcategory?.title ?? ""}</H2>
          <p>{subcategory?.description} </p>
          <section className={styles.__section__cards}>
            {tasks.map((task) => (
              <TaskCard key={task.title + task.id} task={task}></TaskCard>
            ))}
          </section>
        </>
      )}
    </section>
  );
};
export default SectionSubcategory;
