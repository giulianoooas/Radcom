import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

// import css
import "bootstrap/dist/css/bootstrap.min.css";

// import js
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "wowjs/dist/wow.min.js";

// custom global css import
import "./global-styles/styles.css";
import "./global-styles/animate.min.css";
import "./global-styles/et-line-font.css";
import "./global-styles/font-awesome.min.css";

// import custom js
import "./components/services-landing/service-landing.script";

// component imports
import { Footer } from "./components/footer/footer.component";
import { HomePage } from "./components/home-page/home-page.component";
import { ServicePage } from "./components/service-page/service-page.component";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

export default App;
