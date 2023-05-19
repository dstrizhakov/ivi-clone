import '@/styles/global.scss';
import type { AppProps } from 'next/app';
import MainLayout from '@/layouts/MainLayout';
import Head from 'next/head';
import localFont from 'next/font/local';
import { wrapper } from '@/store/store';
import { SessionProvider } from 'next-auth/react';
import Modals from '@/components/Modals/Modals';
import '@/i18n/i18n';
import { Provider } from 'react-redux';

const iviSans = localFont({
  src: [
    {
      path: '../../public/fonts/iviSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iviSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iviSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iviSans-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
});

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>
            Онлайн-кинотеатр Иви - фильмы, сериалы и мультфильмы смотреть онлайн бесплатно в хорошем
            качестве
          </title>
        </Head>
        <div className={iviSans.className}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
          <Modals />
        </div>
      </SessionProvider>
    </Provider>
  );
}

export default App;
