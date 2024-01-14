import './App.css';
import { Working } from './Components/Working/Working';

function App() {
  return (
    <>
      <div className="relative flex flex-col">
        <Home />
        <Working />
        <Teams />
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
