import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      // return state.filter((song) => action.payload !== song);
      // Mutate the state directly.
      const index = state.indexOf(action.payload);
      index !== -1 && state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const songsReducer = songsSlice.reducer;
export const { addSong, removeSong } = songsSlice.actions;
