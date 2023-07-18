import { createSlice } from "@reduxjs/toolkit";
import { FILTER } from "./constants";

export const filterSlice = createSlice({
    name: FILTER,
    initialState: '',
    reducers: {
        setContactsFilter (state, action) {
            return (state = action.payload);
        },
    },
    
});

export const { setContactsFilter } = filterSlice.actions;
export const filtersReducer =  filterSlice.reducer;
