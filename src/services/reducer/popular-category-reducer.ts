import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getPopularCategoriesThunk} from "../thunks/get-popular-categories-thunk";
import {PopularCategoryResource} from "../../api/types/resource/popular-category-resource";

interface IPopularCategoryReducerInitialState {
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    categories: PopularCategoryResource[],
}

const popularCategoryReducerInitialState:IPopularCategoryReducerInitialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    categories: []
}


const popularCategorySlice = createSlice({
    name: "popularCategoryReducer",
    initialState: popularCategoryReducerInitialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getPopularCategoriesThunk.pending,(state) => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
            })
            .addCase(getPopularCategoriesThunk.fulfilled, (state,action:PayloadAction<PopularCategoryResource[]>) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.categories = action.payload;
            })
            .addCase(getPopularCategoriesThunk.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
            })
    }
})

export const popularCategoryReducer = popularCategorySlice.reducer;
export const popularCategoryActions = popularCategorySlice.actions;