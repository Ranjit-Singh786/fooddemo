// src/index.js
// import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
} from "react-router-dom";
import  {route}  from './src/components/Router.js';

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);

root.render(
  <RouterProvider router={route} />
);
