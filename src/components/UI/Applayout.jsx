import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import MainHeader from "./MainHeader";
import Footer from "./Footer";
import FAQ from "../FAQ";
import LanguageSwitcher from "./LanguageSwitcher";
import { captureGCLID } from "../../utils/utils";

const AppLayout = () => {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      i18n.changeLanguage("en");
    } else if (pathname.startsWith("/es")) {
      i18n.changeLanguage("es");
    } else if (pathname.startsWith("/ar")) {
      i18n.changeLanguage("ar");
    } else {
      i18n.changeLanguage("fr");
    }
  }, [pathname, i18n]);

  useEffect(() => {
    fetch("/log-ip.php")
      .then((response) => response.text())
      .catch((error) => console.error("Error logging IP:", error));
  }, []);

  useEffect(() => {
    console.log("captureGCLID");
    captureGCLID();
  }, []);

  const lang = pathname.startsWith("/en")
    ? "en"
    : pathname.startsWith("/es")
    ? "es"
    : pathname.startsWith("/ar")
    ? "ar"
    : "fr";

  const isRtl = lang === "ar";

  const baseUrl = "https://www.mobile-healthcare.org";
  const pagePath = pathname.replace(/^\/(en|es|ar)/, "") || "/";

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mobile Healthcare",
    image: "https://mobile-healthcare.org/logo.avif",
    "@id": "https://mobile-healthcare.org",
    url: "https://mobile-healthcare.org",
    telephone: "+212696964341",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Boulevard Zerktouni",
      addressLocality: "Casablanca",
      postalCode: "20000",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.5924501,
      longitude: -7.6043579,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    description:
      "Mobile Healthcare propose des services de soins infirmiers à domicile à Casablanca : pansements, injections, perfusions et transport médicalisé 24h/24 et 7j/7.",
    serviceArea: {
      "@type": "Place",
      name: "Casablanca",
    },
    services: [
      {
        "@type": "MedicalService",
        name: "Infirmier à domicile",
        description:
          "Service d'infirmier à domicile à Casablanca pour les soins médicaux et infirmiers professionnels.",
      },
      {
        "@type": "MedicalService",
        name: "Consultation médicale à domicile",
        description:
          "Consultations médicales à domicile avec un médecin qualifié, disponibles 24h/24 et 7j/7.",
      },
      {
        "@type": "MedicalService",
        name: "Transport médicalisé",
        description:
          "Transport médicalisé sécurisé pour urgences et transferts hospitaliers.",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <html lang={lang} dir={isRtl ? "rtl" : "ltr"} />
        <link
          rel="alternate"
          hrefLang="fr"
          href={`${baseUrl}${pagePath === "/" ? "/" : pagePath}`}
        />
        <link
          rel="alternate"
          hrefLang="en"
          href={`${baseUrl}/en${pagePath === "/" ? "" : pagePath}`}
        />
        <link
          rel="alternate"
          hrefLang="es"
          href={`${baseUrl}/es${pagePath === "/" ? "" : pagePath}`}
        />
        <link
          rel="alternate"
          hrefLang="ar"
          href={`${baseUrl}/ar${pagePath === "/" ? "" : pagePath}`}
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${baseUrl}${pagePath === "/" ? "/" : pagePath}`}
        />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      <MainHeader />
      <LanguageSwitcher />
      <main>
        <Outlet />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
