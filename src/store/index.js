import { configureStore, createSlice } from "@reduxjs/toolkit";

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
    builder.addCase(movieSlice.actions.reset.toString(), (state, action) => {
      return [];
    });
  },
});

const movieSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      index !== -1 && state.splice(index, 1);
    },
    reset(state, action) {
      return [];
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: movieSlice.reducer,
  },
});

export { store };

export const { addSong, removeSong } = songsSlice.actions;

export const { addMovie, removeMovie, reset } = movieSlice.actions;
