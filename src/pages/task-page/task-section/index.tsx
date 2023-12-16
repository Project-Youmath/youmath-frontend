import styles from "./index.module.scss";

import { useAppSelector } from "../../../store/hooks/use-app-selector";

const TaskSection = () => {
  const { task } = useAppSelector((state) => state.getTaskReducer);

  return (
    <section className={styles.section}>
      <div className={styles.title}>{task?.title}</div>
      <div className={styles.subtitle}>{task?.subtitle} </div>
      <div className={styles.description}>
        {task?.description.split("\n").map((subStr) => {
          return (
            <>
              {subStr}
              <br />
            </>
          );
        })}
      </div>

      <embed
        className={styles.pdf}
        src={`https://youmath.ru${task?.file}`}
        type="application/pdf"
      />
    </section>
  );
};
export default TaskSection;
