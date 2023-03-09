import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';
import logo from '@/shared/assets/logo.svg';

export interface MetaProps {
  title: string;
  description?: string;
  image?: string;
  children: ReactNode;
}

export const Meta: FC<MetaProps> = ({ title, description, image = null, children }) => {
  const { asPath } = useRouter();
  const currentUrl = `${process.env.APP_URL}${asPath}`;

  return (
    <>
      {description ? (
        <Head>
          <title itemProp='headline'>{title}</title>
          <meta itemProp='description' name='description' content={description} />
          <link rel='canonical' href={currentUrl} />
          <meta property='og:locale' content='ru' />
          <meta property='og:title' content={title} />
          <meta property='og:url' content={currentUrl} />
          <meta property='og:image' content={image || logo} />
          <meta property='og:site_name' content={'Asball'} />
          <meta property='og:description' content={description} />
        </Head>
      ) : (
        <Head>
          <title>{title}</title>
          <meta name='robots' content='noindex, nofollow' />
        </Head>
      )}
      {children}
    </>
  );
};
