import styles from "./index.module.scss";
import { Link, useParams } from "react-router-dom";
import { FC } from "react";
import { ArrowRightSmallIcon } from "../../../../../components/ui/icons/arrow-right-small-icon";
import { startPage } from "../../../../../data/ constants";
interface ISubcategoryCardProps {
  subcategory: {
    id: number;
    title: string;
    description: string | null;
    read_counter: number;
    articles_count?: number | null;
  };
}
export const SubcategoryCard: FC<ISubcategoryCardProps> = ({ subcategory }) => {
  const { categoryId } = useParams();
  return (
    <section className={styles.section}>
      <div className={styles.title}>{subcategory.title}</div>
      <div className={styles.description}>{subcategory.description ?? ""}</div>
      <div className={styles.links}>
        <div className={`${styles.taskCount}`}>
          {`${subcategory.articles_count ?? "нет"} вариант${
            subcategory.articles_count
              ? subcategory.articles_count === 1
                ? ""
                : [2, 3, 4].includes(subcategory.articles_count)
                ? "а"
                : "ов"
              : "ов"
          }`}
        </div>
        <Link
          to={`${startPage}categories/category/${categoryId}/subcategory/${subcategory.id}?subsection=${subcategory.id}`}
          className={`${styles.link} ${styles.allVariants}`}
        >
          <span> К списку вариантов</span>
          <ArrowRightSmallIcon />
        </Link>
      </div>
    </section>
  );
};
