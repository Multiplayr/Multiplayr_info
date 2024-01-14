import "./App.css";
import { Home, Working, Teams ,Roadmap} from "./Components";
import Feature from "./Components/Feature/Feature";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Home/>
      <Working/>
      <Teams/>
      <Feature/>
      <Roadmap/>
      
    </>
  );
}

export default App;
