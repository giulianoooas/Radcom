import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./navbar.component.css";
import logo from "../../assets/logoPar.png";

export const Navbar = () => {
  const location = useLocation();
  const navbarItems = {
    comp1: {
      path: "/comp1",
      label: "Comp1",
      className: "nav-item",
    },
    comp2: {
      path: "/comp2",
      label: "Comp2",
      className: "nav-item",
    },
  };

  const putClasses = () => {
    Object.values(navbarItems).forEach((navbarItem) => {
      let className = "nav-link";

      if (navbarItem.path === location.pathname) {
        className = `${className} active`;
      }

      navbarItem.className = className;
    });
  };
  putClasses();

  const setTabTile = () => {
    let title = "Radcom";

    Object.values(navbarItems).forEach((navbarItem) => {
      if (navbarItem.path === location.pathname) {
        title += ` - ${navbarItem.label}`;
      }
    });

    document.title = title;
  };
  setTabTile();

  useEffect(() => {
    putClasses();
    setTabTile();
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div className="container px-5">
        <div>
          <img src={logo} alt="logo" className="logo-image" />
          <Link to="/comp1">
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
