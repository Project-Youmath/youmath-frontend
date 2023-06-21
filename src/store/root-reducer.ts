import { combineReducers } from "@reduxjs/toolkit";
import { popularCategoryReducer } from "./slices/popular-category-slice";
import { allCategoryReducer } from "./slices/all-categories-slice";
import { getTasksReducer } from "./slices/tasks-slice";
import { getTaskReducer } from "./slices/task-slice";
import { categoryReducer } from "./slices/category-slice";
import { subcategoryReducer } from "./slices/subcategory-slice";
import { subcategoriesReducer } from "./slices/subcategories-slice";
import { searchReducer } from "./slices/search-slice";

export const rootReducer = combineReducers({
  getTasksReducer,
  getTaskReducer,
  allCategoryReducer,
  popularCategoryReducer,
  categoryReducer,
  subcategoryReducer,
  searchReducer,
  subcategoriesReducer,
});
