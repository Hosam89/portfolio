import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useWindowSize } from "./hooks/useWindowSize";

/** Phone Components */
import { Home, Projects, AboutMe, Contact, NavBar } from "./phone/pages/index";
import Footer from "./phone/components/Footer";

/** Desktop Components */
import { HomeDt, AboutDt, ProjectsDt, ContactDT } from "./desktop/Pages/index";

//Style imports
import "./App.scss";

function App() {
  const size = useWindowSize();

  return (
    <div className="App mt-3">
      {size.width <= 450 && (
        <div className="phone">
          {/** Phone view */}

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
        </div>
      )}
      <div className="desktop">
        {size.width > 450 && (
          <BrowserRouter>
            <div className="screen">
              <Routes>
                <Route path="/" element={<HomeDt />} />
                <Route path="/projects" element={<ProjectsDt />} />
                <Route path="/aboutme" element={<AboutDt />} />
                <Route path="/contact" element={<ContactDT />} />
              </Routes>
            </div>
          </BrowserRouter>
        )}
      </div>
    </div>
  );
}

export default App;
