import './App.css';
import { Teams } from './Components/Teams/Teams';
// import { Partner } from './Components/Partner/Partner';
// import { Working } from './Components/Working/Working';
import Home from "./Components/Home/Home";
import { Working } from "./Components/Working/Working";

function App() {
  return (
    <>
      
      <div className="relative flex flex-col">
        <Home />
        <Working />
        <Teams/>
        <img
          className="overlay-img-png"
          src="/assets/images/banner/banner-shape-5.png"
          alt=""
        />

      </div>
    </>
  );
}

export default App;
