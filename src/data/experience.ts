export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

export const experiences: ExperienceItem[] = [
  {
    title: 'Software Developer',
    company: 'Steve Vick International Ltd',
    location: 'Bradford on Avon',
    period: 'November 2023 – Present',
    description:
      'Sole in-house developer for the SMARTester department. Architecting and deploying production-grade software across web, desktop, and mobile platforms with IoT device integration via Bluetooth Low Energy and TCP protocols.',
    technologies: ['React', 'Electron', 'React Native', 'Node.js', 'PostgreSQL', 'AWS', 'Ruby on Rails'],
  },
  {
    title: 'Software Developer',
    company: 'Unicursal Group (Net Natives)',
    location: 'Portsmouth',
    period: 'August 2020 – November 2023',
    description:
      'Designed and optimised web applications using Node.js with Angular and React frontends. Led releases for AWS-powered solutions and improved React Native app performance through a major rewrite.',
    technologies: ['Angular', 'React Native', 'Vue.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS'],
  },
];

export const education: EducationItem[] = [
  {
    degree: 'BSc Computer Science',
    institution: 'University of Southampton',
    location: 'Southampton',
    period: 'October 2015 – June 2019',
    description:
      'Developed a strong foundation in object-oriented programming and software development. Notable projects include modeling fair playout protocols for peer-to-peer multiplayer games in Event-B.',
  },
];
