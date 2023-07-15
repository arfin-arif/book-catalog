import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IBook {
  searchTerm: string;
}
const initialState: IBook = {
  searchTerm: "",
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBookData: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});
export const { setBookData } = bookSlice.actions;
export default bookSlice.reducer;
