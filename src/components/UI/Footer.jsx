import { Link } from "react-router-dom";
// import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
// import Logo from "./Logo";

import { HiOutlineMapPin } from "react-icons/hi2";
import { HiOutlinePhone } from "react-icons/hi2";
import { HiOutlineEnvelope } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer--top">
        <div className="contact-col">
          <h4 className="quaternary-heading">Contact</h4>
          <ul className="contact__list">
            <li className="contact__item">
              <HiOutlineMapPin className="contact__icon" />
              <span>Grand Casablanca</span>
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
          <h4 className="quaternary-heading">Services</h4>
          <ul className="services__list">
            <li className="services__item">
              <span>&mdash;</span>Assistance téléphonique
            </li>
            <li className="services__item">
              <span>&mdash;</span> Consultation à domicile sur RDV
            </li>
            <li className="services__item">
              <span>&mdash; </span>Consultation à domicile d&apos;urgence
            </li>
            <li className="services__item">
              <span>&mdash; </span>Transfert à la clinique d&apos;urgence
            </li>
          </ul>
        </div>
        <div className="keywords-col">
          <h4 className="quaternary-heading">Mots-Clés</h4>
          <ul className="keywords__list">
            <li className="keyword__item">
              <Link to="/consultation-a-domicile" className="keyword-link">
                médecin autour de moi
              </Link>
            </li>
            <li className="keyword__item">
              <Link to="/consultation-a-domicile" className="keyword-link">
                medecin Casablanca
              </Link>
            </li>
            <li className="keyword__item">
              <Link to="/consultation-a-domicile" className="keyword-link">
                médecin généraliste Casablanca
              </Link>
            </li>
            <li className="keyword__item">
              <Link to="/consultation-a-domicile" className="keyword-link">
                sos medecin, sos docteur
              </Link>
            </li>
            <li className="keyword__item">
              <Link to="/consultation-a-domicile" className="keyword-link">
                SOS médecin Casablanca
              </Link>
            </li>
            <li className="keyword__item">
              <Link to="/soins-infirmiers" className="keyword-link">
                soins infirmiers à domicile
              </Link>
            </li>
            <li className="keyword__item">
              <Link to="/soins-infirmiers" className="keyword-link">
                infirmier Casablanca
              </Link>
            </li>
            <li className="keyword__item">
              <Link to="/soins-infirmiers" className="keyword-link">
                infirmier à domicile Casablanca
              </Link>
            </li>
            <li className="keyword__item">
              <Link to="/soins-infirmiers" className="keyword-link">
                hospitalisation à domicile
              </Link>
            </li>
            <li className="keyword__item">
              <Link to="/prelevement-a-domicile" className="keyword-link">
                prise de sang à domicile
              </Link>
            </li>
            <li className="keyword__item">
              <Link to="/transport-sanitaire" className="keyword-link">
                ambulance privée Casablanca
              </Link>
            </li>
            <li className="keyword__item">
              <Link to="/transport-sanitaire" className="keyword-link">
                service ambulance Casablanca
              </Link>
            </li>
            <li className="keyword__item">
              <Link to="/transport-sanitaire" className="keyword-link">
                transport sanitaire
              </Link>
            </li>
            <li className="keyword__item">
              <Link to="/transport-sanitaire" className="keyword-link">
                transport médicalisés
              </Link>
            </li>
            <li className="keyword__item">
              <Link to="/transport-sanitaire" className="keyword-link">
                ambulance secours Casablanca
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
