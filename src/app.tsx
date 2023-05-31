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
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/youmath-frontend"} element={<MainPage />} />
          <Route path={"/search"} element={<SearchPage />} />
          <Route path={"/categories"} element={<CategoriesPage />} />
          <Route path={"/category/:id"} element={<CategoryPage />} />
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/feedback"} element={<FeedbackPage />} />
          <Route path={"/*"} element={<ErrorPage />} />
        </Routes>
      </section>
      <Footer />
    </section>
  );
};
