import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HiOutlineHeart } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

import ServicesView from "../ServicesView";
import Hero from "../UI/Hero";
import LayoutContent from "../UI/LayoutContent";
import { useLangPrefix } from "../../hooks/useLangPrefix";

const HomePage = () => {
  const { t } = useTranslation();
  const prefix = useLangPrefix();

  const handleWhatsAppConversion = (url) => {
    if (typeof window.gtag_report_conversion === "function") {
      window.gtag_report_conversion(url);
    } else {
      window.location = url;
    }
  };

  return (
    <div className="home">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={t("home.meta.description")} />
        <title>{t("home.meta.title")}</title>
        <link rel="canonical" href="https://www.mobile-healthcare.org/" />
      </Helmet>
      <Hero className="hero-section" h2={t("home.hero")} />
      <div className="container">
        <section className="prelevement__def">
          <h5 className="u-margin-bottom-small">Mobile Healthcare</h5>
          <h2 className="secondary-heading u-margin-bottom-medium">
            {t("home.section1.title")}
          </h2>
          <p>
            {t("home.section1.p1_start")}
            <Link to={`${prefix}/teleconsultation`} className="services-link">
              {t("home.section1.teleconsultation")}
            </Link>
            <Link to={`${prefix}/consultation-a-domicile`} className="services-link">
              {t("home.section1.consultationDomicile")}
            </Link>
            <Link to={`${prefix}/transport-sanitaire`} className="services-link">
              {t("home.section1.sosUrgences")}
            </Link>
            <Link to={`${prefix}/transport-sanitaire`} className="services-link">
              {t("home.section1.transportSanitaire")}
            </Link>
            <Link to={`${prefix}/prelevement-a-domicile`} className="services-link">
              {t("home.section1.prelèvementDomicile")}
            </Link>
            {t("home.section1.p1_end")}
          </p>
          <p className="u-margin-top-small">
            <strong>{t("home.section1.mission")}</strong>
          </p>
          <div className="center-text u-margin-top-medium">
            <Link
              className="btn"
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
          <div className="service-img">
            <img
              loading="lazy"
              src="/medecin-a-domicile.avif"
              alt={t("img.doctorFamily")}
            />
          </div>
        </section>

        <section className="prelevement__def">
          <h5 className="u-margin-bottom-small">Mobile Healthcare</h5>
          <h2 className="secondary-heading u-margin-bottom-medium">
            {t("home.section2.title")}
          </h2>
          <p>{t("home.section2.p")}</p>
        </section>
        <section className="nos-services">
          <h5 className="center-text u-margin-bottom-small">
            Mobile Healthcare
          </h5>
          <h2 className="secondary-heading intro-heading">
            {t("home.services.title")}
          </h2>

          <LayoutContent>
            <>
              <h5 className="u-margin-bottom-small">
                {t("home.services.teleconsultation.subtitle")}
              </h5>
              <h2 className="secondary-heading u-margin-bottom-medium">
                {t("home.services.teleconsultation.title")}
              </h2>
              <p>
                {t("home.services.teleconsultation.p")}
              </p>
              <p className="u-margin-top-small">
                <strong>
                  {t("home.services.teleconsultation.strong")}&nbsp;
                  <Link to={`${prefix}/teleconsultation`} className="services-link">
                    {t("home.services.teleconsultation.link")}
                  </Link>
                </strong>
              </p>
              <ul className="list">
                <li className="service__item">
                  <span className="service__icon">
                    <HiOutlineHeart className="icon" />
                  </span>
                  <p dangerouslySetInnerHTML={{ __html: t("home.services.teleconsultation.item1") }} />
                </li>
                <li className="service__item">
                  <span className="service__icon">
                    <HiOutlineHeart className="icon" />
                  </span>
                  <p dangerouslySetInnerHTML={{ __html: t("home.services.teleconsultation.item2") }} />
                </li>
                <li className="service__item">
                  <span className="service__icon">
                    <HiOutlineHeart className="icon" />
                  </span>
                  <p dangerouslySetInnerHTML={{ __html: t("home.services.teleconsultation.item3") }} />
                </li>
                <li className="service__item">
                  <span className="service__icon">
                    <HiOutlineHeart className="icon" />
                  </span>
                  <p dangerouslySetInnerHTML={{ __html: t("home.services.teleconsultation.item4") }} />
                </li>
              </ul>
              <div className="u-margin-top-medium">
                <Link
                  className="btn"
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
            </>
            <>
              <div className="overlay">&nbsp;</div>
              <img
                loading="lazy"
                src="/teleconsultation.avif"
                alt={t("img.teleconsultation")}
              />
            </>
          </LayoutContent>
          <LayoutContent reverse="true">
            <>
              <h4 className="u-margin-bottom-small">
                {t("home.services.transport.subtitle")}
              </h4>
              <h2 className="secondary-heading u-margin-bottom-medium">
                {t("home.services.transport.title")}
              </h2>
              <p dangerouslySetInnerHTML={{ __html: t("home.services.transport.p") }} />
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
            </>
            <>
              <div className="overlay">&nbsp;</div>
              <img
                loading="lazy"
                src="/ambulance-1.avif"
                alt={t("img.ambulance")}
              />
            </>
          </LayoutContent>
          <LayoutContent>
            <>
              <h4 className="u-margin-bottom-small">
                {t("home.services.soins.subtitle")}
              </h4>
              <h2 className="secondary-heading u-margin-bottom-medium">
                {t("home.services.soins.title")}
              </h2>
              <p dangerouslySetInnerHTML={{ __html: t("home.services.soins.p") }} />
              <Link
                className="btn u-margin-top-big"
                target="_blank"
                rel="noopener noreferrer"
                to="https://wa.me/+212696964341"
                title="Contact me on WhatsApp"
                onClick={() =>
                  handleWhatsAppConversion("https://wa.me/+212696964341")
                }
              >
                {t("common.callUs")}
              </Link>
            </>
            <>
              <div className="overlay">&nbsp;</div>
              <img
                loading="lazy"
                src="/nurse.avif"
                alt={t("img.nurseWork")}
              />
            </>
          </LayoutContent>
        </section>
        <ServicesView />
      </div>
    </div>
  );
};

export default HomePage;
