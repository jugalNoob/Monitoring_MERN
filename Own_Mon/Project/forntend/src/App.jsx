import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './page/Home';
import Cpu from "./page/Cpu"
import Req from './page/Req';


const router = createBrowserRouter([ 
  {
    path: "/", 
    element: <Home />
  },

  {
    path: "/cpu", 
    element: <Cpu/>
  },
  {
    path: "/req", 
    element: <Req/>
  },

])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
