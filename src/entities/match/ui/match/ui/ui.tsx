import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { IMatch } from '../../../model/types/types';
import styles from './ui.module.scss';

interface MatchProps {
  match: IMatch;
}

export const Match: FC<MatchProps> = ({ match }) => {
  return (
    <div className={styles.matchContainer}>
      <div className={styles.matchFirstPart}>
        <Image
          src={
            match.homeTeam.images &&
            `${process.env.SERVER_URL}/uploads/${match.homeTeam.images.medium}`
          }
          alt={`${match.homeTeam.name} иконка`}
          width='0'
          height='0'
          sizes='100vw'
        />
        <div className={styles.matchCenterPart}>
          <p className={styles.matchDateFirst}>{dayjs(match.date).format('HH:mm')}</p>
          <p className={styles.matchDateSecond}>{dayjs(match.date).format('DD.MM.YYYY')}</p>
        </div>
        <Image
          src={
            match.awayTeam.images &&
            `${process.env.SERVER_URL}/uploads/${match.awayTeam.images.medium}`
          }
          alt={`${match.awayTeam.name} иконка`}
          width='0'
          height='0'
          sizes='100vw'
        />
      </div>
      <div className={styles.matchSecondPart}>
        <p>
          {match.homeTeam.name} - {match.awayTeam.name}
        </p>
        <p>{match.league.name}</p>
        <Link href={`/match/${match.id}`} className={styles.watchBroadcast}>
          Смотреть трансляцию
        </Link>
      </div>
    </div>
  );
};
