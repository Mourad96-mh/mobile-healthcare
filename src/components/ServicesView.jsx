import { Link } from "react-router-dom";

const ServicesView = () => {
  return (
    <section className="all-services">
      <h4 className="u-margin-bottom-medium center-text">
        Mobile Healthcare Assistance
      </h4>
      <h1 className="heading-primary center-text">assistance médicale 360°</h1>
      <div className="all-services__content">
        <ul className="all-services__list">
          <li className="all-services__item">
            <img
              src="consultation-a-domicile.avif"
              alt="consultation-visite-medecin-domicile-mobilehealthcare-services"
            />
            <div className="all-services__item--info">
              <h4 className="u-margin-bottom-small">Consultation à Domicile</h4>
              <p className="u-margin-bottom-medium">
                Nos médecins assurent une prise en charge complète et
                spécialisée pour répondre à tous vos besoins de santé,
                directement à votre domicile.
              </p>
              <div className="all-services__item--link">
                <Link to="/consultation-a-domicile" className="services-link">
                  Lire Plus &rarr;
                </Link>
              </div>
            </div>
          </li>
          <li className="all-services__item">
            <img
              src="ambulance.avif"
              alt="sos-medecin-transport-medical-mobilehealthcare-services"
            />
            <div className="all-services__item--info">
              <h4 className="u-margin-bottom-small">Transport Sanitaire</h4>
              <p className="u-margin-bottom-medium">
                Mobile Healthcare vous propose un service de transport sanitaire
                adapté à vos besoins, qu&apos;il soit simple ou médicalisé. Nous
                assurons des transferts sécurisés pour &nbsp;
                <strong>consultations, hospitalisations ou urgences</strong>.
              </p>
              <div className="all-services__item--link">
                <Link to="/transport-sanitaire" className="services-link">
                  Lire Plus &rarr;
                </Link>
              </div>
            </div>
          </li>
          <li className="all-services__item">
            <img
              src="prelevement.avif"
              alt="prelevement-domicile-medecin-laboratoire-analyse-casablanca-mobilehealthcare-services"
            />
            <div className="all-services__item--info">
              <h4 className="u-margin-bottom-small">Prélèvement à Domicile</h4>
              <p className="u-margin-bottom-medium">
                <strong>
                  Besoin d&apos;une prise de sang à domicile sans vous déplacer?
                </strong>
                Mobile Healthcare vous facilite la vie en envoyant un
                professionnel de santé chez vous pour réaliser vos analyses
                médicales en toute sécurité.
              </p>
              <div className="all-services__item--link">
                <Link to="/prelevement-a-domicile" className="services-link">
                  Lire Plus &rarr;
                </Link>
              </div>
            </div>
          </li>
          <li className="all-services__item">
            <img
              src="geriatrie-3.avif"
              alt="geriatrie-patient-age-mobilehealthcare-services"
            />
            <div className="all-services__item--info">
              <h4 className="u-margin-bottom-small">Gériatrie</h4>
              <p className="u-margin-bottom-medium">
                Mobile Healthcare propose un
                <strong>service de gériatrie</strong>
                dédié aux <strong>personnes âgées</strong>, garantissant un
                accompagnement médical complet pour préserver leur qualité de
                vie et favoriser leur bien-être au quotidien.
              </p>
              <div className="all-services__item--link">
                <Link to="geriatreie" className="services-link">
                  Lire Plus &rarr;
                </Link>
              </div>
            </div>
          </li>
          <li className="all-services__item">
            <img
              src="tele-consultation.avif"
              alt="teleconsultation-telephone-medecin-appel-consultation-medicale-sos-medecin-mobilehealthcare"
            />
            <div className="all-services__item--info">
              <h4 className="u-margin-bottom-small">Téléconsultation</h4>
              <p className="u-margin-bottom-medium">
                Consultez un médecin en ligne 7j/7, où que vous soyez ! Profitez
                d&apos;une prise en charge rapide et sécurisée, avec des
                consultations immédiates ou sur rendez-vous.
              </p>
              <div className="all-services__item--link">
                <Link to="/teleconsultation" className="services-link">
                  Lire Plus &rarr;
                </Link>
              </div>
            </div>
          </li>
          <li className="all-services__item">
            <img
              src="evenement.avif"
              alt="couverture-medicale-evenements-mobilehealthcare-services"
            />
            <div className="all-services__item--info">
              <h4 className="u-margin-bottom-small">
                Couverture médicale des événements
              </h4>
              <p className="u-margin-bottom-medium">
                Sécurisez vos événements avec un service de couverture médicale
                adapté à toutes les situations. Que ce soit pour un concert, un
                séminaire ou une manifestation sportive.
              </p>
              <div className="all-services__item--link">
                <Link
                  to="/couverture-medicale-des-evenements"
                  className="services-link"
                >
                  Lire Plus &rarr;
                </Link>
              </div>
            </div>
          </li>
          <li className="all-services__item">
            <img
              src="funebres.avif"
              alt="pompes-funebres-mobilehealthcare-services"
            />
            <div className="all-services__item--info">
              <h4 className="u-margin-bottom-small">Pompes Funèbres</h4>
              <p className="u-margin-bottom-medium">
                Nous vous accompagnons avec dignité et respect dans ces moments
                douloureux en vous proposant un service de pompes funèbres
                complet et sur mesure.
              </p>
              <div className="all-services__item--link">
                <Link to="/pompes-funebres" className="services-link">
                  Lire Plus &rarr;
                </Link>
              </div>
            </div>
          </li>
          <li className="all-services__item">
            <img src="contre-visite.avif" alt="Doctor and patient." />
            <div className="all-services__item--info">
              <h4 className="u-margin-bottom-small">Contre-Visite Médicale</h4>
              <p className="u-margin-bottom-medium">
                Mobile Healthcare est votre partenaire de confiance pour assurer
                le suivi médical de vos employés à Casablanca. Nous réalisons
                des contre-visites médicales afin de vérifier la légitimité des
                arrêts de travail et garantir la transparence au sein de votre
                entreprise.
              </p>
              <div className="all-services__item--link">
                <Link to="/contre-visite" className="services-link">
                  Lire Plus &rarr;
                </Link>
              </div>
            </div>
          </li>
          <li className="all-services__item">
            <img
              src="formation-secourisme.avif"
              alt="formations-secourisme-mobilehealthcare-services"
            />
            <div className="all-services__item--info">
              <h4 className="u-margin-bottom-small">Formation secourisme</h4>
              <p className="u-margin-bottom-medium">
                Mobile Healthcare propose des formations professionnelles en
                secours d&apos;urgence et prévention des risques au travail. Nos
                sessions sont conçues pour préparer vos équipes à réagir
                efficacement face aux situations d&apos;urgence.
              </p>
              <div className="all-services__item--link">
                <Link to="/formation-secourisme" className="services-link">
                  Lire Plus &rarr;
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServicesView;
