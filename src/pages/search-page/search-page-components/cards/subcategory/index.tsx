import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { startPage } from "../../../../../data/ constants";
import { IcDotIcon } from "../../../../../components/ui/icons/ac-dot-icon";
import { FC } from "react";
import { SubcategoryResource } from "../../../../../api/types/resource/subcategory-resource";
import { ArrowRightIcon } from "../../../../../components/ui/icons/arrow-right-icon";
interface IProps {
  subcategory: SubcategoryResource;
}
const SubcategorySearchCard: FC<IProps> = ({ subcategory }) => {
  return (
    <section className={styles.section}>
      <div className={`${styles.info}`}>
        <Link
          to={`${startPage}categories/category/${subcategory.section.id}/subcategory/${subcategory.id}?subsection=${subcategory.id}`}
          className={styles.title}
        >
          {subcategory.title}
        </Link>
        <Link
          to={`${startPage}categories/category/${subcategory.section.id}`}
          className={styles.categoryLink}
        >
          <IcDotIcon />
          {subcategory.section.title}
        </Link>
        <div className={styles.description}>{subcategory.description}</div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.count}>
          {`Вариантов ${subcategory.articles_count}`}
        </div>
        <Link
          to={`${startPage}categories/category/${subcategory.section.id}/subcategory/${subcategory.id}?subsection=${subcategory.id}`}
          className={styles.arrow}
        >
          <ArrowRightIcon />
        </Link>
      </div>
    </section>
  );
};
export default SubcategorySearchCard;
