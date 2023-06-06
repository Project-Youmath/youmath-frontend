import { createSlice } from "@reduxjs/toolkit";
import { getTasksThunk } from "../thunks";
import { TaskResource } from "../../api/types/resource/task-resource";

interface IGetTasksReducerInitialState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  tasks: TaskResource[];
  countTasks: number;
}

const getTasksReducerInitialState: IGetTasksReducerInitialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  tasks: [],
  countTasks: 0,
};

const getTasksSlice = createSlice({
  name: "getTasksReducer",
  initialState: getTasksReducerInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTasksThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getTasksThunk.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.tasks = action.payload.results;
        state.countTasks = action.payload.count;
      })
      .addCase(getTasksThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export const getTasksReducer = getTasksSlice.reducer;
export const getTasksActions = getTasksSlice.actions;
