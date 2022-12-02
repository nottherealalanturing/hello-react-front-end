import { configureStore } from "@reduxjs/toolkit";
import messages from "./messages/messageSlice";

const store = configureStore({
  reducer: {
    messages,
  },
});

export default store;
