import { BrowserRouter, Route, Routes } from "react-router-dom";
//Import the each page Form the index in Pages
import { Home, AboutMe, Projects } from "./pages/index";
//Style imports
import "./App.scss";
//Bootstrap style
import "./bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
