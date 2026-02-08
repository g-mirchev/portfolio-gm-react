import { type FC, type ReactElement } from 'react';
import { Box } from '@mui/material';
import type { PagerTheme } from '../themes';

interface BeltClipProps {
  theme: PagerTheme;
}

const BeltClip: FC<BeltClipProps> = ({ theme }): ReactElement => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: -20,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 60,
        height: 25,
        backgroundColor: theme.clip.background,
        borderRadius: '0 0 4px 4px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        border: `1px solid ${theme.clip.border}`,
        borderTop: 'none',
      }}
    />
  );
};

export default BeltClip;
