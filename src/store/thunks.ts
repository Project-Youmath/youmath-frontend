import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api";

export const getTasksThunk = createAsyncThunk(
  "thunk/getTasks",
  (query: string) => api.getTasks(query)
);
export const searchTasksThunk = createAsyncThunk(
  "thunk/searchTasks",
  ({ query, offset }: { query: string; offset: number }) =>
    api.searchTasks(query, offset)
);
export const searchCategoriesThunk = createAsyncThunk(
  "thunk/searchCategories",
  ({ query, offset }: { query: string; offset: number }) =>
    api.searchCategories(query, offset)
);
export const searchSubcategoriesThunk = createAsyncThunk(
  "thunk/searchSubcategories",
  ({ query, offset }: { query: string; offset: number }) =>
    api.searchSubcategories(query, offset)
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
