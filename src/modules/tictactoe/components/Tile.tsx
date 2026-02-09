import { type FC, type ReactElement } from 'react';
import { IconButton } from '@mui/material';
import {
  Close as CloseIcon,
  RadioButtonUnchecked as RadioButtonUncheckedIcon,
} from '@mui/icons-material';

interface TicTacToeTileProps {
  status: 'X' | 'O' | null;
  isSelected: boolean;
  onClick: () => void;
}

const TicTacToeTile: FC<TicTacToeTileProps> = ({ status, isSelected, onClick }): ReactElement => {
  return (
    <IconButton onClick={onClick} color={isSelected ? 'primary' : 'default'}>
      {status === 'X' ? <CloseIcon /> : status === 'O' ? <RadioButtonUncheckedIcon /> : null}
    </IconButton>
  );
};

export default TicTacToeTile;
