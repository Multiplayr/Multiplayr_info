import React from 'react';
import Header from '../Header/Header';
import Feature from '../Feature/Feature'
import { Outlet } from 'react-router-dom';
import Raoadmap from '../Roadmap/Raoadmap';




function Layout() {
  return (
    <>
    <Header/>
    <Feature/>
    <Raoadmap/>
    <Outlet/>
    

    </>
  )
}

export default Layout