import { useEffect, useMemo, useState, useContext, createContext } from 'react';
import { useDark, useHistory, useScroll } from 'hooks';
import { obj } from 'utils';
import gsap from 'gsap';

const Store = createContext();

const StoreProvider = ({ children }) => {  
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState('ES');
  const history = useHistory();
  const dark = useDark();
  const scroll = useScroll();
  const ES = lang == 'ES';

  return (
    <Store.Provider value={{ 
      dark, 
      history, 
      loading, 
      lang, 
      setLang,
      ES,
      gsap
    }}>
      {children}
    </Store.Provider>
  )
};

const useStore = () => useContext(Store);

export {
	StoreProvider,
	useStore
};