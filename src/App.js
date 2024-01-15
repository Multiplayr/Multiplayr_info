import "./App.css";
import { Home, Working, Teams,Roadmap,Feature } from "./Components";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <div className="relative flex flex-col">
      <Home/>
      <Working/>
      <Teams/>
      <Feature/>
      <Roadmap/>
      <LineOnWebpage/>
       
      </div>
    </>
  );
}

export default App;



function LineOnWebpage() {
  return (
    <div>
    <img
      className="overlay-img-png"
      src="/assets/images/banner/banner-shape-5.png"
      alt=""
    />
  </div>
  )
}

export {LineOnWebpage};
