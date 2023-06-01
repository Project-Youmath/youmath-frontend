import { Route, Routes } from "react-router-dom";
import MainPage from "./main-page";
import SearchPage from "./search-page";
import CategoriesPage from "./categories-page";
import CategoryPage from "./category-page";
import AboutPage from "./about-page";
import FeedbackPage from "./feedback-page";
import ErrorPage from "./error-page";

const Pages = () => {
  return (
    <Routes>
      <>
        <Route path={"youmath-frontend"} element={<MainPage />} />
        <Route path={"search"} element={<SearchPage />} />
        <Route path={"categories"} element={<CategoriesPage />} />
        <Route path={"category/:id"} element={<CategoryPage />} />
        <Route path={"about"} element={<AboutPage />} />
        <Route path={"feedback"} element={<FeedbackPage />} />
        <Route path={"*"} element={<ErrorPage />} />
      </>
    </Routes>
  );
};
export default Pages;
