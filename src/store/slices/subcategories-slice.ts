import { createSlice } from "@reduxjs/toolkit";
import { getSubcategoriesThunk } from "../thunks";
import { GetSubcategoriesResponse } from "../../api/types/response/get-subcategories-response";

interface ISubcategoriesInitialState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  subcategories: GetSubcategoriesResponse | null;
}

const subcategoriesInitialState: ISubcategoriesInitialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  subcategories: null,
};

const subcategoriesSlice = createSlice({
  name: "subcategoriesReducer",
  initialState: subcategoriesInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSubcategoriesThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getSubcategoriesThunk.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.subcategories = action.payload.results;
      })
      .addCase(getSubcategoriesThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export const subcategoriesReducer = subcategoriesSlice.reducer;
export const subcategoriesActions = subcategoriesSlice.actions;
