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
          <ul className="contact__list">
            <li className="contact__item">
              <HiOutlineMapPin className="contact__icon" />
              <span>{t("footer.address")}</span>
            </li>
            <li className="contact__item">
              <HiOutlinePhone className="contact__icon" />
              <span>0696964341</span>
            </li>
            <li className="contact__item">
              <HiOutlineEnvelope className="contact__icon" />
              <span>mobileHealthCare60@gmail.com</span>
            </li>
          </ul>
        </div>
        <div className="services-col">
          <h4 className="quaternary-heading">{t("footer.services")}</h4>
          <ul className="services__list">
            <li className="services__item">
              <span>&mdash;</span>{t("footer.serviceList.phone")}
            </li>
            <li className="services__item">
              <span>&mdash;</span> {t("footer.serviceList.rdv")}
            </li>
            <li className="services__item">
              <span>&mdash; </span>{t("footer.serviceList.urgence")}
            </li>
            <li className="services__item">
              <span>&mdash; </span>{t("footer.serviceList.transfer")}
            </li>
          </ul>
        </div>
        <div className="keywords-col">
          <h4 className="quaternary-heading">{t("footer.keywords")}</h4>
          <ul className="keywords__list">
            <li className="keyword__item">
              <Link to={`${prefix}/consultation-a-domicile`} className="keyword-link">
                {t("footer.keywordLinks.medecinPres")}
              </Link>
            </li>
            <li className="keyword__item">
              <Link to={`${prefix}/consultation-a-domicile`} className="keyword-link">
                {t("footer.keywordLinks.medecinCasa")}
              </Link>
            </li>
            <li className="keyword__item">
              <Link to={`${prefix}/consultation-a-domicile`} className="keyword-link">
                {t("footer.keywordLinks.medecinGeneraliste")}
              </Link>
            </li>
            <li className="keyword__item">
              <Link to={`${prefix}/consultation-a-domicile`} className="keyword-link">
                {t("footer.keywordLinks.sosMedecin")}
              </Link>
            </li>
            <li className="keyword__item">
              <Link to={`${prefix}/consultation-a-domicile`} className="keyword-link">
                {t("footer.keywordLinks.sosMedecinCasa")}
              </Link>
            </li>
            <li className="keyword__item">
              <Link to={`${prefix}/soins-infirmiers`} className="keyword-link">
                {t("footer.keywordLinks.soinsInfirmiers")}
              </Link>
            </li>
            <li className="keyword__item">
              <Link to={`${prefix}/soins-infirmiers`} className="keyword-link">
                {t("footer.keywordLinks.infirmierCasa")}
              </Link>
            </li>
            <li className="keyword__item">
              <Link to={`${prefix}/soins-infirmiers`} className="keyword-link">
                {t("footer.keywordLinks.infirmierDomicile")}
              </Link>
            </li>
            <li className="keyword__item">
              <Link to={`${prefix}/soins-infirmiers`} className="keyword-link">
                {t("footer.keywordLinks.hospitalisation")}
              </Link>
            </li>
            <li className="keyword__item">
              <Link to={`${prefix}/prelevement-a-domicile`} className="keyword-link">
                {t("footer.keywordLinks.priseSang")}
              </Link>
            </li>
            <li className="keyword__item">
              <Link to={`${prefix}/transport-sanitaire`} className="keyword-link">
                {t("footer.keywordLinks.ambulancePrivee")}
              </Link>
            </li>
            <li className="keyword__item">
              <Link to={`${prefix}/transport-sanitaire`} className="keyword-link">
                {t("footer.keywordLinks.serviceAmbulance")}
              </Link>
            </li>
            <li className="keyword__item">
              <Link to={`${prefix}/transport-sanitaire`} className="keyword-link">
                {t("footer.keywordLinks.transportSanitaire")}
              </Link>
            </li>
            <li className="keyword__item">
              <Link to={`${prefix}/transport-sanitaire`} className="keyword-link">
                {t("footer.keywordLinks.transportMedicalise")}
              </Link>
            </li>
            <li className="keyword__item">
              <Link to={`${prefix}/transport-sanitaire`} className="keyword-link">
                {t("footer.keywordLinks.ambulanceSecours")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer--bottom"></div>
    </footer>
  );
};

export default Footer;
