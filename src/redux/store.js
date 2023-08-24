import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contacts-slice";
import { filterReducer } from "./contacts/contacts-filter";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    }
});