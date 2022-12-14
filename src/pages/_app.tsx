import { useEffect, useState } from 'react';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { Theme } from '@twilio-paste/core/theme';
import { GlobalContext } from '../state/context';
import { ThemeMode } from '../types/user';
import { THEME_MODE } from '../constants/localStorage';
import { TopNav } from '../components/TopNav';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const globalContextValue = { isDarkMode, setIsDarkMode };

  useEffect(() => {
    const themeMode = localStorage.getItem(THEME_MODE) as ThemeMode;
    setIsDarkMode(themeMode === ThemeMode.Dark);
  }, []);

  return (
    <GlobalContext.Provider value={globalContextValue}>
      <Theme.Provider theme={isDarkMode ? ThemeMode.Dark : ThemeMode.Default}>
        <TopNav />
        <Component {...pageProps} />
      </Theme.Provider>
    </GlobalContext.Provider>
  );
};

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  console.log(metric);
}

export default MyApp;
