import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Car from './pages/car/Car';
import Estoque from "./pages/estoque/Estoque"

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/car", element: <Car />},
  {path: "/car/:id", element: <Car /> },
  {path: "/contact", element: <Contact />},
  {path: "/home", element: <Home />},
  {path: "/estoque", element: <Estoque />},


])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
