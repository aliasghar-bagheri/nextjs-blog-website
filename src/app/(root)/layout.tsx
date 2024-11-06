import Footer from '@/components/shared/Footer/Footer';
import Header from '@/components/shared/Header/Header';
import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
