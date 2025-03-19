import Footer from '@/components/footer';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <main className="flex-1 pb-[88px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
