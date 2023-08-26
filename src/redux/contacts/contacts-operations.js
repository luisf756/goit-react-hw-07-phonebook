import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://64e18b68ab003735881841c8.mockapi.io";

export const fetchContact = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const data = await fetch(`${BASE_URL}/contacts`);
            const response = await data.json();
            return response;
        } catch (e) {
            thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
        console.log("Fetch ",contact);
        try {
            const data = await fetch(`${BASE_URL}/contacts`, {
              method: "POST",
              body: JSON.stringify({
                name: contact.name,
                phone: contact.phone  
              }),
              headers: {
                "content-type": "application/json",
              },
            });
            const response = await data.json();
            return response;
        } catch (e) {
            thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const data = await fetch(`${BASE_URL}/contacts/${contactId}`, {
                method: "DELETE",
            });
            const response = await data.json();
            return response;
        } catch (e) {
            thunkAPI.rejectWithValue(e.message);
        }
    }
);
