import { type FC, type ReactElement } from 'react';
import { TicTacToeGrid } from 'modules/tictactoe';

const TicTacToe: FC = (): ReactElement => {
  return (
    <>
      <TicTacToeGrid />
    </>
  );
};

export default TicTacToe;
