import "./App.css";
import { Home, Working, Teams } from "./Components";
import Feature from "./Components/Feature/Feature";

function App() {
  return (
    <>
      <div className="relative flex flex-col">
        <Home />
        <Working />
        <Teams />
        <Feature/>
        <div>
          <img
            className="overlay-img-png"
            src="/assets/images/banner/banner-shape-5.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default App;
