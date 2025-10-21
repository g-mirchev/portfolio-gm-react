import { createTheme } from '@mui/material/styles';
import type { PaletteMode } from './types';

export const getTheme = (mode: PaletteMode = 'light') =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#2ac5a6',
        light: '#54D0B7',
        dark: '#1D8974',
        contrastText: '#ffffff',
      },
      secondary: {
        main: mode === 'dark' ? '#34d399' : '#22c55e',
        light: mode === 'dark' ? '#5CDBAD' : '#4ED07E',
        dark: mode === 'dark' ? '#24936B' : '#178941',
        contrastText: '#000000de',
      },
      background: {
        default: mode === 'dark' ? '#121212' : '#f4f5f7',
        paper: mode === 'dark' ? '#333' : '#ffffff',
      },
      text: {
        primary: mode === 'dark' ? '#e0e0e0' : '#2e2e2e',
        secondary: mode === 'dark' ? '#b0bec5' : '#6d6d6d',
        disabled: mode === 'dark' ? '#8c8c8c' : '#bdbdbd',
      },
    },
    typography: {
      fontFamily: 'Inter, Space Grotesk, ui-sans-serif, system-ui, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial',
      h1: { 
        fontWeight: 800, 
        letterSpacing: '-0.02em' 
      },
      button: { 
        textTransform: 'none', 
        fontWeight: 600 
      },
      body1: {
        fontSize: '1rem',
        fontWeight: 400,
      },
    },
    components: {
      MuiButton: {
        defaultProps: { 
          disableElevation: true 
        },
        styleOverrides: { 
          root: { 
            borderRadius: 12, 
            textTransform: 'none' } 
        },
      },
      MuiCard: {
        styleOverrides: { 
          root: { 
            borderRadius: 20, 
            border: '1px solid', 
            borderColor: 'divider' } 
        },
      },
      MuiLink: {
        styleOverrides: { 
          root: { 
            textDecoration: 'none', 
            '&:hover': { 
              textDecoration: 'underline' 
            } 
          } 
        },
      },
    },
  });