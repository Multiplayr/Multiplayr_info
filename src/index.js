import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import { Working } from "./Components/Working/Working";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>

      <Route path="" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home/>} />
      <Route path="working" element={<Working/>} />

      <Route path="*" element={<App/>} />


      
      {/* <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} /> */}

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
