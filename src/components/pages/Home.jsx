import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HiOutlineHeart } from "react-icons/hi2";

import ServicesView from "../ServicesView";
import Hero from "../UI/Hero";
import LayoutContent from "../UI/LayoutContent";

const HomePage = () => {
  const handleWhatsAppConversion = (url) => {
    if (typeof window.gtag_report_conversion === "function") {
      window.gtag_report_conversion(url);
    } else {
      window.location = url; // Fallback in case gtag_report_conversion is not defined
    }
  };

  return (
    <div className="home">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Prenez soin de votre santé avec Mobile Healthcare &mdash; Réservez des soins infirmiers à domicile, des consultations médicales et un transport sanitaire à Casablanca, disponibles 24/7."
        />
        <title>
          Soins Infirmiers, Consultations à Domicile et Transport Sanitaire à
          Casablanca | Mobile Healthcare
        </title>
        <link rel="canonical" href="https://www.mobile-healthcare.org/" />
      </Helmet>
      <Hero
        className="hero-section"
        h2="Mobile Healthcare &mdash; Votre Assistance Médicale à Domicile 24/7"
      />
      <div className="container">
        <section className="prelevement__def">
          <h5 className="u-margin-bottom-small">Mobile Healthcare</h5>
          <h2 className="secondary-heading u-margin-bottom-medium">
            Votre santé, notre priorité &mdash; Assistance médicale à domicile
          </h2>
          <p>
            Faites confiance à Mobile Healthcare pour toutes vos demandes
            d&apos;assistance médicale. Nous vous proposons notamment les
            services suivants :
            <Link to="/teleconsultation" className="services-link">
              La téléconsultation,
            </Link>
            <Link to="/consultation-a-domicile" className="services-link">
              Consultation à domicile,
            </Link>
            <Link to="/transport-sanitaire" className="services-link">
              SOS Urgences médicales,
            </Link>
            <Link to="/transport-sanitaire" className="services-link">
              transport sanitaire,
            </Link>
            <Link to="/prelevement-a-domicile" className="services-link">
              Prélèvement à domicile,
            </Link>
            ... Nous offrons un large spectre de services et nous essayons
            toujours à englober les offres de soins dont vous pourriez avoir
            besoin.
          </p>
          <p className="u-margin-top-small">
            <strong>
              Notre mission c&apos;est d&apos;améliorer la qualité des services
              de santé au Casablanca (Maroc).
            </strong>
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
              Appelez-nous &rarr;
            </Link>
          </div>
          <div className="service-img">
            <img
              loading="lazy"
              src="medecin-a-domicile.avif"
              alt="medecin-domicile-consultation-famille-mobilehealthcare-services"
            />
          </div>
        </section>

        <section className="prelevement__def">
          <h5 className="u-margin-bottom-small">Mobile Healthcare</h5>
          <h2 className="secondary-heading u-margin-bottom-medium">
            Assistance Médicale à Casablanca
          </h2>
          <p>
            Mobile Healthcare, votre partenaire de confiance pour
            l&apos;assistance médicale, est dirigé par une équipe de médecins
            qualifiés, offrant des services partout à Casablanca. Nous vous
            proposons une prise en charge complète de tous vos besoins en
            matière de soins de santé, avec un engagement constant envers
            l&apos;excellence et la qualité. Notre équipe médicale vous
            accompagne tout au long de votre parcours de soins, en veillant à ce
            que vous receviez des soins adaptés à vos besoins, dans un cadre
            attentif et personnalisé.
          </p>
        </section>
        <section className="nos-services">
          <h5 className="center-text u-margin-bottom-small">
            Mobile Healthcare
          </h5>
          <h2 className="secondary-heading intro-heading">Nos services</h2>

          <LayoutContent>
            <>
              <h5 className="u-margin-bottom-small">
                Mobile healthcare services
              </h5>
              <h2 className="secondary-heading u-margin-bottom-medium">
                Télé-consultation / Télé-médecine
              </h2>
              <p>
                Bénéficiez de l&apos;expertise de nos médecins en ligne,
                disponibles tous les jours de la semaine. Nous proposons des
                téléconsultations immédiates ou planifiées. Peu importe votre
                souci de santé, la première étape est toujours une
                téléconsultation.
              </p>
              <p className="u-margin-top-small">
                <strong>
                  Votre prise en charge commence toujours par une &nbsp;
                  <Link to="teleconsultation" className="services-link">
                    téléconsultation.
                  </Link>
                </strong>
              </p>
              <ul className="list">
                <li className="service__item">
                  <span className="service__icon">
                    <HiOutlineHeart className="icon" />
                  </span>
                  <p>
                    <strong>Consultation d&apos;urgence médicale 24h/24</strong>
                    &mdash; SOS Médecin à domicile ou en téléconsultation
                  </p>
                </li>
                <li className="service__item">
                  <span className="service__icon">
                    <HiOutlineHeart className="icon" />
                  </span>
                  <p>
                    <strong>Téléconsultation en gériatrie</strong> &mdash; Soins
                    spécialisés pour personnes âgées
                  </p>
                </li>
                <li className="service__item">
                  <span className="service__icon">
                    <HiOutlineHeart className="icon" />
                  </span>
                  <p>
                    <strong>Pédiatrie en ligne</strong> &mdash; Consultez un
                    médecin lorsque votre enfant a de la fièvre la nuit
                  </p>
                </li>
                <li className="service__item">
                  <span className="service__icon">
                    <HiOutlineHeart className="icon" />
                  </span>
                  <p>
                    <strong>Deuxième avis médical</strong> &mdash; Obtenez
                    l&apos;expertise d&apos;un médecin qualifié
                  </p>
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
                  Appelez-nous &rarr;
                </Link>
              </div>
            </>
            <>
              <div className="overlay">&nbsp;</div>
              <img
                loading="lazy"
                src="teleconsultation.avif"
                alt="teleconsultation-medecin-domicile-appel-diagnostic-numero-telephone-mobilehealthcare"
              />
            </>
          </LayoutContent>
          {/* <section className="transport"> */}
          <LayoutContent reverse="true">
            <>
              <h4 className="u-margin-bottom-small">
                Mobile Healthcare Assistance Services
              </h4>
              <h2 className="secondary-heading u-margin-bottom-medium">
                Transport Sanitaire
              </h2>
              <p>
                <strong>Mobile Healthcare</strong> assure un service de{" "}
                <strong>
                  <Link className="services-link" to="/transport-sanitaire">
                    transport sanitaire
                  </Link>
                  sécurisé et adapté
                </strong>
                &nbsp;à tous les besoins médicaux. Que ce soit pour une{" "}
                <strong>
                  hospitalisation, un transfert, une consultation, une séance de
                  dialyse, une chimiothérapie ou une rééducation
                </strong>
                , nous mettons à disposition des véhicules équipés pour un
                <strong> transport simple ou médicalisé</strong>. Nos services
                couvrent <strong>Casablanca et les régions avoisinantes</strong>
                , garantissant confort, sécurité et assistance professionnelle à
                chaque trajet.
              </p>
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
                Appelez-nous &rarr;
              </Link>
            </>
            <>
              <div className="overlay">&nbsp;</div>
              <img
                loading="lazy"
                src="ambulance-1.avif"
                alt="sos-medecin-casablanca-ambulance-urgence-mobilehealthcare-casablanca-1"
              />
            </>
          </LayoutContent>
          <LayoutContent>
            <>
              <h4 className="u-margin-bottom-small">
                Mobile Healthcare Assistance Services
              </h4>
              <h2 className="secondary-heading u-margin-bottom-medium">
                Soins Infirmiers à Domicile
              </h2>
              <p>
                <strong>Mobile Healthcare</strong> propose un service de{" "}
                <strong>
                  <Link className="services-link" to="/soins-infirmiers">
                    soins infirmiers à domicile
                  </Link>
                  personnalisé et professionnel
                </strong>
                &nbsp;pour répondre à tous vos besoins médicaux. Que ce soit
                pour{" "}
                <strong>
                  des pansements, des injections, une prise de tension, un suivi
                  post-opératoire ou la gestion des pathologies chroniques
                </strong>
                , nos infirmiers qualifiés assurent des soins de qualité en
                toute sécurité. Nos interventions couvrent
                <strong> Casablanca et ses environs</strong>, garantissant un
                accompagnement médical adapté et une prise en charge humaine à
                domicile.
              </p>

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
                Appelez-nous &rarr;
              </Link>
            </>
            <>
              <div className="overlay">&nbsp;</div>
              <img
                loading="lazy"
                src="nurse.avif"
                alt="Infirmier réalisant des soins à domicile, tel qu'un pansement ou une injection, avec du matériel médical, garantissant un suivi médical professionnel à Casablanca."
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
