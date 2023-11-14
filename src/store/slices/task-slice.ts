import { createSlice } from "@reduxjs/toolkit";
import { getTaskThunk } from "../thunks";
import { TaskResource } from "../../api/types/resource/task-resource";

interface IGetTaskReducerInitialState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  task: TaskResource | null;
}

const getTaskReducerInitialState: IGetTaskReducerInitialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  task: null,
};

const getTaskSlice = createSlice({
  name: "getTaskReducer",
  initialState: getTaskReducerInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTaskThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getTaskThunk.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.task = action.payload;
      })
      .addCase(getTaskThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export const getTaskReducer = getTaskSlice.reducer;
export const getTaskActions = getTaskSlice.actions;
