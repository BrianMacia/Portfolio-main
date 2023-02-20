import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  email: "email",
  initialState: null,
  reducers: {
    setMessage: (state, action) => action.payload,
  },
});

export const { setMessage } = messageSlice.actions;

export default messageSlice.reducer;
