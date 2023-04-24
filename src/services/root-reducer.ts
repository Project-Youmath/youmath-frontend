import {combineReducers} from "@reduxjs/toolkit";
import {searchVisibilityReducer} from "./reducer/search-visibility-reducer";
import {popularCategoryReducer} from "./reducer/popular-category-reducer";

export const rootReducer = combineReducers({searchVisibilityReducer, popularCategoryReducer})