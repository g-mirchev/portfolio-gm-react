import { useState, type FC, type ReactElement } from 'react';
import { Pager, pinkTheme } from 'modules/pager';
import { Box, Paper, Typography } from '@mui/material';
import { vcardtitle } from 'data/vcontent';

const VCard: FC = (): ReactElement => {
  const [pagerMessages, setPagerMessages] = useState<string[]>([]);

  const onPowerClick = (isOn: boolean) => {
    if (isOn) {
      setTimeout(() => {
        setPagerMessages(['143']);
      }, 5000);
    } else {
      setPagerMessages([]);
    }
  };

  return (
    <Box sx={{ perspective: '1000px' }}>
      <Paper sx={{ textAlign: 'center', mb: 4 }}>
        {vcardtitle.map((line, index) => (
          <Typography key={`${index}-vcardtitle`}>{line}</Typography>
        ))}
      </Paper>
      <Pager
        theme={pinkTheme}
        messages={pagerMessages}
        onPowerClick={onPowerClick}
      />
    </Box>
  );
};

export default VCard;
