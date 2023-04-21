import '@/styles/global.scss';
import type { AppProps } from 'next/app';
import MainLayout from '@/layouts/MainLayout';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    </>
  );
}
