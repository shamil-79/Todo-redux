import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const todoslice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    add: (state, action) => {
      return [...state, { id: state.length + 1, text: action.payload }];
    },

    update: (state, action) => {
      return  state.map((item) =>
        item.id === action.payload.id
          ? { ...item, text: action.payload.text }
          : item
       );
    },
    tododelete: (state, action) => {
      return  state.filter((item) => item.id !== action.payload);
    },
  },
});
export const { add, update,tododelete} = todoslice.actions;
export default todoslice.reducer;
