import { FC, ReactNode } from 'react';
import { Container } from '@/shared/ui/container/ui';
import styles from './ui.module.scss';

interface ContentProps {
  children: ReactNode;
}

export const Content: FC<ContentProps> = ({ children }) => {
  return (
    <main className={styles.content}>
      <Container>{children}</Container>
    </main>
  );
};
