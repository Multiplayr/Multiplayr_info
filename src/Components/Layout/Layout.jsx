import React, {useEffect} from "react";
import Header from "../Header/Header";
// import Feature from '../Feature/Feature'
import { Outlet } from "react-router-dom";
<<<<<<< HEAD

=======
>>>>>>> 4ca6daae83b388120d10ef4c516d8e1889d7634c

function Layout() {

  return (
    <>
      <Header />
      {/* <Feature/> */}
      <Outlet />
    </>
  );
}

export default Layout;
