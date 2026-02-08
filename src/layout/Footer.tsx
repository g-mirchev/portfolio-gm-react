import { type FC } from 'react';
import { Box, IconButton, Typography, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { profile } from 'data';

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ maxWidth: 'lg', mx: 'auto' }}
      >
        <Typography variant="body2" color="text.secondary">
          Built with React & Material-UI
        </Typography>

        <Stack direction="row" spacing={1}>
          <IconButton
            component="a"
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            size="small"
            sx={{
              color: 'text.secondary',
              '&:hover': { color: 'primary.main' },
            }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            component="a"
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            size="small"
            sx={{
              color: 'text.secondary',
              '&:hover': { color: 'primary.main' },
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
