import { FC } from 'react';
import { IMatch, TopMatch } from '@/entities/match';
import styles from './ui.module.scss';

interface TopMatchListProps {
  sortedTopMatchesToday: IMatch[];
}

export const TopMatchList: FC<TopMatchListProps> = ({ sortedTopMatchesToday }) => {
  return (
    <div className={styles.topMatchesWrapper}>
      {sortedTopMatchesToday.map((match) => (
        <TopMatch match={match} key={match.id} />
      ))}
    </div>
  );
};
