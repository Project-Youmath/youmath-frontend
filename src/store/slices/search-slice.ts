import { createSlice } from "@reduxjs/toolkit";
import { SearchResultResponse } from "../../api/types/response/search-response";
import {
  searchCategoriesThunk,
  searchSubcategoriesThunk,
  searchTasksThunk,
} from "../thunks";

interface ISearchInitialState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  tasks: SearchResultResponse[];
  countTasks: number;
  categories: SearchResultResponse[];
  countCategories: number;
  subcategories: SearchResultResponse[];
  countSubcategories: number;
  filter: number;
}

const searchInitialState: ISearchInitialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  tasks: [],
  countTasks: 0,
  categories: [],
  countCategories: 0,
  subcategories: [],
  countSubcategories: 0,
  filter: 0,
};

const searchSlice = createSlice({
  name: "search",
  initialState: searchInitialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
    searchReset: (state) => {
      state.categories = [];
      state.subcategories = [];
      state.tasks = [];
      state.countCategories = 0;
      state.countSubcategories = 0;
      state.countTasks = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchTasksThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(searchTasksThunk.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.tasks.push(...action.payload.results);
        state.countTasks = action.payload.count;
      })
      .addCase(searchTasksThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })

      .addCase(searchCategoriesThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(searchCategoriesThunk.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.categories.push(...action.payload.results);
        state.countCategories = action.payload.count;
      })
      .addCase(searchCategoriesThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })

      .addCase(searchSubcategoriesThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(searchSubcategoriesThunk.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.subcategories.push(...action.payload.results);
        state.countSubcategories = action.payload.count;
      })
      .addCase(searchSubcategoriesThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export const searchReducer = searchSlice.reducer;
export const searchActions = searchSlice.actions;
