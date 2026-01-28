export interface ProjectItem {
  title: string;
  description: string;
  path: string;
  icon: string;
  technologies: string[];
}

export const projects: ProjectItem[] = [
  {
    title: 'Tic-Tac-Toe',
    description: 'Classic game.',
    path: '/tic-tac-toe',
    icon: 'games',
    technologies: ['React', 'TypeScript', 'MUI'],
  },
  {
    title: 'Cat Finder',
    description: 'Discover random adorable cats. Powered by The Cat API.',
    path: '/cat',
    icon: 'pets',
    technologies: ['React', 'TypeScript', 'MUI', 'REST API'],
  },
];
