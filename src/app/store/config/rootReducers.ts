import { ReducersMapObject } from '@reduxjs/toolkit';
import { searchMatchReducer } from '@/features/searchMatch';
import { StateSchema } from './types';

export const rootReducers: ReducersMapObject<StateSchema> = {
  searchMatch: searchMatchReducer,
};
