import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import logo from '@/shared/assets/logo.svg';
import { Container } from '@/shared/ui/container/ui';
import styles from './ui.module.scss';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <nav>
          <ul className={styles.menu}>
            <li>
              <Link href={'/'}>
                <Image src={logo} alt='logo' />
              </Link>
            </li>
            <li>
              <Link
                href={'https://t.me/asball_football'}
                target={'_blank'}
                className={styles.telegramLink}
              >
                Наш телеграмм-канал
                <FaTelegramPlane />
              </Link>
            </li>
            <li>
              <Link className={styles.broadcasts} href={'/'}>
                Трансляции
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
