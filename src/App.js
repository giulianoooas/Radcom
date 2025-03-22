import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";

// import css
import "bootstrap/dist/css/bootstrap.min.css";

// import js
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// custom global css import
import "./global-styles/styles.css";
import "./fonts/fonts.css";

// component imports

import LoadingSpinner from "./components/shared/loading-spinner/loading-spinner.component";

const Footer = lazy(() => import("./components/footer/footer.component"));
const Navbar = lazy(() => import("./components/navbar/navbar.component"));
const HomePage = lazy(() =>
  import("./components/home/home-page/home-page.component.js")
);
const ServicePage = lazy(() =>
  import("./components/services-list/service-page/service-page.component.js")
);
const ServiceDetailedLanding = lazy(() =>
  import(
    "./components/service-detailed/service-detailed-landing/service-detailed-landing.component.js"
  )
);

function App() {
  const [offset, setOffset] = useState(0);
  const reveal = () => {
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
  };

  const onScroll = () => setOffset(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    window.addEventListener("scroll", reveal);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return (
    <div className="App">
      <HashRouter>
        <Suspense fallback={<LoadingSpinner />}>
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
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
