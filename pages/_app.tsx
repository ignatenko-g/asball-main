import type { AppProps } from 'next/app';
import localFont from '@next/font/local';
import { MainProvider } from '@/app/providers';
import 'normalize.css';
import '../src/app/index.scss';

const myFont = localFont({
  src: [
    { path: '../public/fonts/MazzardH-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/MazzardH-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/MazzardH-Bold.woff2', weight: '700', style: 'normal' },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.className}>
      <MainProvider>
        <Component {...pageProps} />
      </MainProvider>
    </main>
  );
}
