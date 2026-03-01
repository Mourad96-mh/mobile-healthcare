import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Hero from "../UI/Hero";
import ServicesView from "../ServicesView";

const Prelevement = () => {
  const { t } = useTranslation();

  const handleWhatsAppConversion = (url) => {
    if (typeof window.gtag_report_conversion === "function") {
      window.gtag_report_conversion(url);
    } else {
      window.location = url;
    }
  };

  return (
    <section className="prelevement">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t("prelevement.meta.title")}</title>
        <meta name="description" content={t("prelevement.meta.description")} />
        <link
          rel="canonical"
          href="https://www.mobile-healthcare.org/prelevement-a-domicile"
        />
      </Helmet>
      <h1 className="heading-primary center-text u-margin-bottom-medium u-margin-top-big">
        {t("prelevement.h1")}
      </h1>

      <Hero
        h2={t("prelevement.hero.h2")}
        h5={t("prelevement.hero.h5")}
        className="prelevement__hero"
      />
      <div className="container">
        <div className="prelevement__def">
          <h2 className="secondary-heading center-text u-margin-bottom-medium">
            {t("prelevement.intro.title")}
          </h2>
          <p>{t("prelevement.intro.p1")}</p>
          <p>{t("prelevement.intro.p2")}</p>
        </div>

        <div className="prelevement__content">
          <div className="prelevement__content--col-1">
            <h5 className="u-margin-bottom-small">
              {t("prelevement.section1.subtitle")}
            </h5>
            <h2 className="secondary-heading">
              {t("prelevement.section1.title")}
            </h2>
            <p>{t("prelevement.section1.p1")}</p>
            <p>{t("prelevement.section1.p2")}</p>
            <Link
              className="btn u-margin-top-medium"
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
              src="/test-sanguin--1.avif"
              alt={t("img.bloodTest1")}
              loading="lazy"
            />
          </div>
        </div>
        <div className="prelevement__content">
          <div className="prelevement__content--col-2">
            <img
              src="/test-sanguin--2.avif"
              alt={t("img.bloodTest2")}
              loading="lazy"
            />
          </div>
          <div className="prelevement__content--col-1">
            <h5 className="u-margin-bottom-small">
              {t("prelevement.section2.subtitle")}
            </h5>
            <h2 className="secondary-heading">
              {t("prelevement.section2.title")}
            </h2>
            <p>{t("prelevement.section2.p")}</p>
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
            <h5>{t("prelevement.section3.subtitle")}</h5>
            <h2 className="secondary-heading">
              {t("prelevement.section3.title")}
            </h2>
            <ul className="list">
              <li>&mdash; {t("prelevement.section3.item1")}</li>
              <li>
                &mdash; {t("prelevement.section3.item2_start")}&nbsp;
                <Link
                  className="services-link"
                  to="https://wa.me/+212696964341"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("prelevement.section3.item2_link")}
                </Link>
                {t("prelevement.section3.item2_end")}
              </li>
              <li>&mdash; 👩‍⚕️ <strong>{t("prelevement.section3.item3")}</strong></li>
              <li>&mdash; ⏳ <strong>{t("prelevement.section3.item4")}</strong></li>
            </ul>
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
              src="/test-sanguin--3.avif"
              alt={t("img.bloodTest3")}
              loading="lazy"
            />
          </div>
        </div>
        <ServicesView />
      </div>
    </section>
  );
};

export default Prelevement;
