import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { MatchService } from '@/entities/match';
import { Match, MatchProps } from '@/pages/match';
import Error404Page from '../404';

const MatchPage: NextPage<MatchProps> = ({ match }) => {
  return match ? <Match match={match} /> : <Error404Page />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data: matches } = await MatchService.getAll();
    const paths = matches.map((match) => ({
      params: { id: match.id.toString() },
    }));

    return {
      paths,
      fallback: 'blocking',
    };
  } catch (e) {
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { data: match } = await MatchService.getById(String(params?.id));

    return {
      props: { match },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default MatchPage;
