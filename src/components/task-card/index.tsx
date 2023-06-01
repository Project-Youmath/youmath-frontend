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
      to={`${startPage}/category/${categoryId}/subcategory/${subcategoryId}/${task.id}`}
      className={styles.__link}
    >
      <section className={styles.__card}>
        <div className={styles.__card__title}>{task.title}</div>
        <div>{task.title}</div>
        <div className={styles.__card__icon}>
          <ArrowRightSmallIcon />
        </div>
      </section>
    </Link>
  );
};
export default TaskCard;
