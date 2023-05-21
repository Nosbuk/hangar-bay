import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Starship } from "@/types/Starship";

export interface SearchState {
  search: string;
  starships: Starship[];
}

const initialState: SearchState = {
  search: "",
  starships: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setStarships: (state, action: PayloadAction<Starship[]>) => {
      state.starships = action.payload;
    },
  },
});

export const { setSearch, setStarships } = searchSlice.actions;
export default searchSlice.reducer;
