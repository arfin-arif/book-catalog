import { createSlice } from "@reduxjs/toolkit";

interface IBook {
  status: boolean;
  priceRange: number;
}
const initialState: IBook = {
  status: false,
  priceRange: 150,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
});

export default bookSlice.reducer;
