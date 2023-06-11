import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { startPage } from "../../../../../data/ constants";
import { FC } from "react";
import { ArrowRightIcon } from "../../../../../components/ui/icons/arrow-right-icon";
import { CategoryResource } from "../../../../../api/types/resource/category-resource";
interface IProps {
  category: CategoryResource;
}
const CategorySearchCard: FC<IProps> = ({ category }) => {
  return (
    <section className={styles.section}>
      <div className={`${styles.info}`}>
        <Link
          to={`${startPage}categories/category/${category.id}`}
          className={styles.title}
        >
          {category.title}
        </Link>
        <div className={styles.description}>{category.description}</div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.count}>
          {`Вариантов ${category.articles_count}`}
        </div>
        {category.subsection_exist && (
          <div className={styles.count}>
            {`Подразделов ${category.subsections_count}`}
          </div>
        )}
        <Link
          to={`${startPage}categories/category/${"none"}/category/${
            category.id
          }?subsection=${category.id}`}
          className={styles.arrow}
        >
          <ArrowRightIcon />
        </Link>
      </div>
    </section>
  );
};
export default CategorySearchCard;
