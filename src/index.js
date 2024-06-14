import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,ScrollRestoration
} from "react-router-dom";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import Layout from "./Components/Layout/Layout";
import { Contact, Home, News, Working,Partner, Blogs} from "./Components";
import { Scroller } from "./Components/Common";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    
    <Route path="/" element={<Layout />}>
    
      <Route path="" element={<App/>} />
      <Route path="contact" element={<Contact />} /> 
      <Route path="news" element={<Blogs />} />
      <Route path="blog" element={<Blogs/>} />
      //riot text file
      <Route path="riot.txt" element={<RiotFile />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
    </>)
);

// Component for serving the riot.txt file
function RiotFile() {
  // You can fetch and display the contents of the riot.txt file here
  return (
    <div>
      <p>1a868445-6318-4699-803a-05e93eb53347</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


