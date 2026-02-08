import type { FC, ReactElement } from 'react';
import { Box } from '@mui/material';

interface LCDProps {
  displayText: string;
  isOn: boolean;
}

const LCD: FC<LCDProps> = ({ displayText, isOn }): ReactElement => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 70,
        backgroundColor: isOn ? '#a8b5a0' : '#6b7265',
        borderRadius: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.3)',
        border: '3px solid #2d2d2d',
        mt: 1,
      }}
    >
      {!!isOn && (
        <Box
          sx={{
            fontFamily: '"DSEG7 Classic"',
            fontSize: 28,
            fontWeight: 700,
            color: '#2d3a29',
            letterSpacing: 4,
            textShadow: '0 0 2px rgba(45,58,41,0.5)',
            opacity: 1,
          }}
        >
          {displayText}
        </Box>
      )}

      <> </>
    </Box>
  );
};

export default LCD;
