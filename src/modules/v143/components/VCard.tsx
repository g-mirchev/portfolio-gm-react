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
    <Box>
      <Paper
        elevation={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          mb: 4,
          backgroundColor: '#f800c2de', // Dark pink background
          width: '600px',
          height: '800px',
        }}
      >
        <Paper
          elevation={9}
          sx={{
            display: 'inline-block',
            textAlign: 'center',
            p: 3,
            mb: 4,
            backgroundColor: '#f7d5ee',
            width: '400px',
            height: '200px',
            borderRadius: 2,
            mask: `
              radial-gradient(circle at 0 50%, transparent 8px, #000 8.5px) 0 calc(50% - 15px) / 100% 30px repeat-y,
              radial-gradient(circle at 100% 50%, transparent 8px, #000 8.5px) 0 calc(50% - 15px) / 100% 30px repeat-y,
              radial-gradient(circle at 50% 0, transparent 8px, #000 8.5px) calc(50% - 15px) 0 / 30px 100% repeat-x,
              radial-gradient(circle at 50% 100%, transparent 8px, #000 8.5px) calc(50% - 15px) 0 / 30px 100% repeat-x
            `,
            maskComposite: 'intersect',
            WebkitMask: `
              radial-gradient(circle at 0 50%, transparent 8px, #000 8.5px) 0 calc(50% - 15px) / 100% 30px repeat-y,
              radial-gradient(circle at 100% 50%, transparent 8px, #000 8.5px) 0 calc(50% - 15px) / 100% 30px repeat-y,
              radial-gradient(circle at 50% 0, transparent 8px, #000 8.5px) calc(50% - 15px) 0 / 30px 100% repeat-x,
              radial-gradient(circle at 50% 100%, transparent 8px, #000 8.5px) calc(50% - 15px) 0 / 30px 100% repeat-x
            `,
            WebkitMaskComposite: 'source-in',
          }}
        >
          {vcardtitle.map((line, index) => (
            <Typography
              key={`${index}-vcardtitle`}
              sx={{
                fontFamily: 'Bad Script, cursive',
                fontSize: 26,
                fontWeight: 550,
                color: '#b41414',
              }}
            >
              {line}
            </Typography>
          ))}
        </Paper>
        <Pager theme={pinkTheme} messages={pagerMessages} onPowerClick={onPowerClick} />
      </Paper>
    </Box>
  );
};

export default VCard;
