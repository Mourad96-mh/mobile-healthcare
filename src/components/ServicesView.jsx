import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLangPrefix } from "../hooks/useLangPrefix";

const ServicesView = () => {
  const { t } = useTranslation();
  const prefix = useLangPrefix();

  const services = [
    {
      img: "/consultation-a-domicile.avif",
      alt: t("img.consultationService"),
      title: t("servicesView.consultation.title"),
      p: t("servicesView.consultation.p"),
      to: `${prefix}/consultation-a-domicile`,
    },
    {
      img: "/ambulance.avif",
      alt: t("img.transportService"),
      title: t("servicesView.transport.title"),
      p: t("servicesView.transport.p"),
      to: `${prefix}/transport-sanitaire`,
    },
    {
      img: "/prelevement.avif",
      alt: t("img.bloodCollection"),
      title: t("servicesView.prelevement.title"),
      p: t("servicesView.prelevement.p"),
      to: `${prefix}/prelevement-a-domicile`,
    },
    {
      img: "/geriatrie-3.avif",
      alt: t("img.geriatrics"),
      title: t("servicesView.geriatrie.title"),
      p: t("servicesView.geriatrie.p"),
      to: `${prefix}/soins-infirmiers`,
    },
    {
      img: "/tele-consultation.avif",
      alt: t("img.teleconsultationService"),
      title: t("servicesView.teleconsultation.title"),
      p: t("servicesView.teleconsultation.p"),
      to: `${prefix}/consultation-a-domicile`,
    },
    {
      img: "/evenement.avif",
      alt: t("img.eventCoverage"),
      title: t("servicesView.evenement.title"),
      p: t("servicesView.evenement.p"),
      to: `${prefix}/contact`,
    },
    {
      img: "/funebres.avif",
      alt: t("img.funeralService"),
      title: t("servicesView.funebres.title"),
      p: t("servicesView.funebres.p"),
      to: `${prefix}/contact`,
    },
    {
      img: "/contre-visite.avif",
      alt: "Doctor and patient.",
      title: t("servicesView.contreVisite.title"),
      p: t("servicesView.contreVisite.p"),
      to: `${prefix}/contact`,
    },
    {
      img: "/formation-secourisme.avif",
      alt: t("img.firstAid"),
      title: t("servicesView.formation.title"),
      p: t("servicesView.formation.p"),
      to: `${prefix}/contact`,
    },
  ];

  return (
    <section className="all-services">
      <h4 className="u-margin-bottom-medium center-text">
        {t("servicesView.heading")}
      </h4>
      <h1 className="heading-primary center-text">{t("servicesView.title")}</h1>
      <div className="all-services__content">
        <ul className="all-services__list">
          {services.map((service) => (
            <li key={service.img} className="all-services__item">
              <img src={service.img} alt={service.alt} />
              <div className="all-services__item--info">
                <h4 className="u-margin-bottom-small">{service.title}</h4>
                <p className="u-margin-bottom-medium">{service.p}</p>
                <div className="all-services__item--link">
                  <Link to={service.to} className="services-link">
                    {t("servicesView.readMore")}
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesView;
