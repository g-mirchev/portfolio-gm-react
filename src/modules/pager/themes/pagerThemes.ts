export interface PagerTheme {
  name: string;
  body: {
    background: string;
    border: string;
  };
  lcd: {
    backgroundOn: string;
    backgroundOff: string;
    border: string;
    text: string;
    textShadow: string;
  };
  button: {
    notificationReceived: string;
    backgroundOn: string;
    backgroundOff: string;
    hover: string;
  };
  icon: {
    powerOn: string;
    powerOff: string;
    notificationOn: string;
    notificationOff: string;
  };
  grille: {
    background: string;
  };
  clip: {
    background: string;
    border: string;
  };
}

export const classicTheme: PagerTheme = {
  name: 'classic',
  body: {
    background: '#1a1a1a',
    border: '#333',
  },
  lcd: {
    backgroundOn: '#a8b5a0',
    backgroundOff: '#6b7265',
    border: '#2d2d2d',
    text: '#2d3a29',
    textShadow: 'rgba(45,58,41,0.5)',
  },
  button: {
    notificationReceived: '#ffd900',
    backgroundOn: '#4a4a4a',
    backgroundOff: '#2a2a2a',
    hover: '#5a5a5a',
  },
  icon: {
    powerOn: '#4ade80',
    powerOff: '#c40303',
    notificationOn: '#fff',
    notificationOff: '#444',
  },
  grille: {
    background: '#2d2d2d',
  },
  clip: {
    background: '#3d3d3d',
    border: '#4a4a4a',
  },
};

export const pinkTheme: PagerTheme = {
  name: 'pink',
  body: {
    background: '#2d1a2d',
    border: '#4a2a4a',
  },
  lcd: {
    backgroundOn: '#f5b8d0',
    backgroundOff: '#8b6b7a',
    border: '#3d2a3d',
    text: '#6b2a4a',
    textShadow: 'rgba(107,42,74,0.5)',
  },
  button: {
    notificationReceived: '#ffd900',
    backgroundOn: '#5a3a5a',
    backgroundOff: '#3a2a3a',
    hover: '#6a4a6a',
  },
  icon: {
    powerOn: '#4ade80',
    powerOff: '#8b2252',
    notificationOn: '#fff',
    notificationOff: '#5a3a5a',
  },
  grille: {
    background: '#3d2a3d',
  },
  clip: {
    background: '#4a3a4a',
    border: '#5a4a5a',
  },
};

export const pagerThemes: Record<string, PagerTheme> = {
  classic: classicTheme,
  pink: pinkTheme,
};
