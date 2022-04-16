// COMPONENTS IMPORTS
import Home from "./components/Home/Home";

// CSS IMPORTS
import './App.css'

// IMAGE IMPORTS
import LightImage from "../images/lightimage.svg";
import Hero from "../images/hero.png";

const App = () => {

  return (
    <div className="App">
      <div className="relative h-400 w-200 ...">
        <div className="absolute left-0 top-0 h-8000 w-800 ...">
          <img src={LightImage} />
        </div>
      </div>
      <Home />
      <div className="h-400 w-200 static...">
        <div className="absolute top-0 right-0 h-8000 w-800 ...">
          <img src={Hero} />
        </div>
      </div>
    </div>
  )
}

export default App
