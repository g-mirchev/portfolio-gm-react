import { type FC } from 'react';
import { Paper, Typography, Divider, Box } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

interface UnderConstructionProps {
  title?: string;
  message?: string;
}

const UnderConstruction: FC<UnderConstructionProps> = ({
  title = 'Under Construction',
  message = 'This page is coming soon!',
}) => {
  return (
    <Paper
      sx={{
        mx: 'auto',
        my: { xs: 2, sm: 3 },
        p: { xs: 3, sm: 4 },
        textAlign: 'center',
        maxWidth: 500,
      }}
    >
      <Box sx={{ color: 'primary.main', mb: 2 }}>
        <ConstructionIcon sx={{ fontSize: 64 }} />
      </Box>
      <Typography variant="h4" gutterBottom fontWeight={600}>
        {title}
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="body1" color="text.secondary">
        {message}
      </Typography>
    </Paper>
  );
};

export default UnderConstruction;
