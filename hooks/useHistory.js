import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { PAGES } from 'consts';

function useHistory() {
	const history = useRouter();

	useEffect(() => {
    const [location] = history.asPath.split('?');
    if (history.asPath !== history.pathname && PAGES.includes(location)) {
      history.push(history.asPath);
    }
  }, []);

  return history;
}

export default useHistory;