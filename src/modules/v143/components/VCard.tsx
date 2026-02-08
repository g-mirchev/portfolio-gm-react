import { type FC, type ReactElement } from 'react';
import { Pager, pinkTheme } from 'modules/pager';
import { Box } from '@mui/material';

const VCard: FC = (): ReactElement => {
  return (
    <Box>
      <Pager theme={pinkTheme} />
    </Box>
  );
};

export default VCard;
