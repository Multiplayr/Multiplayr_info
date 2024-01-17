import React, {useEffect} from "react";
import Header from "../Header/Header";
// import Feature from '../Feature/Feature'
import { Outlet } from "react-router-dom";
import {Contact} from "../../Components"

function Layout() {

  return (
    <>
      <Header />
      {/* <Feature/> */}
      <Outlet />

      {/* <Contact /> */}
    </>
  );
}

export default Layout;
