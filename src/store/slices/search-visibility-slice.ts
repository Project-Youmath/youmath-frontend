import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISearchVisibilityReducerState {
  isVisible: boolean;
}

const inittialState: ISearchVisibilityReducerState = {
  isVisible: false,
};

const searchVisibilitySlice = createSlice({
  name: "SearchVisibility",
  initialState: inittialState,
  reducers: {
    changeVisible: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload;
    },
  },
});

export const searchVisibilityReducer = searchVisibilitySlice.reducer;
export const searchVisibleActions = searchVisibilitySlice.actions;
