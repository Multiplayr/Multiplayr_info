import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Layout from "./Components/Layout/Layout";
import { Working } from "./Components/Working/Working";
import { Partner } from "./Components/Partner/Partner";
import { News } from "./Components/News/News";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="working" element={<Working />} />
      <Route path="*" element={<App />} />
      

        <Route path="about" element={<Partner />} />
      <Route path="News" element={<News />} />
      {/* <Route path="user/:userid" element={<User />} /> */}

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
