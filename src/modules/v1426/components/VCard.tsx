import { useEffect, useRef, useState, type FC, type ReactElement } from 'react';
import { Pager, pinkTheme } from 'modules/pager';
import { Box, Paper, Typography } from '@mui/material';
import { vcardtitle, pagerCodes } from 'data/vcontent';

const VCard: FC = (): ReactElement => {
  const [pagerMessages, setPagerMessages] = useState<string[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const onPowerClick = (isOn: boolean) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (isOn) {
      timerRef.current = setTimeout(() => {
        setPagerMessages(pagerCodes);
      }, 5000);
    } else {
      setPagerMessages([]);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const wavyMask = `
    radial-gradient(circle at 0 50%, transparent 8px, #000 8.5px) 0 calc(50% - 15px) / 100% 30px repeat-y,
    radial-gradient(circle at 100% 50%, transparent 8px, #000 8.5px) 0 calc(50% - 15px) / 100% 30px repeat-y,
    radial-gradient(circle at 50% 0, transparent 8px, #000 8.5px) calc(50% - 15px) 0 / 30px 100% repeat-x,
    radial-gradient(circle at 50% 100%, transparent 8px, #000 8.5px) calc(50% - 15px) 0 / 30px 100% repeat-x
  `;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          mb: 4,
          backgroundColor: '#ff89cade',
          width: { xs: '100%', sm: '600px' },
          maxWidth: '600px',
          height: { xs: 'auto', sm: '800px' },
          minHeight: '600px',
          py: { xs: 4, sm: 0 },
        }}
      >
        <Paper
          elevation={9}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            p: 3,
            mb: 4,
            backgroundColor: '#f7d5ee',
            width: { xs: '90%', sm: '400px' },
            maxWidth: '400px',
            height: '200px',
            borderRadius: 2,
            WebkitMask: wavyMask,
            mask: wavyMask,
            WebkitMaskComposite: 'source-in',
            maskComposite: 'intersect',
          }}
        >
          {vcardtitle.map((line, index) => (
            <Typography
              key={`${index}-vcardtitle`}
              sx={{
                fontFamily: 'Bad Script, cursive',
                fontSize: 26,
                fontWeight: 600,
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
