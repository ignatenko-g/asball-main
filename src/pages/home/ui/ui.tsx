import { FC } from 'react';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { Meta } from '@/shared/ui/meta/ui/ui';
import advertisementHome from '@/shared/assets/advertisementHome.png';
import advertisementHomeMobile from '@/shared/assets/advertisementHomeMobile.png';
import { TopMatchList } from '@/widgets/topMatchList';
import { MatchList } from '@/widgets/matchList';
import { SearchMatch } from '@/features/searchMatch/ui/ui';
import { getSearchTerm } from '@/features/searchMatch';
import { HomeProps } from '../types/types';
import styles from './ui.module.scss';

export const Home: FC<HomeProps> = ({ sortedTopMatchesToday, sortedUsualMatchesToday }) => {
  const searchTerm = useSelector(getSearchTerm);

  const filteredMatches = !searchTerm
    ? sortedUsualMatchesToday
    : sortedUsualMatchesToday.filter((match) => {
        return (
          match.homeTeam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          match.awayTeam.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });

  return (
    <Meta
      title='Смотреть футбол онлайн - Asball'
      description='Футбол онлайн: прямые трансляции футбольных матчей. Смотреть футбол стало еще удобнее. Футбольные матчи - АПЛ, Ла Лига, Серия А, РПЛ, Бундеслига, Серия А, Лига 1, Лига Чемпионов, Лига Европы.'
    >
      <div className={styles.titleDateWrapper}>
        <h1 className={styles.title}>Футбольные трансляции</h1>
        <p className={styles.date}>{dayjs().format('DD.MM.YYYY')}</p>
      </div>
      {sortedTopMatchesToday.length ? (
        <TopMatchList sortedTopMatchesToday={sortedTopMatchesToday} />
      ) : (
        <p className={styles.matchesNotFound}>Мы не нашли для вас интересных матчей</p>
      )}
      <Image src={advertisementHome} alt={'рекламный баннер'} className={styles.advertisement} />
      <Image
        src={advertisementHomeMobile}
        alt={'рекламный баннер'}
        className={styles.advertisementMobile}
      />
      <SearchMatch />
      <MatchList matches={filteredMatches} />
    </Meta>
  );
};
