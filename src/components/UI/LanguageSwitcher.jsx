import { useNavigate, useLocation } from "react-router-dom";

const LANGS = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "ar", label: "ع" },
];

const LanguageSwitcher = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const currentLang = pathname.startsWith("/en")
    ? "en"
    : pathname.startsWith("/es")
    ? "es"
    : pathname.startsWith("/ar")
    ? "ar"
    : "fr";

  const getPagePath = () => {
    return pathname.replace(/^\/(en|es|ar)/, "") || "/";
  };

  const switchTo = (lang) => {
    const pagePath = getPagePath();
    if (lang === "fr") {
      navigate(pagePath);
    } else {
      navigate(`/${lang}${pagePath === "/" ? "" : pagePath}`);
    }
  };

  return (
    <div className="lang-switcher">
      {LANGS.map((lang) => (
        <button
          key={lang.code}
          className={`lang-btn ${currentLang === lang.code ? "lang-btn--active" : ""}`}
          onClick={() => switchTo(lang.code)}
          aria-label={`Switch to ${lang.code.toUpperCase()}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
