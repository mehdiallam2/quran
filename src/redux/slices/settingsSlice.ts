import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark",
};

export const settingsSlice = createSlice({
  name: "settigs",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
