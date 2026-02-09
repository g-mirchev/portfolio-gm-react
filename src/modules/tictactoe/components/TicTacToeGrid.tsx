import { type FC, type ReactElement } from 'react';
import { Grid, Paper } from '@mui/material';
import { TicTacToeTile } from '.';

const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const TicTacToeGrid: FC = (): ReactElement => {
  return (
    <Grid container columns={3} spacing={1}>
      <Grid size={1}>
        <Paper>
          <TicTacToeTile />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TicTacToeGrid;
