import { HashRouter} from "react-router-dom";

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

// component imports
import { Footer } from "./components/footer/footer.component";
import { Landing } from "./components/landing/landing.component";
import { About } from "./components/about/about.component";
import { Feature } from "./components/feature/feature.component";
import { Contact } from "./components/contact/contact.component";

function App() {
  return (
    <div className="App">
      <HashRouter>
        {/* <Navbar />
        <Routes>
          <Route path="/comp1" element={<Comp1 />} />
          <Route path="/comp2" element={<Comp2 />} />
          <Route path="*" element={<Navigate to="/comp1" />} />
        </Routes> */}
        <Landing />
        <About />
        <Feature />
        <Contact />
      </HashRouter>
      <Footer />
      {/* <Helmet>
        <script src="jquery/dist/jquery.js" type="text/javascript"></script>
        <script
          src="bootstrap/dist/js/bootstrap.bundle.min.js"
          type="text/javascript"
        ></script>
        <script src="vegas/dist/vegas.min.js" type="text/javascript"></script>
        <script src="wowjs/dist/wow.js" type="text/javascript"></script>
        <script src="js/smoothscroll.js" type="text/javascript"></script>
        <script src="js/custom.js" type="text/javascript"></script>
      </Helmet> */}
    </div>
  );
}

  window.addEventListener('scroll', reveal);

  function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealPoint = 150;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
      } else{
        reveals[i].classList.remove('active');
      }
    }
  }

export default App;
