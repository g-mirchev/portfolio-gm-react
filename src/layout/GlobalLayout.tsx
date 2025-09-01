
import { type FC, type ReactElement} from 'react';
import { useAppSelector } from 'lib/hooks';
import { getTheme } from 'modules/theme';

/** Components */
import { ThemeProvider } from '@mui/material/styles';
import { Outlet } from 'react-router';

const GlobalLayout: FC = (): ReactElement => {
  const mode = useAppSelector(state => state.theme.mode); // Access the theme mode from Redux state
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <Outlet />
    </ThemeProvider>
  );
}

export default GlobalLayout