import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Hero from "../UI/Hero";
import LayoutContent from "../UI/LayoutContent";
import OperationZones from "../OperationZones";

const SoinsInfirmiers = () => {
  const { t } = useTranslation();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Mobile Healthcare",
    url: "https://www.mobile-healthcare.org/soins-infirmiers",
    logo: "https://www.mobile-healthcare.org/logo.avif",
    image: "https://www.mobile-healthcare.org/nurse-at-home.avif",
    description:
      "Mobile Healthcare propose un infirmier à domicile à Casablanca, 7j/7, pour des soins infirmiers professionnels : pansements, injections, perfusions, pose de sondes, etc.",
    telephone: "+212696964341",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casablanca",
      addressCountry: "MA",
    },
    areaServed: {
      "@type": "Place",
      name: "Casablanca",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.5924501,
      longitude: -7.6043579,
    },
    openingHoursSpecification: {
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
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: "Soins Infirmiers à Domicile",
          procedureType: "TherapeuticProcedure",
          description:
            "Soins infirmiers à domicile incluant les pansements, injections, perfusions, pose de sonde urinaire et gastrique, gestion de la nutrition parentérale, et soins post-opératoires.",
        },
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+212696964341",
      contactType: "Customer Service",
      availableLanguage: ["English", "French", "Arabic"],
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
        <title>{t("soins.meta.title")}</title>
        <meta name="description" content={t("soins.meta.description")} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mobile Healthcare" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://www.mobile-healthcare.org/soins-infirmiers"
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <h1 className="heading-primary center-text u-margin-bottom-medium u-margin-top-big">
        {t("soins.h1")}
      </h1>
      <Hero
        h2={t("soins.hero.h2")}
        h5={t("soins.hero.h5")}
        className="soins__hero"
      />
      <div className="container">
        <div className="prelevement__def">
          <h2 className="secondary-heading center-text u-margin-bottom-medium">
            {t("soins.intro.title")}
          </h2>

          <section>
            <p>{t("soins.intro.p1")}</p>
            <p>{t("soins.intro.p2")}</p>
            <p>
              <strong>{t("soins.intro.p3_start")}</strong>{" "}
              <span className="highlight">
                {t("soins.intro.p3_highlight")}{" "}
                <strong>{t("soins.intro.p3_number")}</strong>
              </span>
            </p>
          </section>

          <div>
            <div className="center-text">
              <Link
                className="btn u-margin-top-big"
                to="https://wa.me/+212696964341"
                title="Contact me on WhatsApp"
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
            <img
              src="/nurse-at-home.avif"
              title="infirmier-a-domicile-casablanca"
              alt={t("img.nurseAtHome")}
            />
          </div>
        </div>
        <LayoutContent>
          <>
            <section className="u-margin-bottom-medium">
              <h4 className="u-margin-bottom-small">{t("soins.pansement.title")}</h4>
              <p>{t("soins.pansement.p1")}</p>
              <p>{t("soins.pansement.p2")}</p>
              <p>
                {t("soins.pansement.p3").split("Contactez-nous")[0]}
                <Link className="services-link" to="tel:+212696964341">
                  {t("common.contactUs")}
                </Link>
              </p>
            </section>

            <section>
              <h4 className="u-margin-bottom-small">{t("soins.sonde.title")}</h4>
              <p>{t("soins.sonde.p1")}</p>
              <p>{t("soins.sonde.p2")}</p>
              <p>
                {t("soins.sonde.p3").split("Contactez-nous")[0].split("Contact us")[0].split("Contáctenos")[0]}
                <Link className="services-link" to="tel:+212696964341">
                  {t("common.contactUs")}
                </Link>
              </p>
            </section>
          </>
          <>
            <div className="overlay">&nbsp;</div>
            <img
              src="/grid-of-4-imgs.avif"
              title="infirmier-a-domicile-casablanca"
              alt={t("img.nursingGrid")}
              loading="lazy"
            />
          </>
        </LayoutContent>
        <LayoutContent reverse="true">
          <>
            <section className="u-margin-bottom-medium">
              <h4 className="u-margin-bottom-small">{t("soins.garde.title")}</h4>
              <p>{t("soins.garde.p")}</p>
            </section>
            <section>
              <h4 className="u-margin-bottom-small">{t("soins.accompagnement.title")}</h4>
              <p>{t("soins.accompagnement.p")}</p>
            </section>
            <p className="u-margin-top-medium">
              {t("soins.garde.cta").split("Contactez-nous")[0].split("Contact us")[0].split("Contáctenos")[0]}
              <Link className="services-link" to="tel:+212696964341">
                {t("common.contactUs")}
              </Link>
            </p>
          </>
          <>
            <div className="overlay"></div>
            <img
              src="/garde-domicile.avif"
              title="infirmier-a-domicile-casablanca"
              alt={t("img.homeCare")}
              loading="lazy"
            />
          </>
        </LayoutContent>
        <LayoutContent>
          <>
            <section className="u-margin-bottom-medium">
              <h4 className="u-margin-bottom-small">{t("soins.injections.title")}</h4>
              <p>{t("soins.injections.p")}</p>
              <ul className="list u-margin-top-small">
                <li dangerouslySetInnerHTML={{ __html: t("soins.injections.item1") }} />
                <li dangerouslySetInnerHTML={{ __html: t("soins.injections.item2") }} />
                <li dangerouslySetInnerHTML={{ __html: t("soins.injections.item3") }} />
              </ul>
            </section>
            <section>
              <h4 className="u-margin-bottom-small">{t("soins.perfusions.title")}</h4>
              <p>{t("soins.perfusions.p")}</p>
              <ul className="list u-margin-top-small">
                <li dangerouslySetInnerHTML={{ __html: t("soins.perfusions.item1") }} />
                <li dangerouslySetInnerHTML={{ __html: t("soins.perfusions.item2") }} />
                <li dangerouslySetInnerHTML={{ __html: t("soins.perfusions.item3") }} />
              </ul>
            </section>
            <p className="u-margin-top-medium">
              <strong>
                {t("soins.perfusions.cta").split("Contactez-nous")[0].split("Contact us")[0].split("Contáctenos")[0]}
              </strong>{" "}
              <Link className="services-link" to="tel:+212696964341">
                {t("common.contactUs")}
              </Link>
            </p>
          </>
          <>
            <div className="overlay"></div>
            <img
              src="/injection-a-domicile.avif"
              title="injection-a-domicile-casablanca"
              alt={t("img.injection")}
              loading="lazy"
            />
          </>
        </LayoutContent>
        <LayoutContent reverse="true">
          <>
            <section className="u-margin-bottom-medium">
              <h4 className="u-margin-bottom-small">{t("soins.hygiene.title")}</h4>
              <p>{t("soins.hygiene.p")}</p>
              <ul className="list u-margin-top-small">
                <li dangerouslySetInnerHTML={{ __html: t("soins.hygiene.item1") }} />
                <li dangerouslySetInnerHTML={{ __html: t("soins.hygiene.item2") }} />
                <li dangerouslySetInnerHTML={{ __html: t("soins.hygiene.item3") }} />
              </ul>
            </section>
            <section>
              <h4 className="u-margin-bottom-small">{t("soins.ablation.title")}</h4>
              <p>{t("soins.ablation.p")}</p>
              <ul className="list u-margin-top-small">
                <li dangerouslySetInnerHTML={{ __html: t("soins.ablation.item1") }} />
                <li dangerouslySetInnerHTML={{ __html: t("soins.ablation.item2") }} />
              </ul>
            </section>
            <p className="u-margin-top-medium">
              <strong>
                {t("soins.ablation.cta").split("Contactez-nous")[0].split("Contact us")[0].split("Contáctenos")[0]}
              </strong>{" "}
              <Link className="services-link" to="tel:+212696964341">
                {t("common.contactUs")}
              </Link>
            </p>
          </>
          <>
            <div className="overlay"></div>
            <img
              src="/ablation-fils.avif"
              title="infirmier-a-domicile-casablanca"
              alt={t("img.ablation")}
              loading="lazy"
            />
          </>
        </LayoutContent>
        <div className="prelevement__def">
          <h2 className="secondary-heading center-text u-margin-bottom-medium">
            {t("soins.contact.title")}
          </h2>
          <section>
            <p>{t("soins.contact.p1")}</p>
            <p>{t("soins.contact.p2")}</p>
            <p>
              {t("soins.contact.p3")}{" "}
              <Link to="tel:+212696964341" className="services-link">
                +212 6 96 96 43 41
              </Link>
            </p>
            <p>{t("soins.contact.p4")}</p>
          </section>
          <div className="center-text">
            <Link
              className="btn u-margin-top-big"
              to="https://wa.me/+212696964341"
              title="Contactez-nous sur WhatsApp"
              rel="noopener noreferrer"
              onClick={() =>
                handleWhatsAppConversion("https://wa.me/+212696964341")
              }
            >
              {t("common.callUs")}
            </Link>
          </div>
        </div>
        <div className="nos-services prelevement__def">
          <h2 className="secondary-heading center-text u-margin-bottom-medium">
            {t("soins.nosServices.title")}
          </h2>
          <ul className="services-list">
            <li className="service-item">
              <img
                src="/injection-a-domicile.avif"
                title="injection-a-domicile-casablanca"
                alt={t("img.injection")}
              />
              <div className="service-details">
                <h5 className="u-margin-bottom-small">
                  {t("soins.nosServices.injection.title")}
                </h5>
                <p>{t("soins.nosServices.injection.p")}</p>
                <Link
                  className="btn center-text"
                  to="https://wa.me/+212696964341"
                  title="Contactez-nous sur WhatsApp"
                  rel="noopener noreferrer"
                  onClick={() =>
                    handleWhatsAppConversion("https://wa.me/+212696964341")
                  }
                >
                  {t("common.callUs")}
                </Link>
              </div>
            </li>
            <li className="service-item">
              <img
                src="/pansement-change.avif"
                title="changement-pansement-a-domicile"
                alt={t("img.dressing")}
              />
              <div className="service-details">
                <h5 className="u-margin-bottom-small">
                  {t("soins.nosServices.pansement.title")}
                </h5>
                <p>{t("soins.nosServices.pansement.p")}</p>
                <Link
                  className="btn center-text"
                  to="https://wa.me/+212696964341"
                  title="Contactez-nous sur WhatsApp"
                  rel="noopener noreferrer"
                  onClick={() =>
                    handleWhatsAppConversion("https://wa.me/+212696964341")
                  }
                >
                  {t("common.callUs")}
                </Link>
              </div>
            </li>
            <li className="service-item">
              <img
                src="/perfusion-service.avif"
                title="perfusion-a-domicile"
                alt={t("img.infusion")}
              />
              <div className="service-details">
                <h5 className="u-margin-bottom-small">
                  {t("soins.nosServices.perfusion.title")}
                </h5>
                <p>{t("soins.nosServices.perfusion.p")}</p>
                <Link
                  className="btn center-text"
                  to="https://wa.me/+212696964341"
                  title="Contactez-nous sur WhatsApp"
                  rel="noopener noreferrer"
                  onClick={() =>
                    handleWhatsAppConversion("https://wa.me/+212696964341")
                  }
                >
                  {t("common.callUs")}
                </Link>
              </div>
            </li>
            <li className="service-item">
              <img src="/prelevement.avif" alt={t("img.bloodSample")} />
              <div className="service-details">
                <h5 className="u-margin-bottom-small">
                  {t("soins.nosServices.prelevement.title")}
                </h5>
                <p>{t("soins.nosServices.prelevement.p")}</p>
                <Link
                  className="btn center-text"
                  to="https://wa.me/+212696964341"
                  title="Contactez-nous sur WhatsApp"
                  rel="noopener noreferrer"
                  onClick={() =>
                    handleWhatsAppConversion("https://wa.me/+212696964341")
                  }
                >
                  {t("common.callUs")}
                </Link>
              </div>
            </li>
            <li className="service-item">
              <img src="/lavement-rectal.avif" alt={t("img.enema")} />
              <div className="service-details">
                <h5 className="u-margin-bottom-small">
                  {t("soins.nosServices.lavement.title")}
                </h5>
                <p>{t("soins.nosServices.lavement.p")}</p>
                <Link
                  className="btn center-text"
                  to="https://wa.me/+212696964341"
                  title="Contactez-nous sur WhatsApp"
                  rel="noopener noreferrer"
                  onClick={() =>
                    handleWhatsAppConversion("https://wa.me/+212696964341")
                  }
                >
                  {t("common.callUs")}
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <section className="prelevement__def">
          <h2 className="secondary-heading center-text u-margin-bottom-medium">
            {t("soins.zones.title")}
          </h2>
          <p>{t("soins.zones.p1")}</p>
          <p>{t("soins.zones.p2")}</p>
          <p>{t("soins.zones.p3")}</p>
        </section>
      </div>
      <OperationZones />
    </div>
  );
};

export default SoinsInfirmiers;
