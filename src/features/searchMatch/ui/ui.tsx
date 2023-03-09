import { FC, ChangeEvent } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { searchMatchActions } from '../model/slice/searchMatchSlice';
import styles from './ui.module.scss';

export const SearchMatch: FC = () => {
  const dispatch = useAppDispatch();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchMatchActions.setSearchTerm(e.target.value));
  };

  return (
    <div>
      <p className={styles.searchMatchTitle}>Найди трансляцию через поиск</p>
      <input
        onChange={handleSearch}
        className={styles.input}
        placeholder={'Реал Мадрид - Барселона'}
      />
    </div>
  );
};
