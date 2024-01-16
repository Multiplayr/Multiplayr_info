import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Layout from "./Components/Layout/Layout";
import { Contact, Home, News, Working,Partner} from "./Components";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<App/>} />
      <Route path="contact" element={<Contact />} />
      <Route path="news" element={<News />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
