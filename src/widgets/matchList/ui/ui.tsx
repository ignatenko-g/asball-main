import { IMatch, Match } from '@/entities/match';
import { FC } from 'react';
import styles from './ui.module.scss';

interface MatchListProps {
  matches: IMatch[];
}

export const MatchList: FC<MatchListProps> = ({ matches }) => {
  return (
    <div className={styles.matchesWrapper}>
      {matches.map((match) => (
        <Match match={match} key={match.id} />
      ))}
    </div>
  );
};
