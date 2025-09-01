import { createSlice } from '@reduxjs/toolkit';
import type { PaletteMode } from './types';

interface ThemeState {
  mode: PaletteMode;
}

const initialState: ThemeState = {
  mode: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

/**
 * Export the reducer for use in Redux Store
 * And the Actions for use in React Components
 */
export const {
  reducer: themeReducer,
  actions: { toggleTheme },
} = themeSlice;
