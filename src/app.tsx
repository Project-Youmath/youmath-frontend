import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks/use-app-dispatch";
import { getAllCategoriesThunk } from "./store/thunks";
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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllCategoriesThunk());
  }, [dispatch]);

  return (
    <section className="app">
      <ScrollToTop />
      <Header />
      <section className="page">
        <Routes>
          <Route path={startPage} element={<MainPage />} />
          <Route path={startPage + "search"} element={<SearchPage />} />
          <Route path={startPage + "categories"} element={<CategoriesPage />} />
          <Route
            path={startPage + "categories/category/:categoryId"}
            element={<CategoryPage />}
          />
          <Route
            path={
              startPage +
              "categories/category/:categoryId/subcategory/:subcategoryId"
            }
            element={<SubcategoryPage />}
          />
          <Route
            path={
              startPage +
              "categories/category/:categoryId/subcategory/:subcategoryId/task/:taskId"
            }
            element={<TaskPage />}
          />
          <Route path={startPage + "about"} element={<AboutPage />} />
          <Route path={startPage + "feedback"} element={<FeedbackPage />} />
          <Route path={"*"} element={<ErrorPage />} />
        </Routes>
      </section>
      <Footer />
    </section>
  );
};
