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
          <NavLink
            key={navigationPage + i}
            className={styles.link}
            style={({ isActive }) => {
              return {
                color: isActive ? "#245353" : "#888",
              };
            }}
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
            <span>
              {
                [
                  "Главная",
                  linkTitle[navigationPage],
                  category?.title,
                  subcategory?.title,
                  task?.title,
                ][i]
              }
            </span>
            <ArrowForwardIcon />
          </NavLink>
        ) : (
          <></>
        )
      )}
    </section>
  );
};
export default Navigation;
