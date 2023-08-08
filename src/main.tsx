import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BlogIndex from './pages/blog/blog-index.tsx';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';

const router = createBrowserRouter([
  {
    path: "/blog",
    element: <BlogIndex />,
  },
  {
    path: "/",
    element: <App />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
