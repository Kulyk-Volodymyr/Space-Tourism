import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/home/Home";
import { Destination } from "./pages/destination/Destination";
import { Crew } from "./pages/crew/Crew";
import { Technology } from "./pages/technology/Technology";

function App() {
  const [activeLink, setActiveLink] = useState(1);
  const [navbarHidden, setNavbarHidden] = useState(true);

  return (
    <>
      <Router>
        <Header
          activeLink={activeLink}
          navbarHidden={navbarHidden}
          setNavbarHidden={setNavbarHidden}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setActiveLink={setActiveLink}
                setNavbarHidden={setNavbarHidden}
              />
            }
          />
          <Route
            path="/destination"
            element={<Destination setActiveLink={setActiveLink} />}
          />
          <Route
            path="/crew"
            element={<Crew setActiveLink={setActiveLink} />}
          />
          <Route
            path="/technology"
            element={<Technology setActiveLink={setActiveLink} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
