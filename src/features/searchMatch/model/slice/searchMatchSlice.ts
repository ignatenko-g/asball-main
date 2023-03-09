import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchMatchSchema } from '../types/types';

const initialState: SearchMatchSchema = {
  searchTerm: '',
};

const searchMatchSlice = createSlice({
  initialState,
  name: 'searchMatch',
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
});

export const { actions: searchMatchActions } = searchMatchSlice;
export const { reducer: searchMatchReducer } = searchMatchSlice;
