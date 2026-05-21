import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import MainHeader from "./MainHeader";
import Footer from "./Footer";
import FAQ from "../FAQ";
import { captureGCLID } from "../../utils/utils";

const AppLayout = () => {
  const { i18n, t } = useTranslation();
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
    image: "https://www.mobile-healthcare.org/logo.avif",
    "@id": "https://www.mobile-healthcare.org",
    url: "https://www.mobile-healthcare.org",
    telephone: "+212696964341",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Boulevard Zerktouni",
      addressLocality: "Casablanca",
      addressRegion: "Grand Casablanca-Settat",
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
    description: t("home.meta.description"),
    serviceArea: [
      { "@type": "Place", "name": "Casablanca" },
      { "@type": "Place", "name": "Maarif, Casablanca" },
      { "@type": "Place", "name": "Anfa, Casablanca" },
      { "@type": "Place", "name": "Ain Diab, Casablanca" },
      { "@type": "Place", "name": "Ain Sebaâ, Casablanca" },
      { "@type": "Place", "name": "Hay Hassani, Casablanca" },
      { "@type": "Place", "name": "Oasis, Casablanca" },
      { "@type": "Place", "name": "Sidi Maârouf, Casablanca" },
      { "@type": "Place", "name": "Bourgogne, Casablanca" },
      { "@type": "Place", "name": "Belvédère, Casablanca" },
      { "@type": "Place", "name": "Racine, Casablanca" },
      { "@type": "Place", "name": "Gauthier, Casablanca" },
      { "@type": "Place", "name": "Mers Sultan, Casablanca" },
      { "@type": "Place", "name": "Derb Sultan, Casablanca" },
      { "@type": "Place", "name": "Hay Mohammadi, Casablanca" },
      { "@type": "Place", "name": "Ben Msik, Casablanca" },
      { "@type": "Place", "name": "Sbata, Casablanca" },
      { "@type": "Place", "name": "Sidi Bernoussi, Casablanca" },
      { "@type": "Place", "name": "Sidi Moumen, Casablanca" },
      { "@type": "Place", "name": "Val Fleuri, Casablanca" },
      { "@type": "Place", "name": "CIL, Casablanca" },
      { "@type": "Place", "name": "Bouskoura, Casablanca" },
      { "@type": "Place", "name": "Tamaris, Casablanca" },
      { "@type": "Place", "name": "El Oulfa, Casablanca" },
      { "@type": "Place", "name": "Lissasfa, Casablanca" },
      { "@type": "Place", "name": "Dar Bouazza, Casablanca" },
      { "@type": "Place", "name": "Roches Noires, Casablanca" },
      { "@type": "Place", "name": "Californie, Casablanca" },
    ],
    services: [
      {
        "@type": "MedicalService",
        name: t("nav.soins"),
        description: t("soins.meta.description"),
      },
      {
        "@type": "MedicalService",
        name: t("nav.consultation"),
        description: t("consultation.meta.description"),
      },
      {
        "@type": "MedicalService",
        name: t("nav.transport"),
        description: t("transport.meta.description"),
      },
    ],
  };

  return (
    <>
      <Helmet>
        <html lang={lang} dir={isRtl ? "rtl" : "ltr"} />
        <link
          rel="canonical"
          href={`${baseUrl}${pathname}`}
        />
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
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}${pathname}`} />
        <meta property="og:site_name" content="Mobile Healthcare" />
        <meta property="og:image" content={`${baseUrl}/logo.avif`} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta
          property="og:locale"
          content={lang === "ar" ? "ar_MA" : lang === "en" ? "en_US" : lang === "es" ? "es_ES" : "fr_MA"}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${baseUrl}/logo.avif`} />
        <meta name="geo.region" content="MA-07" />
        <meta name="geo.placename" content="Casablanca, Maroc" />
        <meta name="geo.position" content="33.5924501;-7.6043579" />
        <meta name="ICBM" content="33.5924501, -7.6043579" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      <MainHeader />
      <main className="main-content">
        <Outlet />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
