import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useWindowSize } from "./hooks/useWindowSize";
import NavBar from "./phone/components/NavBar";
import { Home, Projects, AboutMe, Contact } from "./phone/pages/index";
import Footer from "./phone/components/Footer";
//Style imports
import "./App.scss";

function App() {
  const size = useWindowSize();

  return (
    <div className="App mt-3">
      <div className="phone">
        {/** Phone view */}
        {size.width <= 450 && (
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        )}
      </div>
    </div>
  );
}

export default App;
