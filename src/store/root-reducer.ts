import { combineReducers } from "@reduxjs/toolkit";
import { searchVisibilityReducer } from "./reducer/search-visibility-reducer";
import { popularCategoryReducer } from "./reducer/popular-category-reducer";
import { allCategoryReducer } from "./reducer/all-categories-reducer";
import { searchReducer } from "./reducer/search-reducer";

export const rootReducer = combineReducers({
  searchVisibilityReducer,
  searchReducer,
  allCategoryReducer,
  popularCategoryReducer,
});
