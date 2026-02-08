import { type FC, type ReactElement } from 'react';
import { IconButton } from '@mui/material';
import type { PagerTheme } from '../themes';

interface PagerButtonProps {
  icon: ReactElement;
  onClick: () => void;
  isOn: boolean;
  disabled?: boolean;
  theme: PagerTheme;
  hasNotification?: boolean;
}

const PagerButton: FC<PagerButtonProps> = ({
  icon,
  onClick,
  isOn,
  disabled,
  theme,
  hasNotification,
}): ReactElement => {
  const getBackgroundColor = () => {
    if (hasNotification) return theme.button.notificationReceived;
    if (isOn) return theme.button.backgroundOn;
    return theme.button.backgroundOff;
  };

  return (
    <IconButton
      onClick={onClick}
      size="small"
      disabled={disabled}
      sx={{
        width: 28,
        height: 16,
        backgroundColor: getBackgroundColor(),
        borderRadius: 1,
        '&:hover': {
          backgroundColor: !disabled
            ? theme.button.hover
            : theme.button.backgroundOn,
        },
        '&:disabled': {
          backgroundColor: theme.button.backgroundOff,
        },
        boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
      }}
    >
      {icon}
    </IconButton>
  );
};

export default PagerButton;
