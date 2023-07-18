import { createSlice } from "@reduxjs/toolkit";
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {register, refreshUser} from './authOperations'

const persiststConfig = {
    key: 'auth',
    storage,
    whiteList: ['token'],
}

const initialState = {
    user:  null,
    token: null,
    error: null,
    isLoading: false,
    isRefreshing: true,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder.addCase(register.pending, state => {
            state.isLoading = true;
            state.error = null;
        }).addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.user = action.payload.user;
            state.token = action.payload.token;
        }).addCase(register.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.user = null;
            state.token = null;
        }).addCase(refreshUser.pending, state => {
            state.isRefreshing = true;
            state.isLoading = true;
            state.error = null;
        }).addCase(refreshUser.fulfilled, (state, action) => {
            state.isRefreshing = false;
            state.isLoading = false;
        }).addCase(refreshUser.rejected, (state, action) => {
            state.isRefreshing = false;
            state.isLoading = false;
            state.error = action.payload;
        })
    },
});

const persistedReducer = persistReducer(persiststConfig, authSlice.reducer)
export default persistedReducer ;