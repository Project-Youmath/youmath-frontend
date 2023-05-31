import { Route, Routes } from "react-router-dom";
import { CategoryPage } from "./pages/category-page/category-page";
import { MainPage } from "./pages/main-page/main-page";
import { SearchPage } from "./pages/search-page/search-page";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { ErrorPage } from "./pages/error-page/error-page";
import { useEffect } from "react";
import { CategoriesPage } from "./pages/categories-page/categories-page";
import { useAppDispatch } from "./hooks/use-app-dispatch";
import { getAllCategoriesThunk } from "./store/thunks";
import { AboutPage } from "./pages/about-page/about-page";

export const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllCategoriesThunk());
  }, [dispatch]);
  return (
    <section className="app">
      <Header isPageHaveSearchSection={true} />
      <section className="page">
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/youmath-frontend"} element={<MainPage />} />
          <Route path={"/categories"} element={<CategoriesPage />} />
          <Route path={"/category/:id"} element={<CategoryPage />} />
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/search"} element={<SearchPage />} />
          <Route path={"/*"} element={<ErrorPage />} />
        </Routes>
      </section>
      <Footer />
    </section>
  );
};
