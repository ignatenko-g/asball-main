import { IMatch } from '@/entities/match';

export interface HomeProps {
  sortedTopMatchesToday: IMatch[];
  sortedUsualMatchesToday: IMatch[];
}
