import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { HiMiniPhone, HiBars3, HiXMark } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useLangPrefix } from "../../hooks/useLangPrefix";
import { useConversionTracking } from "../../hooks/useConversionTracking";
import Logo from "./Logo";

const LANGS = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "ar", label: "ع" },
];

const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();
  const prefix = useLangPrefix();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const currentLang = pathname.startsWith("/en")
    ? "en"
    : pathname.startsWith("/es")
    ? "es"
    : pathname.startsWith("/ar")
    ? "ar"
    : "fr";

  const getPagePath = () => pathname.replace(/^\/(en|es|ar)/, "") || "/";

  const switchTo = (lang) => {
    const pagePath = getPagePath();
    if (lang === "fr") {
      navigate(pagePath);
    } else {
      navigate(`/${lang}${pagePath === "/" ? "" : pagePath}`);
    }
    setMenuOpen(false);
  };

  const close = () => setMenuOpen(false);
  const { trackConversion } = useConversionTracking();

  const handleWhatsApp = (e) => {
    e.preventDefault();
    trackConversion("https://wa.me/+212696964341");
  };

  const navItems = [
    { to: prefix + "/", label: t("nav.home"), end: true },
    { to: `${prefix}/consultation-a-domicile`, label: t("nav.consultation") },
    { to: `${prefix}/soins-infirmiers`, label: t("nav.soins") },
    { to: `${prefix}/prelevement-a-domicile`, label: t("nav.prelevement") },
    { to: `${prefix}/transport-sanitaire`, label: t("nav.transport") },
    { to: `${prefix}/contact`, label: t("nav.contact") },
  ];

  return (
    <>
    <header className="site-header">
      {/* Main navigation */}
      <div className="header-main">
        <div className="container header-inner">
          <Logo />

          <nav className="nav">
            {navItems.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
                onClick={close}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="header-right">
            <div className="lang-switcher header-lang">
              {LANGS.map((lang) => (
                <button
                  key={lang.code}
                  className={`lang-btn${
                    currentLang === lang.code ? " lang-btn--active" : ""
                  }`}
                  onClick={() => switchTo(lang.code)}
                  aria-label={`Switch to ${lang.code.toUpperCase()}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <button
              className={`burger-btn${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <HiXMark size={22} /> : <HiBars3 size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <>
          <div className="mobile-menu-backdrop" onClick={close} />
          <nav className="mobile-menu">
            {navItems.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `mobile-nav-link${isActive ? " active" : ""}`
                }
                onClick={close}
              >
                {label}
              </NavLink>
            ))}
            <div className="mobile-menu-footer">
              <div className="lang-switcher header-lang">
                {LANGS.map((lang) => (
                  <button
                    key={lang.code}
                    className={`lang-btn${
                      currentLang === lang.code ? " lang-btn--active" : ""
                    }`}
                    onClick={() => switchTo(lang.code)}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
              <a href="tel:+212696964341" className="mobile-menu-contact" onClick={() => trackConversion("tel:+212696964341")}>
                <HiMiniPhone size={14} />
                06 96 96 43 41
              </a>
              <a
                href="https://wa.me/+212696964341"
                className="mobile-menu-contact"
                rel="noopener noreferrer"
                onClick={handleWhatsApp}
              >
                <FaWhatsapp size={14} />
                WhatsApp
              </a>
            </div>
          </nav>
        </>
      )}
    </header>

      <div className="cta">
        <a
          href="tel:+212696964341"
          className="link"
          title="Appeler Mobile Healthcare"
          onClick={() => trackConversion("tel:+212696964341")}
        >
          <HiMiniPhone className="cta-icon" />
        </a>
        <a
          href="https://wa.me/+212696964341"
          className="link"
          rel="noopener noreferrer"
          title="Contact me on WhatsApp"
          onClick={handleWhatsApp}
        >
          <FaWhatsapp className="cta-icon" />
        </a>
      </div>
    </>
  );
};

export default MainHeader;
