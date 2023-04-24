import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api/api";

export const getPopularCategoriesThunk = createAsyncThunk(
    "thunk/getPopularCategories",
    () => api.getPopularCategory()
)