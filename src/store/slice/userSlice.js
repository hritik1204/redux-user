import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../dummy data/dummydata";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: data,
  },
  reducers: {},
});

export default userSlice.reducer;
