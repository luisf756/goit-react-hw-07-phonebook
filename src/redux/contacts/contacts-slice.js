import { createSlice } from "@reduxjs/toolkit";
import { fetchContact, addContact, deleteContact } from "./contacts-operations";

const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null,
}
  
const contactsSlice = createSlice({
    name: "contact",
    initialState: contactsInitialState,
    reducers: {
    },
    extraReducers: {
        [fetchContact.pending](state) {
            state.isLoading = true;
        },
        [fetchContact.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            state.items = payload;
        },
        [fetchContact.rejected](state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        },
        [addContact.pending](state) {
            state.isLoading = true;
        },
        [addContact.fulfilled](state, {payload}) {
            state.isLoading = false;
            state.error = null;
            state.items.push(payload);
            console.log("Payload ",payload);
        },
        [addContact.rejected](state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        },
        [deleteContact.pending](state) {
            state.isLoading = true;
        },
        [deleteContact.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(contact => contact.id === payload.id);
            state.items.splice(index, 1);
        },
        [deleteContact.rejected](state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        }
    }
});
export const contactsReducer = contactsSlice.reducer;