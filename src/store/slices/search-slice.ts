import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { searchThunk } from "../thunks";
// import { TaskResource } from "../../server/types/resource/task-resource";

interface ISearchReducerInitialState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  query: string;
  works: any;
}

const searchReducerInitialState: ISearchReducerInitialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  query: "",
  works: [],
};

const searchSlice = createSlice({
  name: "searchReducer",
  initialState: searchReducerInitialState,
  reducers: {
    changeQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(searchThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.works = action.payload;
      })
      .addCase(searchThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export const searchReducer = searchSlice.reducer;
export const searchActions = searchSlice.actions;
