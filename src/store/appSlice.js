import { createSlice } from "@reduxjs/toolkit";

const _helperUpdateGame = (games, payload) => {
  console.log(payload)
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

const _helperFinishGame = (games, id) => {
  const updatedGames = games.map((item) => {
    if(item.id === id){
      return {
        ...item, 
        finished: true
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
      state.games = _helperFinishGame(state.games, action.payload)
    }
  }
});

export const appActions = appSlice.actions;

export default appSlice;