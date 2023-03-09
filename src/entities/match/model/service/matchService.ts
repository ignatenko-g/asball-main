import { api } from '@/shared/api/api';
import { getMatchesUrl } from '@/shared/config/apiConfig';
import { IMatch } from '../types/types';

interface GetAllParams {
  top?: boolean;
  date?: Date;
}

export const MatchService = {
  async getAll(params?: GetAllParams) {
    return api.get<IMatch[]>(getMatchesUrl(), {
      params: params ? params : {},
    });
  },

  async getById(id: string) {
    return api.get<IMatch>(getMatchesUrl(`/${id}`));
  },
};
