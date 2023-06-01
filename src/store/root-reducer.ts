import { combineReducers } from "@reduxjs/toolkit";
import { searchVisibilityReducer } from "./slices/search-visibility-slice";
import { popularCategoryReducer } from "./slices/popular-category-slice";
import { allCategoryReducer } from "./slices/all-categories-slice";
import { searchReducer } from "./slices/search-slice";
import { categoryReducer } from "./slices/category-slice";

export const rootReducer = combineReducers({
  searchVisibilityReducer,
  searchReducer,
  allCategoryReducer,
  popularCategoryReducer,
  categoryReducer,
});
