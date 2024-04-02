import { createSlice } from "@reduxjs/toolkit";
import { Surah } from "types/surahs";

const initialState: Surah[] = [];

export const recentlyReadSlice = createSlice({
  name: "recentlyRead",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    clear: () => {
      return [];
    },
  },
});

export const { add, clear } = recentlyReadSlice.actions;
export default recentlyReadSlice.reducer;
