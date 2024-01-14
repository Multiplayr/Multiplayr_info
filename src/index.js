import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Layout from "./Components/Layout/Layout";
import { Working } from "./Components/Working/Working";
import { Partner } from "./Components/Partner/Partner";
import { News } from "./Components/News/News";
import { Contact } from "./Components/Contact/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<App />} />
      <Route path="*" element={<App />} />
      <Route path="news" element={<News />} />
      {/* <Route path="about" element={<About />} /> */}
      <Route path="contact" element={<Contact />} />
      {/*    */}

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
