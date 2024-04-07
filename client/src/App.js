import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './views/Home/Home';
import NewNote from './views/NewNote/NewNote';


function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Home/>
    },

    {
      path: "/new",
      element: <NewNote/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
