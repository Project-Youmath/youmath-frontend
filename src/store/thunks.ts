import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api";

export const getTasksThunk = createAsyncThunk(
  "thunk/getTasks",
  (query: string) => api.getTasks(query)
);
export const getCategoryTasksThunk = createAsyncThunk(
  "thunk/getCategoryTasks",
  (sectionId: string) => api.getCategoryTasks(sectionId)
);
export const getSubcategoryTasksThunk = createAsyncThunk(
  "thunk/getSubcategoryTasks",
  (subsectionId: string) => api.getSubcategoryTasks(subsectionId)
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
  (taskId: string) => api.getTask(taskId)
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
  (query: string) => api.getSubcategory(query)
);
export const getSubcategoriesThunk = createAsyncThunk(
  "thunk/getSubcategories",
  (categoryId: string) => api.getSubcategories(categoryId)
);
