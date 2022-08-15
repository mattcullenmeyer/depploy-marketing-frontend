import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { Theme } from '@twilio-paste/core/theme';
import { TopNav } from '../components/TopNav';
import { Layout } from '../components/Layout';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Theme.Provider theme="default">
      <TopNav />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Theme.Provider>
  );
};

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  console.log(metric);
}

export default MyApp;
