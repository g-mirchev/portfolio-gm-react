import type { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import type { PagerTheme } from '../themes';

interface LCDProps {
  displayText: string;
  isOn: boolean;
  theme: PagerTheme;
}

const LCD: FC<LCDProps> = ({ displayText, isOn, theme }): ReactElement => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 70,
        backgroundColor: isOn ? theme.lcd.backgroundOn : theme.lcd.backgroundOff,
        borderRadius: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.3)',
        border: `3px solid ${theme.lcd.border}`,
        mt: 1,
      }}
    >
      {!!isOn && (
        <Box
          sx={{
            fontFamily: '"DSEG7 Classic"',
            fontSize: 28,
            fontWeight: 700,
            color: theme.lcd.text,
            letterSpacing: 4,
            textShadow: `0 0 2px ${theme.lcd.textShadow}`,
            opacity: 1,
          }}
        >
          {displayText}
        </Box>
      )}
    </Box>
  );
};

export default LCD;
