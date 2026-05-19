import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLangPrefix } from "../../hooks/useLangPrefix";

import { HiOutlineMapPin } from "react-icons/hi2";
import { HiOutlinePhone } from "react-icons/hi2";
import { HiOutlineEnvelope } from "react-icons/hi2";

const Footer = () => {
  const { t } = useTranslation();
  const prefix = useLangPrefix();

  return (
    <footer className="footer container">
      <div className="footer--top">
        <div className="contact-col">
          <h4 className="quaternary-heading">{t("footer.contact")}</h4>
          <address>
            <ul className="contact__list">
              <li className="contact__item">
                <HiOutlineMapPin className="contact__icon" />
                <span>{t("footer.address")}</span>
              </li>
              <li className="contact__item">
                <HiOutlinePhone className="contact__icon" />
                <a href="tel:+212696964341" className="footer-contact-link">
                  0696 96 43 41
                </a>
              </li>
              <li className="contact__item">
                <HiOutlineEnvelope className="contact__icon" />
                <a
                  href="mailto:mobileHealthCare60@gmail.com"
                  className="footer-contact-link"
                >
                  mobileHealthCare60@gmail.com
                </a>
              </li>
            </ul>
          </address>
        </div>
        <div className="services-col">
          <h4 className="quaternary-heading">{t("footer.navigation")}</h4>
          <ul className="services__list">
            <li className="services__item">
              <Link to={`${prefix}/`}>{t("nav.home")}</Link>
            </li>
            <li className="services__item">
              <Link to={`${prefix}/consultation-a-domicile`}>
                {t("nav.consultation")}
              </Link>
            </li>
            <li className="services__item">
              <Link to={`${prefix}/soins-infirmiers`}>{t("nav.soins")}</Link>
            </li>
            <li className="services__item">
              <Link to={`${prefix}/prelevement-a-domicile`}>
                {t("nav.prelevement")}
              </Link>
            </li>
            <li className="services__item">
              <Link to={`${prefix}/transport-sanitaire`}>
                {t("nav.transport")}
              </Link>
            </li>
            <li className="services__item">
              <Link to={`${prefix}/blog`}>{t("nav.blog")}</Link>
            </li>
            <li className="services__item">
              <Link to={`${prefix}/contact`}>{t("nav.contact")}</Link>
            </li>
          </ul>
        </div>
        <div className="keywords-col">
          <h4 className="quaternary-heading">{t("footer.keywords")}</h4>
          <ul className="keywords__list">
            <li className="keyword__item">
              <Link
                to={`${prefix}/consultation-a-domicile`}
                className="keyword-link"
              >
                {t("footer.keywordLinks.medecinCasa")}
              </Link>
            </li>
            <li className="keyword__item">
              <Link
                to={`${prefix}/consultation-a-domicile`}
                className="keyword-link"
              >
                {t("footer.keywordLinks.sosMedecinCasa")}
              </Link>
            </li>
            <li className="keyword__item">
              <Link
                to={`${prefix}/soins-infirmiers`}
                className="keyword-link"
              >
                {t("footer.keywordLinks.soinsInfirmiers")}
              </Link>
            </li>
            <li className="keyword__item">
              <Link
                to={`${prefix}/soins-infirmiers`}
                className="keyword-link"
              >
                {t("footer.keywordLinks.infirmierDomicile")}
              </Link>
            </li>
            <li className="keyword__item">
              <Link
                to={`${prefix}/soins-infirmiers`}
                className="keyword-link"
              >
                {t("footer.keywordLinks.hospitalisation")}
              </Link>
            </li>
            <li className="keyword__item">
              <Link
                to={`${prefix}/soins-infirmiers`}
                className="keyword-link"
              >
                {t("footer.keywordLinks.gardeMalade")}
              </Link>
            </li>
            <li className="keyword__item">
              <Link
                to={`${prefix}/soins-infirmiers`}
                className="keyword-link"
              >
                {t("footer.keywordLinks.perfusionCasablanca")}
              </Link>
            </li>
            <li className="keyword__item">
              <Link
                to={`${prefix}/prelevement-a-domicile`}
                className="keyword-link"
              >
                {t("footer.keywordLinks.priseSang")}
              </Link>
            </li>
            <li className="keyword__item">
              <Link
                to={`${prefix}/transport-sanitaire`}
                className="keyword-link"
              >
                {t("footer.keywordLinks.ambulancePrivee")}
              </Link>
            </li>
            <li className="keyword__item">
              <Link
                to={`${prefix}/transport-sanitaire`}
                className="keyword-link"
              >
                {t("footer.keywordLinks.transportSanitaire")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer--bottom">
        <a
          href="https://www.moudevpro.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Développeur Web Freelance Maroc"
        >
          Site créé par MouDev
        </a>
      </div>
    </footer>
  );
};

export default Footer;
