import Head from 'next/head';

import { HeaderDashboard } from '@/components/LayoutDashboard/HeaderDashboard';
import { NavDashboard } from '@/components/LayoutDashboard/NavDashboard';

type LayoutProps = {
  title?: string;
  keywords?: string;
  description?: string;
  children: React.ReactNode;
};

const LayoutDashboard: React.FC<LayoutProps> = ({
  title,
  keywords,
  description,
  children
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <HeaderDashboard />
      <div className='container-fluid'>
        <div className='row'>
          <NavDashboard />
          <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
            {children}
            {/* <Footer /> */}
          </main>
        </div>
      </div>
    </>
  );
};

LayoutDashboard.defaultProps = {
  title: 'DJ Events | Find the hostter parties',
  description: 'Find the latest DJ and other musical events',
  keywords: 'music, dj, edm, events'
};

export { LayoutDashboard };
