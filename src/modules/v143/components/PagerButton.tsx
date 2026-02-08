import { type FC, type ReactElement } from 'react';
import { IconButton } from '@mui/material';

interface PagerButtonProps {
  icon: ReactElement;
  onClick: () => void;
  isOn: boolean;
  disabled?: boolean;
}

const PagerButton: FC<PagerButtonProps> = ({
  icon,
  onClick,
  isOn,
  disabled,
}): ReactElement => {
  return (
    <IconButton
      onClick={onClick}
      size="small"
      disabled={disabled}
      sx={{
        width: 28,
        height: 16,
        backgroundColor: isOn ? '#4a4a4a' : '#2a2a2a',
        borderRadius: 1,
        '&:hover': {
          backgroundColor: !disabled ? '#5a5a5a' : '#4a4a4a',
        },
        '&:disabled': {
          backgroundColor: '#2a2a2a',
        },
        boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
      }}
    >
      {icon}
    </IconButton>
  );
};

export default PagerButton;
