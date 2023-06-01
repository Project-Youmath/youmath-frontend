import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api";

export const getTasksThunk = createAsyncThunk(
  "thunk/getTasks",
  (query: string) => api.getTasks(query)
);
export const getTaskThunk = createAsyncThunk(
  "thunk/getTask",
  (taskId: string) => api.getTasks(taskId)
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
export const getSubcategoryThunk = createAsyncThunk(
  "thunk/getSubcategory",
  (subcategoryId: string) => api.getSubcategory(subcategoryId)
);
