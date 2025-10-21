import React from 'react';
import { FormControlLabel, Switch, useTheme } from '@mui/material';
import { toggleTheme } from '../slice';
import { useAppSelector, useAppDispatch } from 'lib/hooks';

const ThemeToggleButton = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector(state => state.theme.mode);
  const theme = useTheme();
  const handleChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={themeMode === 'dark'}
          onChange={handleChange}
          name="themeModeSwitch"
        />
      }
      label="Dark Mode"
      sx={{
        '& .MuiFormControlLabel-label': {
          color: theme.palette.text.primary, // Dynamically set label text color
        },
      }}
    />
  );
};

export default ThemeToggleButton;
