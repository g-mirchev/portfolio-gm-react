export type TicTacToeSymbol = 'X' | 'O' | null;

export type TicTacToeBoard = TicTacToeSymbol[];

export interface TicTacToePlayer {
  symbol: TicTacToeSymbol;
  score: number;
}

export type TicTacToeWinner = TicTacToeSymbol | 'Draw';
