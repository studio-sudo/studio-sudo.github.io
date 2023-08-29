import { useLayoutEffect } from 'react';
import './App.scss'
import { StartCard } from './cards/StartCard'
import { ServicesCard } from './cards/ServicesCard';
import { AboutUsCard } from './cards/AboutUsCard';
import { BlogCard } from './cards/BlogCard';
import { FaqCard } from './cards/FaqCard';
import { ContactCard } from './cards/ContactCard';
import { LavaLamp } from './LavaLamp';

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
      <LavaLamp/>
      <StartCard />
      <ServicesCard />
      <FaqCard />
      <AboutUsCard />
      <ContactCard />
      <BlogCard />
    </>
  )
}

export default App
