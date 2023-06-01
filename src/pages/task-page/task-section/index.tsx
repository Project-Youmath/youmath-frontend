import styles from "./index.module.scss";
import { useAppSelector } from "../../../store/hooks/use-app-selector";
import { H2 } from "../../../components/ui/typography/h2/h2";

const TaskSection = () => {
  const { task } = useAppSelector((state) => state.getTaskReducer);

  return (
    <section className={styles.__section}>
      <H2>{task?.title ?? ""}</H2>
      <p>{task?.description} </p>
    </section>
  );
};
export default TaskSection;
