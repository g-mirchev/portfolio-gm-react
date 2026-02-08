import type { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import type { PagerTheme } from '../themes';

interface SpeakerGrilleProps {
  theme: PagerTheme;
}

const SpeakerGrille: FC<SpeakerGrilleProps> = ({ theme }): ReactElement => {
  return (
    <Box
      sx={{
        mt: 1,
        display: 'flex',
        justifyContent: 'center',
        gap: 0.5,
      }}
    >
      {[...Array(5)].map((_, i) => (
        <Box
          key={`${i}-grille`}
          sx={{
            width: 3,
            height: 20,
            backgroundColor: theme.grille.background,
            borderRadius: 1,
          }}
        />
      ))}
    </Box>
  );
};

export default SpeakerGrille;
