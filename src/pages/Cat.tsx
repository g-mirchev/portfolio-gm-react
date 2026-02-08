import { type FC, type ReactElement } from 'react';
import { Typography, Box } from '@mui/material';
import { CatCard } from 'modules/cat';

const Cat: FC = (): ReactElement => {
  return (
    <Box>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        fontWeight={600}
        textAlign="center"
      >
        Cat Finder
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        textAlign="center"
        sx={{ mb: 3 }}
      >
        Discover random adorable cats!
      </Typography>
      <CatCard />
    </Box>
  );
};

export default Cat;
