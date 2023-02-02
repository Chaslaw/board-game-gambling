import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
  name: 'start',
  initialState: {
    games: []
  },

  reducers: {
    addGame(state, action) {
      state.games = [...state.games, action.payload]
    },
    updateGame(state, action){
    },
    finishGame(state, action){
    },
  }
});

export const appActions = appSlice.actions;

export default appSlice;