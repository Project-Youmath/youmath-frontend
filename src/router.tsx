import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { App } from "./app";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ startPage } element={<App />}>
      <Route index element={<MainPage />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="categories" element={<CategoriesPage />} />
      <Route
        path="categories/category/:categoryId"
        element={<CategoryPage />}
      />
      <Route
        path="categories/category/:categoryId/subcategory/:subcategoryId"
        element={<SubcategoryPage />}
      />
      <Route
        path="categories/category/:categoryId/subcategory/:subcategoryId/task/:taskId"
        element={<TaskPage />}
      />
      <Route path="about" element={<AboutPage />} />
      <Route path="feedback" element={<FeedbackPage />} />
      <Route path={"*"} element={<ErrorPage />} />
    </Route>
  )
);

export default router;