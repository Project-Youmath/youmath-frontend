import styles from "./section-menu.module.scss";
import { SectionMenuItem } from "../section-menu-item/section-menu-item";

import Loader from "../../../../components/loader";
import { useAppSelector } from "../../../../store/hooks/use-app-selector";

export const SectionMenu = () => {
  const { isLoading, categories } = useAppSelector(
    (state) => state.allCategoryReducer
  );
  return (
    <div className={styles.sectionMenu}>
      {isLoading ? (
        <Loader />
      ) : (
        categories.map((category) => (
          <SectionMenuItem key={category.title + category.id} id={category.id}>
            {category.title}
          </SectionMenuItem>
        ))
      )}
    </div>
  );
};
