import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import { IMatch } from '../../model/types/types';
import styles from './topMatch.module.scss';

interface TopMatchProps {
  match: IMatch;
}

export const TopMatch: FC<TopMatchProps> = ({ match }) => {
  return (
    <div className={styles.matchWrapper} key={match.id}>
      <div className={styles.matchFirstContainer}>
        <Image
          src={
            match.homeTeam.images &&
            `${process.env.SERVER_URL}/uploads/${match.awayTeam.images.small}`
          }
          alt={`${match.homeTeam.name} иконка`}
          width={26}
          height={26}
        />
        <p className={styles.matchDate}>{dayjs(match.date).format('HH:mm')}</p>
        <Image
          src={
            match.homeTeam.images &&
            `${process.env.SERVER_URL}/uploads/${match.homeTeam.images.small}`
          }
          alt={`${match.homeTeam.name} иконка`}
          width={26}
          height={26}
        />
      </div>
      <Link href={`/match/${match.id}`} className={styles.matchName}>
        {match.homeTeam.name} - {match.awayTeam.name}
      </Link>
    </div>
  );
};
