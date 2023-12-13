import styles from "./index.module.scss";
import { FC } from "react";
import { TaskResource } from "../../api/types/resource/task-resource";
import { ArrowRightSmallIcon } from "../ui/icons/arrow-right-small-icon";
import { Link, useParams } from "react-router-dom";
import { startPage } from "../../data/ constants";
interface ITaskCardProps {
  task: TaskResource;
}
const TaskCard: FC<ITaskCardProps> = ({ task }) => {
  const { categoryId, subcategoryId } = useParams();
  return (
    <Link
      to={`${startPage}categories/category/${categoryId}/subcategory/${subcategoryId}/task/${task.id}`}
      className={styles.link}
      onClick={async() => window.scroll(0, 0)}
    >
      <section className={styles.section}>
        <div className={styles.title}>
          {task.title.split(" ").slice(1, 2).join(" ") + " Вариант"}
        </div>
        <div className={styles.subtitle}>{task.subtitle}</div>
        <div className={styles.icon}>
          <ArrowRightSmallIcon />
        </div>
      </section>
    </Link>
  );
};
export default TaskCard;
