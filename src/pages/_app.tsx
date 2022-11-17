import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { Theme } from '@twilio-paste/core/theme';
import { TopNav } from '../components/TopNav';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Theme.Provider theme="default">
      <TopNav />
      <Component {...pageProps} />
    </Theme.Provider>
  );
};

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  console.log(metric);
}

export default MyApp;
