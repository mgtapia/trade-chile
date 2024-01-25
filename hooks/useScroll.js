import { useState, useEffect } from 'react';

function useScroll() {
  const [top, setTop] = useState(0);
  const [scroll, setScroll] = useState(false);
  const [progress, setProgress] = useState(0);
  const [width, setWidth] = useState(0);

  function scrollUp() {
    const pY = window.scrollY;
    if (pY < top) setScroll(true);
    else if (pY > top) setScroll(false);
    setTop(pY);
  };

  function resize() {
    setWidth(document.body.clientWidth);
  };

  useEffect(() => {
    scrollUp();    
    window.addEventListener('scroll', scrollUp);
    return () => {
      window.removeEventListener('scroll', scrollUp);
    };
  }, [scrollUp]);

  useEffect(() => {
    const height = document.body.clientHeight;
    const screen = window.innerHeight;

    setProgress(
      Math.round(
        top / (height - screen) * window.innerWidth * 1000 || 0
      ) / 1000
    );
  }, [top]);

  useEffect(() => {
    resize();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    }
  }, []);

  return {
    progress,
    scroll,
    top,
    width
  };
}

export default useScroll;