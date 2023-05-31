import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../server/api";

export const searchThunk = createAsyncThunk("thunk/search", (query: string) =>
  api.search(query)
);
export const getAllCategoriesThunk = createAsyncThunk(
  "thunk/getPopularCategories",
  () => api.getAllCategories()
);

export const getPopularCategoriesThunk = createAsyncThunk(
  "thunk/getPopularCategories",
  () => api.getPopularCategory()
);
