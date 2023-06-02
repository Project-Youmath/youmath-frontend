import { combineReducers } from "@reduxjs/toolkit";
import { popularCategoryReducer } from "./slices/popular-category-slice";
import { allCategoryReducer } from "./slices/all-categories-slice";
import { getTasksReducer } from "./slices/get-tasks-slice";
import { getTaskReducer } from "./slices/get-task-slice";
import { categoryReducer } from "./slices/category-slice";
import { subcategoryReducer } from "./slices/subcategory-slice";

export const rootReducer = combineReducers({
  getTasksReducer,
  getTaskReducer,
  allCategoryReducer,
  popularCategoryReducer,
  categoryReducer,
  subcategoryReducer,
});
