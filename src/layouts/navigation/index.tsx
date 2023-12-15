import styles from "./index.module.scss";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { ArrowForwardIcon } from "../../components/ui/icons/arrow-forward-icon";
import { useAppSelector } from "../../store/hooks/use-app-selector";
import { startPage } from "../../data/ constants";

const linkTitle: { [key: string]: string } = {
  // [startPage.slice(1)]: "Главная",
  categories: "Разделы",
  about: "О проекте",
  feedback: "Связаться с нами",
  search: "Результаты поиска",
};
const Navigation = () => {
  const { category } = useAppSelector((state) => state.categoryReducer);
  const { subcategory } = useAppSelector((state) => state.subcategoryReducer);
  const { task } = useAppSelector((state) => state.getTaskReducer);
  const { pathname } = useLocation();
  const { categoryId, subcategoryId, taskId } = useParams();
  const navigationPages = pathname
    .split("/")
    .filter((page) => !["category", "subcategory", "task"].includes(page));

  return (
    <section className={styles.section}>
      {navigationPages.map((navigationPage, i) =>
        navigationPage !== "none" ? (
          <>
            <NavLink
              key={navigationPage + i}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
              to={
                [
                  startPage,
                  `${startPage}${navigationPage}`,
                  `${startPage}categories/category/${categoryId}`,
                  `${startPage}categories/category/${categoryId}/subcategory/${subcategoryId}?subsection=${subcategoryId}`,
                  `${startPage}categories/category/${categoryId}/subcategory/${subcategoryId}/task/${taskId}`,
                ][i]
              }
              end
            >
                {
                  [
                    "Главная",
                    linkTitle[navigationPage],
                    category?.title,
                    subcategory?.title,
                    task?.title,
                  ][i]
                }
            </NavLink>
            {i !== navigationPages.length - 1 && <ArrowForwardIcon />}
          </>
        ) : (
          <></>
        )
      )}
    </section>
  );
};
export default Navigation;
