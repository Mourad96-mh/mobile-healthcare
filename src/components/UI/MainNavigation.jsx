import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLangPrefix } from "../../hooks/useLangPrefix";

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const prefix = useLangPrefix();

  const toggleHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  const close = () => setIsOpen(false);

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
              to={prefix + "/"}
              end
              className={({ isActive }) =>
                `link nav-link${isActive ? " active" : ""}`
              }
              onClick={close}
            >
              {t("nav.home")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${prefix}/consultation-a-domicile`}
              className={({ isActive }) =>
                `link nav-link${isActive ? " active" : ""}`
              }
              onClick={close}
            >
              {t("nav.consultation")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${prefix}/soins-infirmiers`}
              className={({ isActive }) =>
                `link nav-link${isActive ? " active" : ""}`
              }
              onClick={close}
            >
              {t("nav.soins")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${prefix}/prelevement-a-domicile`}
              className={({ isActive }) =>
                `link nav-link${isActive ? " active" : ""}`
              }
              onClick={close}
            >
              {t("nav.prelevement")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${prefix}/transport-sanitaire`}
              className={({ isActive }) =>
                `link nav-link${isActive ? " active" : ""}`
              }
              onClick={close}
            >
              {t("nav.transport")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${prefix}/contact`}
              className={({ isActive }) =>
                `link nav-link${isActive ? " active" : ""}`
              }
              onClick={close}
            >
              {t("nav.contact")}
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MainNavigation;
