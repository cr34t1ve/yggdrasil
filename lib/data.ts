import clubhouseclone from '@/images/experiments/clubhouse-clone.png';
import brankLogo from '@/images/experiments/brank.png';

export interface ExperimentType {
  name: string;
  description: string;
  image: any;
  url: string;
}

export const experiments: ExperimentType[] = [
  {
    name: 'Clubhouse clone',
    description: 'Redesigned clubhouse UI built with SwiftUI.',
    image: clubhouseclone,
    url: 'https://github.com/casprine/clubhouse-clone',
  },
  {
    name: 'Brank',
    description: 'Infrastructure for accessing financial data. Think Plaid for Africa.',
    image: brankLogo,
    url: 'https://withbrank.com/',
  },
];
