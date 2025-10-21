
import { type FC, type ReactElement} from 'react';
import { useAppSelector } from 'lib/hooks';
import { getTheme } from 'modules/theme';

/** Components */
import { CssBaseline, Box, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Outlet } from 'react-router';

const GlobalLayout: FC = (): ReactElement => {
  const mode = useAppSelector(state => state.theme.mode); // Access the theme mode from Redux state
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          minHeight: '100dvh',
          display: 'flex',
          flexDirection: 'column',
          '&::-webkit-scrollbar': {
            width: 8,
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#f0f0f0',
            borderRadius: 4,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#bfbfbf',
            borderRadius: 4,
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#999',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default GlobalLayout