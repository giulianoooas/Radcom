import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./navbar.component.css";
import logo from "./../../assets/radcom_romania_logo.jpg";

export const Navbar = () => {
  const navbarElement = document.getElementById("navbarSupportedContent");
  const location = useLocation();

  const navbarItems = {
    home: {
      path: "/home",
      label: "Home",
      className: "nav-item",
    },
    services: {
      path: "/services",
      label: "Services",
      className: "nav-item",
    },
  };

  const putClasses = () => {
    Object.values(navbarItems).forEach((navbarItem) => {
      let className = "nav-link";

      if (location.pathname.includes(navbarItem.path)) {
        className = `${className} active`;
      }

      navbarItem.className = className;
    });

    if (navbarElement && navbarElement.classList.contains("show")) {
      navbarElement.classList.remove("show");
    }
  };
  putClasses();

  useEffect(() => {
    putClasses();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container px-5">
        <div>
          <img alt="logo" src={logo} className="logo-image" />
          <Link to="/home">
            <span className="navbar-brand">Radcom</span>
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {Object.entries(navbarItems).map(([page, navbarItem]) => (
              <li className="nav-item" key={page}>
                <Link to={navbarItem.path}>
                  <span className={navbarItem.className}>
                    {navbarItem.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
