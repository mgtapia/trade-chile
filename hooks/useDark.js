import { useCallback, useEffect, useState } from 'react';
import { getItem, setItem, setClass } from 'utils';
import { useEvent } from 'hooks';
import useSWR from 'swr';

const MODE = { dark: 'dark', light: 'light' };
const ID = 'app-mode';

function getMode(isDark) {
  return isDark ? MODE.light : MODE.dark;
}

function useDarkMode() {
  const [mode, setMode] = useState(MODE.light);
  const isDark = mode === MODE.dark;

  const { data } = useSWR(ID, (key) => {
      const chrome = window.matchMedia 
        && window.matchMedia('(prefers-color-scheme: dark)')
        .matches ? MODE.dark : MODE.light;
      const value = getItem(key);
      return !!value ? value : chrome;
    }
  );

  useEffect(() => {
    if (data && data !== mode) setMode(data); 
  }, [data]);

  useEffect(() => {
    setItem(ID, getMode(!isDark));
    setClass(isDark, MODE.dark);
  }, [isDark]);

  const handleKeyPress = useCallback((e) => {
    if (e.ctrlKey && e.keyCode === 77) {
      e.preventDefault();
      setMode(isDark ? MODE.light : MODE.dark);
    }
  }, [isDark]);

  useEvent('keydown', handleKeyPress);

  return {
    isDark, mode,
    onClick: () => setMode(getMode(isDark)),
    icon: `${getMode(isDark)}_mode`
  }	
}

export default useDarkMode;