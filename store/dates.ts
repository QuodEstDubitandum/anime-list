import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  currentDay: string;
  firstDayOfWeek: string;
  lastDayOfWeek: string;
  firstDayOfMonth: string;
  lastDayOfMonth: string;
} = {
  currentDay: new Date().toISOString(),
  firstDayOfWeek: "",
  lastDayOfWeek: "",
  firstDayOfMonth: "",
  lastDayOfMonth: "",
};

const dateSlice = createSlice({
  name: "dates",
  initialState,
  reducers: {
    setCurrentDay: (state, action: PayloadAction<string | undefined>) => {
      if (action.payload) {
        state.currentDay = action.payload;
      }
    },
    setFirstDayOfWeek: (state, action: PayloadAction<string>) => {
      state.firstDayOfWeek = action.payload;
    },
    setLastDayOfWeek: (state, action: PayloadAction<string>) => {
      state.lastDayOfWeek = action.payload;
    },
    setFirstDayOfMonth: (state, action: PayloadAction<string>) => {
      state.firstDayOfMonth = action.payload;
    },
    setLastDayOfMonth: (state, action: PayloadAction<string>) => {
      state.lastDayOfMonth = action.payload;
    },
  },
});

export const {
  setCurrentDay,
  setFirstDayOfWeek,
  setLastDayOfWeek,
  setFirstDayOfMonth,
  setLastDayOfMonth,
} = dateSlice.actions;
export default dateSlice.reducer;
