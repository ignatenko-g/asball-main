import { FC } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { Meta } from '@/shared/ui/meta/ui/ui';
import { MatchProps } from '../types/types';
import styles from './ui.module.scss';

export const Match: FC<MatchProps> = ({ match }) => {
  return (
    <Meta
      title={`${match.homeTeam.name} - ${
        match.awayTeam.name
      } прямая трансляция смотреть онлайн ${dayjs(match.date).locale('ru').format('D MMMM')}`}
      description={`Смотреть онлайн прямую трансляцию матча ${match.homeTeam.name} - ${
        match.awayTeam.name
      } бесплатно ${dayjs(match.date).format(
        'DD.MM.HH'
      )}. Asball – бесплатный сервис для просмотра онлайн трансляции ${match.homeTeam.name} - ${
        match.awayTeam.name
      } в прямом эфире и в хорошем качестве.`}
    >
      <p className={styles.title}>
        {match.homeTeam.name} - {match.awayTeam.name}. {match.league.name}.{' '}
        {dayjs(match.date).format('DD.MM.HH')}
      </p>
      <p className={styles.subtitle}>
        Смотреть матч {match.homeTeam.name} - {match.awayTeam.name} в прямом эфире.
      </p>
    </Meta>
  );
};
