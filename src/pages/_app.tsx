import '@/styles/global.scss';
import type { AppProps } from 'next/app';
import MainLayout from '@/layouts/MainLayout';
import Head from 'next/head';
import { wrapper } from '@/store/store';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Онлайн-кинотеатр Иви - фильмы, сериалы и мультфильмы смотреть онлайн бесплатно в хорошем
          качестве
        </title>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default wrapper.withRedux(App);
