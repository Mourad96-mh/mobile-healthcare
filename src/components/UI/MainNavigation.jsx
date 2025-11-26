import { useState } from "react";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button
        className="burger"
        aria-label="toggle menu"
        onClick={toggleHandler}
      >
        <span className={`burger-line ${isOpen ? "open" : ""}`}>&nbsp;</span>
        <span className={`burger-line ${isOpen ? "open" : ""}`}>&nbsp;</span>
        <span className={`burger-line ${isOpen ? "open" : ""}`}>&nbsp;</span>
      </button>
      <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
        <ul className="nav-list">
          <li>
            <NavLink
              to="/"
              className={`link nav-link ${(isActive) =>
                isActive ? "active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/consultation-a-domicile"
              className={`link nav-link ${(isActive) =>
                isActive ? "active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              Consultation à domicile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/soins-infirmiers"
              className={`link nav-link ${(isActive) =>
                isActive ? "active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              Soins-Infirmiers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/prelevement-a-domicile"
              className="link nav-link"
              onClick={() => setIsOpen(false)}
            >
              Prélèvement à domicile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/transport-sanitaire"
              className="link nav-link"
              onClick={() => setIsOpen(false)}
            >
              Transport Sanitaire/ Ambulances
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="link nav-link"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MainNavigation;
