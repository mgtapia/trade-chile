import { useRef, useEffect } from 'react';

function useEvent(name, handler) {  
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      const isSupported = window?.addEventListener;
      
      if (!isSupported) return;
      
      const eventListener = (event) => savedHandler.current(event);
      
      window.addEventListener(name, eventListener);
      
      return () => {
        window.removeEventListener(name, eventListener);
      };
    },
    [name]
  );
}

export default useEvent;