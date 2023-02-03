import { createSlice } from "@reduxjs/toolkit";

const _helperUpdateGame = (games, payload) => {
  const updatedGames = games.map((item) => {
    if(item.id === payload.id){
      return {
        ...payload,
        updated: true
      }; // update only targeted one
    }
    return item; // all other unchanged
  });
  return updatedGames;
};


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
      state.games = _helperUpdateGame(state.games, action.payload)
    },
    finishGame(state, action){
    },
  }
});

export const appActions = appSlice.actions;

export default appSlice;