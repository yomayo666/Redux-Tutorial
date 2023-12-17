import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getUserById } from "./user.actions";
import { InitialStateUser, Iuser } from "../../typs/user.types";

const initialState: InitialStateUser = {
    isLoading: false,
    error: null,
    user: {} as Iuser
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(getUserById
            .pending, state => {
            state.isLoading = true
        })
        .addCase(getUserById
            .fulfilled, (state, action: PayloadAction<Iuser>) => {
            state.isLoading = false
            state.user = action.payload
        })
        .addCase(getUserById
            .rejected, (state,action: any) => {
            state.isLoading = false
            state.error = action.payload.error
            state.user = {} as Iuser
        })
    }

})