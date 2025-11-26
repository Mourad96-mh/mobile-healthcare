import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import ServicesView from "../ServicesView";

const TransportSanitaire = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Transport Sanitaire - Mobile Healthcare Casablanca",
    image: "https://mobile-healthcare.org/assets/logo.png",
    url: "https://mobile-healthcare.org/transport-sanitaire",
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
    openingHours: "Mo-Su 08:00-20:00",
    description:
      "Service de transport sanitaire et ambulance à Casablanca pour patients, transferts hospitaliers, consultations, et urgences. Mobile Healthcare garantit un transport sécurisé et rapide.",
    keywords: "transport sanitaire, ambulance Casablanca, transport médicalisé",
    areaServed: {
      "@type": "Place",
      name: "Casablanca",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Transport Sanitaire",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Transport médicalisé à domicile",
            description:
              "Ambulance à domicile à Casablanca pour les patients nécessitant un transfert médicalisé. Sécurité, professionnalisme et réactivité garanties.",
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
      window.location = url; // Fallback in case gtag_report_conversion is not defined
    }
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ambulance Casablanca | Mobile Healthcare</title>
        <meta
          name="description"
          content="Mobile healthcare votre référence pour une ambulance a Casablanca vers ou depuis vos fournisseurs de soins de santé ou de l'aide d'un préposé au soutien personnel, nous offrons une gamme de services pour vous mettre à l'aise."
        />
        <link
          rel="canonical"
          href="https://www.mobile-healthcare.org/transport-sanitaire"
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <h1 className="heading-primary center-text u-margin-top-big">
        Transport sanitaire/ Ambulances
      </h1>
      <div className="container">
        <div className="prelevement__def">
          <h2 className="secondary-heading center-text u-margin-bottom-medium">
            Transport Sanitaire à Domicile : Sécurisé et Disponible à Tout
            Moment.
          </h2>
          <p>
            Chez Mobile Healthcare, nous offrons un service de{" "}
            <strong>transport sanitaire à domicile à Casablanca</strong>, conçu
            pour les patients nécessitant un déplacement sécurisé vers les
            établissements de santé.
          </p>
          <p>
            Nos <strong>ambulances équipées</strong> sont accompagnées de{" "}
            <strong>médecins et infirmiers qualifiés</strong>, garantissant une
            prise en charge rapide et adaptée aux besoins médicaux de chaque
            patient. Nous assurons un <strong>transport médicalisé </strong>{" "}
            dans des conditions optimales, alliant {""}
            <strong>sécurité, confort et assistance médicale</strong> tout au
            long du trajet.
          </p>
        </div>

        <div className="prelevement__content">
          <div className="prelevement__content--col-1">
            <h5 className="u-margin-bottom-small">
              Mobile Healthcare Assistance
            </h5>
            <h2 className="secondary-heading">
              Urgence & Transport Médicalisé &mdash; Service Rapide et Sécurisé
            </h2>
            <p>
              <strong>Mobile Healthcare</strong> assure tous types de &nbsp;
              <strong>transports sanitaires</strong>, qu&apos;ils soient simples
              ou &nbsp;
              <strong>médicalisés</strong>, pour répondre à vos besoins en toute
              sécurité.
            </p>
            <p>
              Que ce soit pour une{" "}
              <strong>
                hospitalisation, un transfert médical, une consultation, une
                séance de dialyse, une chimiothérapie ou une rééducation
              </strong>
              , nos <strong>ambulances équipées</strong> et nos{" "}
              <strong>
                professionnels de santé qualifiés (médecins et infirmiers)
              </strong>{" "}
              garantissent un transport fiable et adapté.
            </p>
            <p>
              Nous intervenons à l&apos;échelle{" "}
              <strong>locale, régionale et nationale</strong> &nbsp; pour
              assurer votre <strong>prise en charge rapide et sécurisée</strong>
              . 🚑✨
            </p>
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
              Appelez-nous &rarr;
            </Link>
          </div>
          <div className="prelevement__content--col-2">
            <img
              src="ambulance--1.avif"
              alt="sos-medecin-casablanca-ambulance-urgence-mobilehealthcare-casablanca"
              loading="lazy"
            />
          </div>
        </div>
        <div className="prelevement__content">
          <div className="prelevement__content--col-2">
            <img
              src="ambulance-1.avif"
              alt="appel-urgence-medecin-domicile-ambulance-rapide-mobilehealthcare-casablanca"
              loading="lazy"
            />
          </div>
          <div className="prelevement__content--col-1">
            <h5 className="u-margin-bottom-small">
              Mobile Healthcare Assistance
            </h5>
            <h2 className="secondary-heading center-text u-margin-bottom-medium">
              Transport Sanitaire &mdash; Nos Services
            </h2>
            <p>
              Nos <strong>équipes médicales et paramédicales</strong> sont
              rigoureusement sélectionnées et disposent des compétences
              nécessaires pour assurer une
              <strong>prise en charge optimisée</strong>, incluant :
            </p>
            <ul className="prelevement__advantages">
              <li>
                <p>
                  ✅ <strong>Surveillance des paramètres vitaux</strong> par
                  monitorage.
                </p>
              </li>
              <li>
                <p>
                  ✅ <strong>Prise en charge des patients</strong> porteurs de
                  dispositifs médicaux tels que <strong>sonde urinaire</strong>{" "}
                  ou <strong>sonde gastrique</strong>.
                </p>
              </li>
              <li>
                <p>
                  ✅ <strong>Administration de traitements continus</strong>,
                  garantissant une assistance médicale adaptée.
                </p>
              </li>
            </ul>
            <p>
              Nos équipes interviennent avec professionnalisme pour assurer un
              <strong>transport médicalisé sécurisé</strong>, répondant aux
              exigences médicales les plus strictes.
            </p>
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
              Appelez-nous &rarr;
            </Link>
          </div>
        </div>
        <div className="prelevement__content">
          <div className="prelevement__content--col-1">
            <h5 className="u-margin-bottom-small">
              Mobile Healthcare Assistance
            </h5>
            <h2 className="secondary-heading">
              Ambulance Équipée &mdash; Transport Médicalisé 24h/24
            </h2>
            <p>
              Nos <strong>ambulances médicalisées</strong> sont équipées de
              matériel de <strong>haute technologie</strong> pour assurer un{" "}
              <strong>transport sécurisé et confortable</strong> à tous les
              patients, qu&apos;ils soient stables, sous assistance respiratoire
              ou intubés-ventilés.
            </p>

            <ul className="prelevement__advantages u-margin-bottom-small">
              <li>
                🔹 <strong>Équipements médicaux avancés</strong> pour une prise
                en charge optimale
              </li>
              <li>
                🔹 <strong>Normes d&apos;hygiène strictes</strong> et contrôle
                technique annuel
              </li>
              <li>
                🔹 <strong>Disponibilité 24h/24 et 7j/7</strong> pour toute
                urgence ou besoin de transport médical
              </li>
            </ul>

            <p>
              Besoin d&apos;un <strong>transport sanitaire fiable</strong> ?
              Contactez-nous dès maintenant et bénéficiez d&apos;un service{" "}
              <strong>rapide et sécurisé</strong>.
            </p>
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
              Appelez-nous &rarr;
            </Link>
          </div>
          <div className="prelevement__content--col-2">
            <img
              src="ambulance-equipee.avif"
              alt="ambulance-equipee-medicalisee-transport-medical-mobilehealthcare-casablanca"
              loading="lazy"
            />
          </div>
        </div>
        <div className="prelevement__content">
          <div className="prelevement__content--col-2">
            <img
              src="ambulance-stuff.avif"
              alt="Service de transport médicalisé 24h/24 avec ambulances équipées de matériel de pointe mobilehealthcare-casablanca"
              loading="lazy"
            />
          </div>
          <div className="prelevement__content--col-1">
            <h5 className="u-margin-bottom-small">
              Mobile Healthcare Assistance
            </h5>
            <h2 className="secondary-heading">
              Transport sanitaire/ Ambulances
            </h2>
            <p>
              <strong>Mobile healthcare</strong> vous accompagne avec un{" "}
              <strong>service d&apos;ambulance rapide et sécurisé</strong> à
              Casablanca et ses environs. Contactez-nous pour un{" "}
              <strong>
                transfert médicalisé en toute sécurité. Disponibilité 24h/24 et
                7j/7
              </strong>
              .
            </p>

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
              Appelez-nous &rarr;
            </Link>
          </div>
        </div>
        <div className="prelevement__content">
          <div className="prelevement__content--col-1">
            <h5 className="u-margin-bottom-small">
              Mobile Healthcare Assistance
            </h5>
            <h2 className="secondary-heading">
              Nos Compétences &mdash; Transport Sanitaire à Casablanca
            </h2>
            <p>
              Chez <strong>Mobile healthcare Casablanca</strong>, tous nos{" "}
              <strong>professionnels de santé</strong> sont{" "}
              <strong>formés régulièrement</strong> afin d&apos;assurer un{" "}
              <strong>transport sécurisé et adapté</strong> aux patients.
            </p>

            <ul className="prelevement__advantages u-margin-bottom-small">
              <li>
                ✅ <strong>Sécurité et bien-être des patients</strong>: au cœur
                de nos priorités
              </li>
              <li>
                ✅ <strong>Écoute et transparence</strong> avec les patients et
                leurs familles
              </li>
              <li>
                ✅ <strong>Flotte moderne d&apos;ambulances</strong> :
                ambulances classiques et médicalisées
              </li>
              <li>
                ✅ <strong>Intervention rapide</strong> à Casablanca et dans
                d&apos;autres villes
              </li>
            </ul>

            <p>
              Nous garantissons un{" "}
              <strong>
                service de transport sanitaire fiable et professionnel
              </strong>
              , avec une équipe expérimentée et des équipements médicaux de{" "}
              <strong>dernière génération</strong>.
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
          </div>
          <div className="prelevement__content--col-2">
            <img
              src="premium-ambulance.avif"
              alt="Ambulance équipée à Casablanca avec matériel médical de pointe pour le transport sanitaire des patients en toute sécurité. mobilehealthcare-casablanca"
              loading="lazy"
            />
          </div>
        </div>

        <div className="prelevement__def">
          <h2 className="secondary-heading center-text u-margin-bottom-medium">
            🤝 Nos Partenaires &mdash; Réseau Médical à Casablanca
          </h2>
          <p>
            Chez <strong>My Health Assistance Casablanca</strong>, nous
            collaborons avec divers établissements médicaux pour garantir un{" "}
            <strong>transport rapide et sécurisé</strong> vers les structures de
            soins adaptées.
          </p>
          <ul className="prelevement__advantages u-margin-bottom-small">
            <li>
              ✔️ <strong>Cliniques & Hôpitaux</strong> : Clinique Casablanca,
              Groupe Akdital et autres établissements de santé
            </li>
            <li>
              ✔️ <strong>Centres spécialisés</strong> : Radiologie, analyses
              médicales et hémodialyse
            </li>
            <li>
              ✔️ <strong>Services personnalisés</strong> : Assistance
              post-hospitalisation et suivi médical à domicile
            </li>
          </ul>

          <p>
            Nous assurons également un <strong>transport médicalisé</strong>{" "}
            pour les <strong>patients en sortie d&apos;hospitalisation</strong>,
            ainsi que pour les <strong>patients en fin de vie</strong>{" "}
            nécessitant un accompagnement adapté.
          </p>
        </div>

        <ServicesView />
      </div>
    </div>
  );
};

export default TransportSanitaire;
