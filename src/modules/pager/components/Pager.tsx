import { useState, type FC, type ReactElement } from 'react';
import { BeltClip, LCD, PagerButton, SpeakerGrille } from '.';
import { Box } from '@mui/material';
import { useTime } from 'hooks';
import {
  PowerSettingsNew as PowerSettingsNewIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import { classicTheme, type PagerTheme } from '..';

interface PagerProps {
  theme?: PagerTheme;
}

const Pager: FC<PagerProps> = ({ theme = classicTheme }): ReactElement => {
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
          backgroundColor: theme.body.background,
          borderRadius: 3,
          padding: 1.5,
          boxShadow:
            '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
          border: `1px solid ${theme.body.border}`,
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
                sx={{
                  fontSize: 12,
                  color: isOn ? theme.icon.powerOn : theme.icon.powerOff,
                }}
              />
            }
            onClick={() => setIsOn(!isOn)}
            isOn={isOn}
            theme={theme}
          />
          <PagerButton
            icon={
              <NotificationsIcon
                sx={{
                  fontSize: 12,
                  color: isOn
                    ? theme.icon.notificationOn
                    : theme.icon.notificationOff,
                }}
              />
            }
            onClick={() => alert('New message received!')}
            isOn={isOn}
            disabled={!isOn}
            theme={theme}
          />
        </Box>
        <LCD displayText={time} isOn={isOn} theme={theme} />
        <SpeakerGrille theme={theme} />
        <BeltClip theme={theme} />
      </Box>
    </Box>
  );
};

export default Pager;
