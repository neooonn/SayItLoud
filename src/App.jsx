import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Express from "./pages/Express";
import Explore from "./pages/Explore";

const router = createBrowserRouter([
  {path: '/', element: <Homepage />},
  {path: '/express', element: <Express />},
  {path: '/explore', element: <Explore />}
]);

const App = () => {
  return <div> 
    <RouterProvider router={router}/>
  </div>;
};

export default App;
