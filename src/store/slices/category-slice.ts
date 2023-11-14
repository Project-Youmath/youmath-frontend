import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryResource } from "../../api/types/resource/category-resource";
import { getCategoryThunk } from "../thunks";

interface ICategoryReducerInitialState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  category: CategoryResource | null;
}

const categoryInitialState: ICategoryReducerInitialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  category: null,
};

const categorySlice = createSlice({
  name: "categoryReducer",
  initialState: categoryInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoryThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(
        getCategoryThunk.fulfilled,
        (state, action: PayloadAction<CategoryResource>) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.category = action.payload;
        }
      )
      .addCase(getCategoryThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export const categoryReducer = categorySlice.reducer;
export const categoryActions = categorySlice.actions;
