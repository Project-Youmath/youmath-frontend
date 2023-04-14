import {combineReducers} from "@reduxjs/toolkit";
import {searchVisibilityReducer} from "./reducer/search-visibility-reducer";

export const rootReducer = combineReducers({searchVisibilityReducer})