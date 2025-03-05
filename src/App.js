import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

// import css
import "bootstrap/dist/css/bootstrap.min.css";

// import js
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "wowjs/dist/wow.min.js";

// custom global css import
import "./global-styles/styles.css";
import "./global-styles/animate.min.css";

// component imports
import { Footer } from "./components/footer/footer.component";
import { HomePage } from "./components/home/home-page/home-page.component";
import { ServicePage } from "./components/services-list/service-page/service-page.component";
import { Navbar } from "./components/navbar/navbar.component";
import { ServiceDetailedLanding } from "./components/service-detailed/service-detailed-landing/service-detailed-landing.component";

function App() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="App">
      <HashRouter>
        <Navbar offset={offset} />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/services/:id" element={<ServiceDetailedLanding />} />
          <Route path="/products" element={<ServicePage />} />
          <Route path="/products/:id" element={<ServiceDetailedLanding />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        <Footer />
      </HashRouter>
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
