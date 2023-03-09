import { GetStaticProps, NextPage } from 'next';
import { Home, HomeProps } from '@/pages/home';
import { MatchService } from '@/entities/match';
import { sortByDate } from '@/shared/lib/helpers/sortByDate/sortByDate';

const HomePage: NextPage<HomeProps> = ({ sortedTopMatchesToday, sortedUsualMatchesToday }) => {
  return (
    <Home
      sortedTopMatchesToday={sortedTopMatchesToday}
      sortedUsualMatchesToday={sortedUsualMatchesToday}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const paramsFortopMatchesToday = {
      top: true,
      date: new Date(),
    };
    const { data: topMatchesToday } = await MatchService.getAll(paramsFortopMatchesToday);
    const sortedTopMatchesToday = topMatchesToday.sort(sortByDate);

    const paramsForUsualMatchesToday = {
      top: false,
      date: new Date(),
    };
    const { data: usualMatchesToday } = await MatchService.getAll(paramsForUsualMatchesToday);
    const sortedUsualMatchesToday = usualMatchesToday.sort(sortByDate);

    return {
      props: {
        sortedTopMatchesToday,
        sortedUsualMatchesToday,
      } as HomeProps,
      revalidate: 10,
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        sortedTopMatchesToday: [],
        sortedUsualMatchesToday: [],
      } as HomeProps,
    };
  }
};

export default HomePage;
