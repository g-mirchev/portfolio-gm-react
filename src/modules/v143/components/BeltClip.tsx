import { type FC, type ReactElement } from 'react';
import { Box } from '@mui/material';

const BeltClip: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: -20,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 60,
        height: 25,
        backgroundColor: '#3d3d3d',
        borderRadius: '0 0 4px 4px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        border: '1px solid #4a4a4a',
        borderTop: 'none',
      }}
    />
  );
};

export default BeltClip;
