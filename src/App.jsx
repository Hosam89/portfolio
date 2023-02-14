import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useWindowSize } from "./hooks/useWindowSize";
import NavBar from "./phone/components/NavBar";
import { Home, Projects, AboutMe } from "./phone/pages/index";
//Style imports
import "./App.scss";

function App() {
  const size = useWindowSize();

  return (
    <div className="App mt-3">
      {/** Phone view */}
      {size.width <= 450 && (
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/aboutme" element={<AboutMe />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
