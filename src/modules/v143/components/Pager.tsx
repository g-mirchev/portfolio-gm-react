import { useState, type FC, type ReactElement } from 'react';
import { BeltClip, LCD, PagerButton, SpeakerGrille } from '.';
import { Box } from '@mui/material';
import { useTime } from 'hooks';
import {
  PowerSettingsNew as PowerSettingsNewIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';

const Pager: FC = (): ReactElement => {
  const [isOn, setIsOn] = useState(false);
  const time = useTime(1000);

  return (
    <Box
      sx={{
        display: 'inline-block',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: 280,
          height: 140,
          backgroundColor: '#1a1a1a',
          borderRadius: 3,
          padding: 1.5,
          boxShadow:
            '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
          border: '1px solid #333',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: -8,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 9,
          }}
        >
          <PagerButton
            icon={
              <PowerSettingsNewIcon
                sx={{ fontSize: 12, color: isOn ? '#4ade80' : '#c40303' }}
              />
            }
            onClick={() => setIsOn(!isOn)}
            isOn={isOn}
          />
          <PagerButton
            icon={
              <NotificationsIcon
                sx={{ fontSize: 12, color: isOn ? '#fff' : '#444' }}
              />
            }
            onClick={() => alert('New message received!')}
            isOn={isOn}
            disabled={!isOn}
          />
        </Box>
        <LCD displayText={time} isOn={isOn} />
        <SpeakerGrille />
        <BeltClip />
      </Box>
    </Box>
  );
};

export default Pager;
