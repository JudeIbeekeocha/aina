import Navbar from "./components/Navbar/Navbar.jsx";
import MainContent from "./components/Maincontent/Maincontent.jsx";
import TickerTape from "./components/Tickertape/Tickertape.jsx";
import About from "./components/About/About.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="root-container">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MainContent />
                <TickerTape />
              </>
            }
          />

          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
