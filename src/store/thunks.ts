import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api";

export const searchThunk = createAsyncThunk("thunk/search", (query: string) =>
  api.search(query)
);
export const getAllCategoriesThunk = createAsyncThunk(
  "thunk/getAllCategories",
  () => api.getAllCategories()
);

export const getPopularCategoriesThunk = createAsyncThunk(
  "thunk/getPopularCategories",
  () => api.getPopularCategory()
);

export const getCategoryThunk = createAsyncThunk(
  "thunk/getCategory",
  (categoryId: string) => api.getCategory(categoryId)
);
