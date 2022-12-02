/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const messagesAPI = "http://localhost:3000/api/v1/messages/";
const initialState = [];

export const fetchMessage = createAsyncThunk(
  "messages/getMessage",
  async () => {
    const res = await fetch(messagesAPI);
    const data = await res.json();

    return data;
  }
);

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  extraReducers: {
    [fetchMessage.fulfilled]: (state, action) => action.payload,
  },
});

export default messagesSlice.reducer;
