import { createSlice } from '@reduxjs/toolkit';

import type { TicTacToePlayer, TicTacToeWinner, TicTacToeBoard } from '.';

interface TicTacToeState {
  board: TicTacToeBoard;
  player1: TicTacToePlayer;
  player2: TicTacToePlayer;
  winner: TicTacToeWinner;
  isMultiplayer: boolean;
}

export const initialState: TicTacToeState = {
  board: Array(9).fill(null),
  player1: { symbol: null, score: 0 },
  player2: { symbol: null, score: 0 },
  winner: null,
  isMultiplayer: false,
};

export const ticTacToeSlice = createSlice({
  name: 'ticTacToe',
  initialState,
  reducers: {},
});

/**
 * Export the reducer for use in Redux Store
 * And the Actions for use in React Components
 */
export const {
  reducer: ticTacToeReducer,
  actions: {},
} = ticTacToeSlice;
