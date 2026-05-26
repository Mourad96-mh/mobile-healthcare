import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ServicesView from "../ServicesView";
import Hero from "../UI/Hero";
import LayoutContent from "../UI/LayoutContent";

const ConsultationDomicile = () => {
  const { t } = useTranslation();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.mobile-healthcare.org/" },
      { "@type": "ListItem", position: 2, name: "Consultation à Domicile", item: "https://www.mobile-healthcare.org/consultation-a-domicile" },
    ],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Consultation à domicile - Mobile Healthcare Casablanca",
    image: "https://www.mobile-healthcare.org/logo.avif",
    url: "https://www.mobile-healthcare.org/consultation-a-domicile",
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
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    medicalSpecialty: "GeneralPractice",
    description: t("consultation.meta.description"),
    areaServed: {
      "@type": "Place",
      name: "Casablanca",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Consultation à domicile",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Consultation médicale à domicile",
            description: t("consultation.meta.description"),
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
    <section className="consultation-domicile">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t("consultation.meta.title")}</title>
        <meta name="description" content={t("consultation.meta.description")} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={t("consultation.meta.title")} />
        <meta property="og:description" content={t("consultation.meta.description")} />
        <meta property="og:image" content="https://www.mobile-healthcare.org/doc-at-home.avif" />
        <meta name="twitter:title" content={t("consultation.meta.title")} />
        <meta name="twitter:description" content={t("consultation.meta.description")} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <h1 className="heading-primary center-text u-margin-bottom-medium">
        {t("consultation.h1")}
      </h1>
      <Hero
        h5={t("consultation.hero.h5")}
        h2={t("consultation.hero.h2")}
        className="consultation__hero"
      />
      <div className="container">
        <div className="prelevement__def">
          <h2 className="secondary-heading center-text u-margin-bottom-medium">
            {t("consultation.intro.title")}
          </h2>
          <p>{t("consultation.intro.p")}</p>
          <div>
            <div className="center-text">
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
          <div className="service-img">
            <img src="/doc-at-home.avif" alt={t("img.docAtHome")} loading="lazy" />
          </div>
        </div>
        <LayoutContent reverse="true">
          <>
            <div>
              <h5>{t("consultation.section1.subtitle")}</h5>
              <h2 className="secondary-heading u-margin-bottom-small">
                {t("consultation.section1.title")}
              </h2>
              <p>{t("consultation.section1.p")}</p>
            </div>
          </>
          <>
            <div>
              <img
                loading="lazy"
                src="/ordonance.avif"
                alt={t("img.prescription")}
              />
            </div>
          </>
        </LayoutContent>
        <div className="prelevement__def">
          <h5>{t("consultation.section2.subtitle")}</h5>
          <h2 className="secondary-heading u-margin-bottom-medium">
            {t("consultation.section2.title")}
          </h2>
          <p>{t("consultation.section2.p")}</p>
        </div>
        <LayoutContent>
          <>
            <div>
              <h5>{t("consultation.section3.subtitle")}</h5>
              <h2 className="secondary-heading u-margin-bottom-small">
                {t("consultation.section3.title")}
              </h2>
              <p>{t("consultation.section3.p")}</p>
            </div>
          </>
          <>
            <img
              src="/suivi-medicale.avif"
              alt={t("img.medicalFollowup")}
              loading="lazy"
            />
          </>
        </LayoutContent>
        <LayoutContent reverse="true">
          <>
            <div>
              <h5>{t("consultation.urgences.subtitle")}</h5>
              <h2 className="secondary-heading u-margin-bottom-small">
                {t("consultation.urgences.title")}
              </h2>
              <p>{t("consultation.urgences.p")}</p>
              <div>
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
          </>
          <>
            <img
              src="/geriatrie.avif"
              alt={t("img.homeEmergency")}
              loading="lazy"
            />
          </>
        </LayoutContent>
        <ServicesView />
      </div>
    </section>
  );
};

export default ConsultationDomicile;
