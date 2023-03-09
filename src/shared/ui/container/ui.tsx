import { FC, ReactNode } from 'react';
import styles from './ui.module.scss';

interface ContainerProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
