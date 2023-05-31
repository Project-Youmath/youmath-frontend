import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryResource } from "../../server/types/resource/category-resource";
import { getAllCategoriesThunk } from "../thunks";

interface IAllCategoryReducerInitialState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  categories: CategoryResource[];
}

const allCategoryReducerInitialState: IAllCategoryReducerInitialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  categories: [],
};

const allCategorySlice = createSlice({
  name: "allCategoryReducer",
  initialState: allCategoryReducerInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategoriesThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(
        getAllCategoriesThunk.fulfilled,
        (state, action: PayloadAction<CategoryResource[]>) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.categories = action.payload;
        }
      )
      .addCase(getAllCategoriesThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export const allCategoryReducer = allCategorySlice.reducer;
export const allCategoryActions = allCategorySlice.actions;
