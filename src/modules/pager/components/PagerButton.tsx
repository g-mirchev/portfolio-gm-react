import { type FC, type ReactElement } from 'react';
import { IconButton } from '@mui/material';
import type { PagerButtonTheme } from '../themes';

interface PagerButtonProps {
  icon: ReactElement;
  onClick: () => void;
  isOn: boolean;
  disabled?: boolean;
  buttonTheme: PagerButtonTheme;
}

const PagerButton: FC<PagerButtonProps> = ({
  icon,
  onClick,
  isOn,
  disabled,
  buttonTheme,
}): ReactElement => {
  return (
    <IconButton
      onClick={onClick}
      size="small"
      disabled={disabled}
      disableRipple
      sx={{
        width: 48,
        height: 18,
        backgroundColor: isOn ? buttonTheme.backgroundOn : buttonTheme.backgroundOff,
        color: isOn ? buttonTheme.iconOn : buttonTheme.iconOff,
        borderRadius: 1,
        '&:hover': {
          backgroundColor: !disabled ? buttonTheme.hover : buttonTheme.backgroundOff,
        },
        '&:active:not(:disabled)': {
          transform: 'translateY(2px)',
          boxShadow: '0 0px 2px rgba(0,0,0,0.5)',
        },
        '&:disabled': {
          backgroundColor: buttonTheme.backgroundOff,
        },
        transition: 'transform 0.1s ease, box-shadow 0.1s ease',
        boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
      }}
    >
      {icon}
    </IconButton>
  );
};

export default PagerButton;
