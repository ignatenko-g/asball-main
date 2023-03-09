export const API_URL = process.env.SERVER_URL + '/api';

export const getMatchesUrl = (string = '') => `/match${string}`;
