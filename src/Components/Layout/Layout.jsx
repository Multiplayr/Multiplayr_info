import React from 'react';
import Header from '../Header/Header';
import Feature from '../Feature/Feature'
import { Outlet } from 'react-router-dom';


function Layout() {
  return (
    <>
    <Header/>
  
    <Outlet/>
    

    </>
  )
}

export default Layout