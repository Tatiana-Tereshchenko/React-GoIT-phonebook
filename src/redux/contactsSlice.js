import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import {CONTACTS} from './constants'


const contactsSlice = createSlice({
    name: CONTACTS,
    initialState: {
    contacts: [],
    isLoading: false,
    error: null,
    },
    extraReducers: {
    [fetchContacts.pending]: (state) => {
        state.isLoading = true;
        },
        
    [fetchContacts.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
        },
    
    [fetchContacts.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        },
    
    [addContact.pending]: (state) => {
        state.isLoading = true;
        },
    
    [addContact.fulfilled] (state, action)  {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
        },
    
    [addContact.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        },
    
    [deleteContact.pending]: (state) => {
        state.isLoading = true;
        },
    
    [deleteContact.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.error = null;
        const optionId = state.contacts.findIndex(option => option.id === action.payload.id)
        state.contacts.splice(optionId, 1);  
        },
    
    [deleteContact.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    },
    },
});


export const contactsReducer = contactsSlice.reducer;