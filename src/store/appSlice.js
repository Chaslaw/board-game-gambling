import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
  name: 'start',
  initialState: {
    games: []
  },

  reducers: {
    addGame(state, action) {
    },
    updateGame(state, action){
    },
    finishGame(state, action){
    },
  }
});

export const appActions = appSlice.actions;

export default appSlice;