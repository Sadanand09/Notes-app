import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Home from "./view/Home";
import AddNote from "./components/AddNote";
import Login from "./view/Login";
import Update from "./view/Update";


function App() {

  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Login />,
    // },
    {
      path: "/",
      element:<Home/>
    },
    {
      path: "/addnote",
      element: <AddNote/>
    },
    // {
    //   path: "/home",
    //   element: <Home/>
    // },
    {
      path:"/update/:id",
      element: <Update/>
    }

  ]);

  

  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
