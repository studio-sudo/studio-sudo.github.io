import { useLayoutEffect } from 'react';
import './App.scss'
import { Header } from './components/Header'
import { StartCard } from './cards/StartCard'
import { ServicesCard } from './cards/ServicesCard';

const debounce = (fn: (...args: unknown[]) => void) => {
  let frame: number;

  return (...params: Parameters<typeof fn>) => {
      if (frame) {
          cancelAnimationFrame(frame);
      }

      frame = requestAnimationFrame(() => {
          fn(...params);
      });
  };
};

const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY.toString();
};

function App() {
  useLayoutEffect(() => {
    document.addEventListener('scroll', debounce(storeScroll));
    storeScroll();
  }, []);
  return (
    <>
      <Header/>
      <StartCard/>
      <ServicesCard/>
    </>
  )
}

export default App
