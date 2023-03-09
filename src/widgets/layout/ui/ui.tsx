import { FC, ReactNode } from 'react';
import { Header } from '@/shared/ui/header/ui';
import { Footer } from '@/shared/ui/footer/ui';
import { Content } from '@/shared/ui/content/ui';
import styles from './ui.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};
