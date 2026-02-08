import { useMemo, useState, type FC, type ReactElement } from 'react';
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
  messages?: string[];
  onPowerClick?: (isOn: boolean) => void;
}

const PAGER_STATES = {
  TIME: 'TIME',
  NOTIFY: 'NOTIFY',
  MESSAGE: 'MESSAGE',
};

const Pager: FC<PagerProps> = ({
  theme = classicTheme,
  messages,
  onPowerClick,
}): ReactElement => {
  const [isOn, setIsOn] = useState(false);
  const [isViewingMessage, setIsViewingMessage] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const time = useTime(1000);

  const pagerState = useMemo(() => {
    if (isViewingMessage) return PAGER_STATES.MESSAGE;
    if (messages && messages.length > 0) return PAGER_STATES.NOTIFY;
    return PAGER_STATES.TIME;
  }, [messages, isViewingMessage]);

  const notificationText = useMemo(() => {
    return messages && messages.length > 0
      ? `${messages.length} Page${messages.length > 1 ? 's' : ''}`
      : '';
  }, [messages]);

  const messageText = useMemo(() => {
    return messages && messages.length > 0
      ? `${currentMessageIndex + 1}: ${messages[currentMessageIndex]}`
      : '';
  }, [messages, currentMessageIndex]);

  const displayText = useMemo(() => {
    if (!isOn) return '';
    if (pagerState === PAGER_STATES.NOTIFY) return notificationText;
    if (pagerState === PAGER_STATES.MESSAGE) return messageText;
    return '';
  }, [isOn, pagerState, notificationText, messageText]);

  const handlePowerClick = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (!newState) {
      setIsViewingMessage(false);
    }
    onPowerClick?.(newState);
  };

  const handleReceiverClick = () => {
    if (pagerState === PAGER_STATES.NOTIFY) {
      setIsViewingMessage(true);
      setCurrentMessageIndex(0);
    } else if (pagerState === PAGER_STATES.MESSAGE) {
      if (messages) {
        const nextIndex =
          messages.length > currentMessageIndex + 1
            ? currentMessageIndex + 1
            : 0;
        setCurrentMessageIndex(nextIndex);
      }
    }
  };

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
                  fontSize: 14,
                  color: isOn ? theme.icon.powerOn : theme.icon.powerOff,
                }}
              />
            }
            onClick={handlePowerClick}
            isOn={isOn}
            theme={theme}
          />
          <PagerButton
            icon={
              <NotificationsIcon
                sx={{
                  fontSize: 14,
                  color: isOn
                    ? theme.icon.notificationOn
                    : theme.icon.notificationOff,
                }}
              />
            }
            onClick={handleReceiverClick}
            hasNotification={pagerState === PAGER_STATES.NOTIFY}
            isOn={isOn}
            disabled={!isOn}
            theme={theme}
          />
        </Box>
        <LCD displayText={displayText || time} isOn={isOn} theme={theme} />
        <SpeakerGrille theme={theme} />
        <BeltClip theme={theme} />
      </Box>
    </Box>
  );
};

export default Pager;
