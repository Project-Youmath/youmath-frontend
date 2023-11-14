import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getSubcategoryThunk } from "../thunks";
import { SubcategoryResource } from "../../api/types/resource/subcategory-resource";

interface ISubcategoryInitialState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  subcategory: SubcategoryResource | null;
}

const subcategoryInitialState: ISubcategoryInitialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  subcategory: null,
};

const subcategorySlice = createSlice({
  name: "subcategoryReducer",
  initialState: subcategoryInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSubcategoryThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(
        getSubcategoryThunk.fulfilled,
        (state, action: PayloadAction<SubcategoryResource>) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.subcategory = action.payload;
        }
      )
      .addCase(getSubcategoryThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export const subcategoryReducer = subcategorySlice.reducer;
export const subcategoryActions = subcategorySlice.actions;
