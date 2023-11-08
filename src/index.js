import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Details from './Components/Details';
import Cart from './Components/Cart';

const AppLayout = () => {
  return (
   
      <Home />
   
  )
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
     
  },
  {
    path: "/products/:id",
    element: <Details />
  },
  {
    path: "/cart",
    element: <Cart/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter}>
    <AppLayout/>
  </RouterProvider >
);