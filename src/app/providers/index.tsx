import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { Layout } from '@/widgets/layout';
import { HeadProvider } from './headProvider/ui/ui';
import { store } from '../store/config/config';

interface MainProviderProps {
  children: ReactNode;
}

export const MainProvider: FC<MainProviderProps> = ({ children }) => {
  return (
    <HeadProvider>
      <Provider store={store}>
        <Layout>{children}</Layout>
      </Provider>
    </HeadProvider>
  );
};
