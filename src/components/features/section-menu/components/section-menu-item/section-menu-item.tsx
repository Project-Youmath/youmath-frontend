import { useNavigate } from "react-router-dom";
import styles from "./section-menu-item.module.scss";
import { FC } from "react";

interface SectionMenuItemProps {
  id: number;
  children: string;
}

export const SectionMenuItem: FC<SectionMenuItemProps> = ({ id, children }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/category/${id}`);
      }}
      className={styles.sectionMenuItem}
    >
      {children}
    </div>
  );
};
