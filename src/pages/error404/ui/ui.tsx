import { FC } from 'react';
import { Meta } from '@/shared/ui/meta/ui/ui';
import styles from './ui.module.scss';

export const Error404: FC = () => {
  return (
    <Meta title='Страница не найдена'>
      <p className={styles.title}>404</p>
    </Meta>
  );
};
