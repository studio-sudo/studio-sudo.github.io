import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/start/App.tsx'
import './styles/index.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { getBlogPages } from './pages/blog/index.tsx';
import { Wrapper } from './Wrapper.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper/>,
    children: [
      getBlogPages(),
      {
        path: "/",
        element: <App />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
