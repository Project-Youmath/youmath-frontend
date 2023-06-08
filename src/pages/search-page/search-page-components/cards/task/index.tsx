import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { startPage } from "../../../../../data/ constants";
import { IcDotIcon } from "../../../../../components/ui/icons/ac-dot-icon";
import { FC } from "react";
import { ArrowRightIcon } from "../../../../../components/ui/icons/arrow-right-icon";
import { TaskResource } from "../../../../../api/types/resource/task-resource";
interface IProps {
  task: TaskResource;
}
const TaskSearchCard: FC<IProps> = ({ task }) => {
  return (
    <section className={styles.section}>
      <div className={`${styles.info}`}>
        <Link
          to={`${startPage}categories/category/${task.section_id}/subcategory/${
            task.subsection_id ?? "none"
          }/task/${task.id}`}
          className={styles.title}
        >
          {task.title}
        </Link>
        <div className={styles.links}>
          <Link
            to={`${startPage}categories/category/${task.section_id}`}
            className={styles.link}
          >
            <IcDotIcon />
            {task.title}
          </Link>
          {/* {task.subsection_title ? ( */}
          {true ? (
            <Link
              to={`${startPage}categories/category/${task.section_id}/subcategory/${task.subsection_id}`}
              className={styles.link}
            >
              <IcDotIcon classname={styles.darkGreen} />
              {task.title}
            </Link>
          ) : (
            ""
          )}
        </div>
        <div className={styles.description}>{task.description}</div>
      </div>
      <div className={styles.buttons}>
        <Link
          to={`${startPage}categories/category/${task.section_id}/subcategory/${
            task.subsection_id ?? "none"
          }/task/${task.id}`}
          className={styles.arrow}
        >
          <ArrowRightIcon />
        </Link>
      </div>
    </section>
  );
};
export default TaskSearchCard;
