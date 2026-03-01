import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ServicesView from "../ServicesView";

const TransportSanitaire = () => {
  const { t } = useTranslation();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Transport Sanitaire - Mobile Healthcare Casablanca",
    image: "https://mobile-healthcare.org/assets/logo.png",
    url: "https://mobile-healthcare.org/transport-sanitaire",
    telephone: "+212696964341",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casablanca",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.5924501,
      longitude: -7.6043579,
    },
    openingHours: "Mo-Su 08:00-20:00",
    description:
      "Service de transport sanitaire et ambulance à Casablanca pour patients, transferts hospitaliers, consultations, et urgences. Mobile Healthcare garantit un transport sécurisé et rapide.",
    keywords: "transport sanitaire, ambulance Casablanca, transport médicalisé",
    areaServed: {
      "@type": "Place",
      name: "Casablanca",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Transport Sanitaire",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Transport médicalisé à domicile",
            description:
              "Ambulance à domicile à Casablanca pour les patients nécessitant un transfert médicalisé. Sécurité, professionnalisme et réactivité garanties.",
            areaServed: {
              "@type": "Place",
              name: "Casablanca",
            },
          },
        },
      ],
    },
  };

  const handleWhatsAppConversion = (url) => {
    if (typeof window.gtag_report_conversion === "function") {
      window.gtag_report_conversion(url);
    } else {
      window.location = url;
    }
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t("transport.meta.title")}</title>
        <meta name="description" content={t("transport.meta.description")} />
        <link
          rel="canonical"
          href="https://www.mobile-healthcare.org/transport-sanitaire"
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <h1 className="heading-primary center-text u-margin-top-big">
        {t("transport.h1")}
      </h1>
      <div className="container">
        <div className="prelevement__def">
          <h2 className="secondary-heading center-text u-margin-bottom-medium">
            {t("transport.intro.title")}
          </h2>
          <p>{t("transport.intro.p1")}</p>
          <p>{t("transport.intro.p2")}</p>
        </div>

        <div className="prelevement__content">
          <div className="prelevement__content--col-1">
            <h5 className="u-margin-bottom-small">
              {t("transport.section1.subtitle")}
            </h5>
            <h2 className="secondary-heading">
              {t("transport.section1.title")}
            </h2>
            <p>{t("transport.section1.p1")}</p>
            <p>{t("transport.section1.p2")}</p>
            <p>{t("transport.section1.p3")}</p>
            <Link
              className="btn u-margin-top-big"
              to="https://wa.me/+212696964341"
              title="Contact me on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                handleWhatsAppConversion("https://wa.me/+212696964341")
              }
            >
              {t("common.callUs")}
            </Link>
          </div>
          <div className="prelevement__content--col-2">
            <img
              src="/ambulance--1.avif"
              alt={t("img.ambulanceEmergency")}
              loading="lazy"
            />
          </div>
        </div>
        <div className="prelevement__content">
          <div className="prelevement__content--col-2">
            <img
              src="/ambulance-1.avif"
              alt={t("img.ambulanceCall")}
              loading="lazy"
            />
          </div>
          <div className="prelevement__content--col-1">
            <h5 className="u-margin-bottom-small">
              {t("transport.section2.subtitle")}
            </h5>
            <h2 className="secondary-heading center-text u-margin-bottom-medium">
              {t("transport.section2.title")}
            </h2>
            <p>{t("transport.section2.p1")}</p>
            <ul className="prelevement__advantages">
              <li><p>{t("transport.section2.item1")}</p></li>
              <li><p>{t("transport.section2.item2")}</p></li>
              <li><p>{t("transport.section2.item3")}</p></li>
            </ul>
            <p>{t("transport.section2.p2")}</p>
            <Link
              className="btn u-margin-top-big"
              to="https://wa.me/+212696964341"
              title="Contact me on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                handleWhatsAppConversion("https://wa.me/+212696964341")
              }
            >
              {t("common.callUs")}
            </Link>
          </div>
        </div>
        <div className="prelevement__content">
          <div className="prelevement__content--col-1">
            <h5 className="u-margin-bottom-small">
              {t("transport.section3.subtitle")}
            </h5>
            <h2 className="secondary-heading">
              {t("transport.section3.title")}
            </h2>
            <p>{t("transport.section3.p1")}</p>
            <ul className="prelevement__advantages u-margin-bottom-small">
              <li>{t("transport.section3.item1")}</li>
              <li>{t("transport.section3.item2")}</li>
              <li>{t("transport.section3.item3")}</li>
            </ul>
            <p>{t("transport.section3.p2")}</p>
            <Link
              className="btn u-margin-top-big"
              to="https://wa.me/+212696964341"
              title="Contact me on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                handleWhatsAppConversion("https://wa.me/+212696964341")
              }
            >
              {t("common.callUs")}
            </Link>
          </div>
          <div className="prelevement__content--col-2">
            <img
              src="/ambulance-equipee.avif"
              alt={t("img.ambulanceEquipped")}
              loading="lazy"
            />
          </div>
        </div>
        <div className="prelevement__content">
          <div className="prelevement__content--col-2">
            <img
              src="/ambulance-stuff.avif"
              alt={t("img.ambulanceStaff")}
              loading="lazy"
            />
          </div>
          <div className="prelevement__content--col-1">
            <h5 className="u-margin-bottom-small">
              {t("transport.section4.subtitle")}
            </h5>
            <h2 className="secondary-heading">
              {t("transport.section4.title")}
            </h2>
            <p>{t("transport.section4.p")}</p>
            <Link
              className="btn u-margin-top-big"
              to="https://wa.me/+212696964341"
              title="Contact me on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                handleWhatsAppConversion("https://wa.me/+212696964341")
              }
            >
              {t("common.callUs")}
            </Link>
          </div>
        </div>
        <div className="prelevement__content">
          <div className="prelevement__content--col-1">
            <h5 className="u-margin-bottom-small">
              {t("transport.section5.subtitle")}
            </h5>
            <h2 className="secondary-heading">
              {t("transport.section5.title")}
            </h2>
            <p>{t("transport.section5.p1")}</p>
            <ul className="prelevement__advantages u-margin-bottom-small">
              <li>{t("transport.section5.item1")}</li>
              <li>{t("transport.section5.item2")}</li>
              <li>{t("transport.section5.item3")}</li>
              <li>{t("transport.section5.item4")}</li>
            </ul>
            <p>{t("transport.section5.p2")}</p>
            <Link
              className="btn u-margin-top-big"
              to="https://wa.me/+212696964341"
              target="_blank"
              rel="noopener noreferrer"
              title="Contact me on WhatsApp"
              onClick={() =>
                handleWhatsAppConversion("https://wa.me/+212696964341")
              }
            >
              {t("common.callUs")}
            </Link>
          </div>
          <div className="prelevement__content--col-2">
            <img
              src="/premium-ambulance.avif"
              alt={t("img.premiumAmbulance")}
              loading="lazy"
            />
          </div>
        </div>

        <div className="prelevement__def">
          <h2 className="secondary-heading center-text u-margin-bottom-medium">
            {t("transport.partenaires.title")}
          </h2>
          <p>{t("transport.partenaires.p1")}</p>
          <ul className="prelevement__advantages u-margin-bottom-small">
            <li>{t("transport.partenaires.item1")}</li>
            <li>{t("transport.partenaires.item2")}</li>
            <li>{t("transport.partenaires.item3")}</li>
          </ul>
          <p>{t("transport.partenaires.p2")}</p>
        </div>

        <ServicesView />
      </div>
    </div>
  );
};

export default TransportSanitaire;
