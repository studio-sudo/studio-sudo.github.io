import { useLayoutEffect } from 'react';
import './App.scss'
import { Header } from './components/Header'
import { StartCard } from './cards/StartCard'
import { ServicesCard } from './cards/ServicesCard';
import { AboutUsCard } from './cards/AboutUsCard';

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
      <Header />
      <StartCard />
      <ServicesCard />
      {/* 
      <FaqCard/> as part pf ServicesCard
      <ContactCard/>
      <BlogCard/> 
      */}
      <AboutUsCard />
    </>
  )
}

export default App
