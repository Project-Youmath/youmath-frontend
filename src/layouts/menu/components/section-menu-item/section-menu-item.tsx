import { NavLink } from "react-router-dom";
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
  return (
    <NavLink
      to={`${startPage}categories/category/${categoryIndex}`}
      className={({ isActive }) =>
        isActive ? `${styles.sectionMenuItem} ${styles.active}` : styles.sectionMenuItem
      }
    >
      {categoryTitle}
    </NavLink>
  );
};
