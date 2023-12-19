import styles from "./index.module.scss";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { ArrowForwardIcon } from "../../components/ui/icons/arrow-forward-icon";
import { useAppSelector } from "../../store/hooks/use-app-selector";
import { startPage } from "../../data/ constants";
import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks/use-app-dispatch";
import { getCategoryThunk, getSubcategoryThunk } from "../../store/thunks";

const linkTitle: { [key: string]: string } = {
  categories: "Разделы",
  about: "О проекте",
  feedback: "Связаться с нами",
  search: "Результаты поиска",
};
const Navigation = () => {
  let { category } = useAppSelector((state) => state.categoryReducer);
  let { subcategory } = useAppSelector((state) => state.subcategoryReducer);
  let { task } = useAppSelector((state) => state.getTaskReducer);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { categoryId, subcategoryId, taskId } = useParams();
  const navigationPages = pathname
    .split("/")
    .filter((page) => !["category", "subcategory", "task"].includes(page));

    useEffect(() => {
      dispatch(getCategoryThunk(categoryId ?? ""));
    }, [dispatch, categoryId]);

    useEffect(() => {
      dispatch(getSubcategoryThunk(subcategoryId ?? ""));
    }, [dispatch, subcategoryId]);

  return (
    <section className={styles.section}>
      {navigationPages.map((navigationPage, i) =>
        (navigationPage !== "none" && navigationPage !== 'undefined') ? (
          <>
            <NavLink
              key={'navigationPage' + i}
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
