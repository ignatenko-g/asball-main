import { FC } from 'react';
import { Meta } from '@/shared/ui/meta/ui/ui';
import styles from './ui.module.scss';

export const Error500: FC = () => {
  return (
    <Meta title='Внутренняя ошибка сервера'>
      <p className={styles.title}>500</p>
    </Meta>
  );
};
