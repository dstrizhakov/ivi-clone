import '@/styles/global.scss';
import type { AppProps } from 'next/app';
import MainLayout from '@/layouts/MainLayout';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { wrapper } from '@/store/store';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default wrapper.withRedux(App);
