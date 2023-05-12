import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import teamReducer from "./slice/teamSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    team: teamReducer,
  },
});
