import { type FC, type ReactElement } from 'react';
import UnderConstruction from 'components/UnderConstruction';

const TicTacToe: FC = (): ReactElement => {
  return (
    <UnderConstruction
      title="Tic-Tac-Toe"
      message="A classic game is on its way. Check back soon!"
    />
  );
};

export default TicTacToe;
