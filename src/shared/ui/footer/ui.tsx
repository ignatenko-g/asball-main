import Link from 'next/link';
import { FC } from 'react';
import { Container } from '@/shared/ui/container/ui';
import styles from './ui.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <ul className={styles.menu}>
          <li>Asball © 2023</li>
          <li>
            <Link href={'/copyright'}>Правообладателям</Link>
          </li>
          <li>asball@gmail.com</li>
        </ul>
      </Container>
    </footer>
  );
};
