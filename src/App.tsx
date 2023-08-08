import { useLayoutEffect } from 'react';
import './App.scss'
import { StartCard } from './cards/StartCard'
import { ServicesCard } from './cards/ServicesCard';
import { AboutUsCard } from './cards/AboutUsCard';
import { BlogCard } from './cards/BlogCard';
import { Footer } from './components/Footer';

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
      <StartCard />
      <ServicesCard />
      {/* 
      <ContactCard/>
      */}
      <BlogCard />
      <AboutUsCard />
      <Footer />
    </>
  )
}

export default App
