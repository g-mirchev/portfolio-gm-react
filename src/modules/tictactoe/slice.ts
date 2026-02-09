import { createSlice } from '@reduxjs/toolkit';

interface TicTacToePlayer {
  symbol: 'X' | 'O' | null;
  score: number;
}

interface TicTacToeState {
  board: (null | 'X' | 'O')[][];
  player1: TicTacToePlayer;
  player2: TicTacToePlayer;
  winner: 'X' | 'O' | 'Draw' | null;
  isMultiplayer: boolean;
}

export const initialState: TicTacToeState = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
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
