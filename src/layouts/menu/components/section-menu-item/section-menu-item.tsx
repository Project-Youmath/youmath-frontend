import { useNavigate, useParams } from "react-router-dom";
import styles from "./section-menu-item.module.scss";
import { FC } from "react";
import { startPage } from "../../../../data/ constants";

interface SectionMenuItemProps {
  categoryIndex: number;
  categoryTitle: string;
}

export const SectionMenuItem: FC<SectionMenuItemProps> = ({
  categoryIndex,
  categoryTitle,
}) => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  return (
    <div
      onClick={() => {
        navigate(`${startPage}/category/${categoryIndex}`);
      }}
      className={`${styles.sectionMenuItem} ${
        categoryId === categoryIndex.toString() ? styles.active : ""
      }`}
    >
      {categoryTitle}
    </div>
  );
};
