import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import "./js/wow.min";

// custom global css import
import "./global-styles/styles.css";
import "./global-styles/animate.min.css";
import "./global-styles/et-line-font.css";
import "./global-styles/font-awesome.min.css";

// component imports
import { Navbar } from "./components/navbar/navbar.component";
import { Comp2 } from "./components/comp-2/comp2.component";
import { Comp1 } from "./components/comp-1/comp1.component";
import { Footer } from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/comp1" element={<Comp1 />} />
          <Route path="/comp2" element={<Comp2 />} />
          <Route path="*" element={<Navigate to="/comp1" />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
