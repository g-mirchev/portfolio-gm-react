import { type FC, type ReactElement } from 'react';
import { Grid, Paper } from '@mui/material';
import { TicTacToeTile } from '.';
import { useAppSelector } from 'lib/hooks';

const TicTacToeGrid: FC = (): ReactElement => {
  const board = useAppSelector((state) => state.ticTacToe.board);

  const rows = [board.slice(0, 3), board.slice(3, 6), board.slice(6, 9)];

  return (
    <Grid container columns={3} spacing={1}>
      {rows.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Grid key={rowIndex * 3 + colIndex} size={1}>
            <Paper>
              <TicTacToeTile status={cell} isSelected={false} onClick={() => {}} />
            </Paper>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default TicTacToeGrid;
