import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { FC, ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <div className="container"> {children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
