import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks/use-app-dispatch";
import { getAllCategoriesThunk } from "./store/thunks";
import { searchVisibleActions } from "./store/slices/search-visibility-slice";

import Header from "./layouts/header";
import Footer from "./layouts/footer";
import MainPage from "./pages/main-page";
import SearchPage from "./pages/search-page";
import CategoriesPage from "./pages/categories-page";
import CategoryPage from "./pages/category-page";
import AboutPage from "./pages/about-page";
import FeedbackPage from "./pages/feedback-page";
import ErrorPage from "./pages/error-page";
import SubcategoryPage from "./pages/subcategory-page";
import { startPage } from "./data/ constants";
import TaskPage from "./pages/task-page";
// import Pages from "./pages";

export const App = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllCategoriesThunk());
  }, [dispatch]);
  useEffect(() => {
    if (/^(\/|\/youmath-frontend)$/.test(location.pathname)) {
      dispatch(searchVisibleActions.changeVisible(true));
    } else {
      dispatch(searchVisibleActions.changeVisible(false));
    }
  }, [dispatch, location.pathname]);

  return (
    <section className="app">
      <Header />
      <section className="page">
        <Routes>
          <Route path={startPage} element={<MainPage />} />
          <Route path={startPage + "/search"} element={<SearchPage />} />
          <Route
            path={startPage + "/categories"}
            element={<CategoriesPage />}
          />
          <Route
            path={startPage + "/category/:categoryId"}
            element={<CategoryPage />}
          />
          <Route
            path={
              startPage + "/category/:categoryId/subcategory/:subcategoryId"
            }
            element={<SubcategoryPage />}
          />
          <Route
            path={
              startPage +
              "/category/:categoryId/subcategory/:subcategoryId/:taskId"
            }
            element={<TaskPage />}
          />
          <Route path={startPage + "/about"} element={<AboutPage />} />
          <Route path={startPage + "/feedback"} element={<FeedbackPage />} />
          <Route path={"/*"} element={<ErrorPage />} />
        </Routes>
      </section>
      <Footer />
    </section>
  );
};
