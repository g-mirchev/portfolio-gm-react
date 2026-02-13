export interface PagerButtonTheme {
  backgroundOn: string;
  backgroundOff: string;
  hover: string;
  iconOn: string;
  iconOff: string;
}

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
  powerButton: PagerButtonTheme;
  navButton: PagerButtonTheme;
  receiverButton: PagerButtonTheme;
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
  powerButton: {
    backgroundOn: '#4a4a4a',
    backgroundOff: '#2a2a2a',
    hover: '#5a5a5a',
    iconOn: '#4ade80',
    iconOff: '#c40303',
  },
  navButton: {
    backgroundOn: '#4a4a4a',
    backgroundOff: '#2a2a2a',
    hover: '#5a5a5a',
    iconOn: '#ffd900',
    iconOff: '#c40303',
  },
  receiverButton: {
    backgroundOn: '#4ade80',
    backgroundOff: '#2a2a2a',
    hover: '#3fb36a',
    iconOn: '#fab906',
    iconOff: '#444',
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
    background: '#800a53',
    border: '#4b2045',
  },
  lcd: {
    backgroundOn: '#f5b8d0',
    backgroundOff: '#8b6b7a',
    border: '#613056',
    text: '#6b2a4a',
    textShadow: 'rgba(107,42,74,0.5)',
  },
  powerButton: {
    backgroundOn: '#a829a8',
    backgroundOff: '#5e275e',
    hover: '#742c74',
    iconOn: '#4ade80',
    iconOff: '#ac0505',
  },
  navButton: {
    backgroundOn: '#a829a8',
    backgroundOff: '#5e275e',
    hover: '#742c74',
    iconOn: '#00fff2',
    iconOff: '#5a3a5a',
  },
  receiverButton: {
    backgroundOn: '#3cc76f',
    backgroundOff: '#16522c',
    hover: '#3fb36a',
    iconOn: '#ffb004',
    iconOff: '#5a3a5a',
  },
  grille: {
    background: '#af09af',
  },
  clip: {
    background: '#503358',
    border: '#554a5a',
  },
};

export const pagerThemes: Record<string, PagerTheme> = {
  classic: classicTheme,
  pink: pinkTheme,
};
