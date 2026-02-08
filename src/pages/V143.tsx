import { type FC, type ReactElement } from 'react';
import { Pager } from 'modules/v143';
import { Box } from '@mui/material';

const V143: FC = (): ReactElement => {
  return (
    <Box>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <></>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 300,
          pb: 4,
        }}
      >
        <Pager />
      </Box>
    </Box>
  );
};

export default V143;
