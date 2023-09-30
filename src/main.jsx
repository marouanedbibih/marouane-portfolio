import React from 'react';
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "../src/routes/routes.jsx";
import ReactDOM from 'react-dom/client'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
