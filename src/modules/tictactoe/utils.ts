import type { TicTacToeWinner } from './types';

export const LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const checkWinner = (board: (null | 'X' | 'O')[]): TicTacToeWinner => {
  for (const [a, b, c] of LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a] as TicTacToeWinner;
    }
  }
  return board.includes(null) ? null : 'Draw';
};
