import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Hero from "../UI/Hero";
import ServicesView from "../ServicesView";

const Prelevement = () => {
  const handleWhatsAppConversion = (url) => {
    if (typeof window.gtag_report_conversion === "function") {
      window.gtag_report_conversion(url);
    } else {
      window.location = url; // Fallback in case gtag_report_conversion is not defined
    }
  };

  return (
    <section className="prelevement">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Prélèvement à domicile Service de prise de sang | Mobile Healthcare
        </title>
        <meta
          name="description"
          content="Le service de prise de sang Mobile Healthcare à domicile élimine les
      inconvénients, l'attente et les soucis des tests médicaux! Nos services de
      santé à domicile offrent des services de prise de sang et de tests
      médicaux à distance sans avoir à quitter votre domicile ou votre bureau."
        />
        <link
          rel="canonical"
          href="https://www.mobile-healthcare.org/prelevement-a-domicile"
        />
      </Helmet>
      <h1 className="heading-primary center-text u-margin-bottom-medium u-margin-top-big">
        Prélèvement à domicile
      </h1>

      <Hero
        h2="La prise de sang à domicile, c'est possible !"
        h5="Mobile healthcare Assistance"
        className="prelevement__hero"
      />
      <div className="container">
        <div className="prelevement__def">
          <h2 className="secondary-heading center-text u-margin-bottom-medium">
            Prélèvement sanguin à domicile un service pratique et fiable.
          </h2>
          <p>
            Chez Mobile Healthcare, nous proposons un service de{" "}
            <strong>prélèvement sanguin à domicile à Casablanca</strong>, idéal
            pour les patients souhaitant éviter les déplacements en laboratoire.
          </p>
          <p>
            Nos <strong>professionnels de santé qualifiés</strong> se rendent à
            votre domicile ou sur votre lieu de travail pour effectuer vos
            analyses, garantissant un service sécurisé, précis et conforme aux
            standards médicaux.
          </p>
        </div>

        <div className="prelevement__content">
          <div className="prelevement__content--col-1">
            <h5 className="u-margin-bottom-small">
              Mobile Healthcare Assistance
            </h5>
            <h2 className="secondary-heading">
              Prise de Sang à Domicile : Un Service Fiable et Confortable
            </h2>
            <p>
              Vous recherchez un service de {""}
              <strong>prise de sang à domicile</strong> rapide et sécurisé ?
              Profitez d&apos;une prise en charge équivalente à celle d&apos;un
              laboratoire, sans avoir à vous déplacer.
            </p>
            <p>
              Nos professionnels de santé se rendent chez vous pour effectuer
              votre <strong>analyse sanguine à domicile</strong>, garantissant
              &nbsp;
              <strong>confort, sécurité et précision des résultats</strong>.
              Gagnez du temps et bénéficiez d&apos;un service médical de qualité
              directement chez vous.
            </p>
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
              Appelez-nous &rarr;
            </Link>
          </div>
          <div className="prelevement__content--col-2">
            <img
              src="test-sanguin--1.avif"
              alt="prelevement-prise-echantillon-sanguin-domicile-entreprise-mobilehealthcare"
              loading="lazy"
            />
          </div>
        </div>
        <div className="prelevement__content">
          <div className="prelevement__content--col-2">
            <img
              src="test-sanguin--2.avif"
              alt="prelevement-prise-echantillon-sanguin-maison-entreprise-mobilehealthcare"
              loading="lazy"
            />
          </div>
          <div className="prelevement__content--col-1">
            <h5 className="u-margin-bottom-small">
              Mobile Healthcare Assistance
            </h5>
            <h2 className="secondary-heading">
              Prélèvement à la maison, avec une qualité de soins équivalente à
              celle d&apos;un laboratoire.
            </h2>
            <p>
              <strong>Prélèvement à la maison</strong> avec la même &nbsp;
              <strong>
                qualité qu&apos;en laboratoire. Réservez selon vos
                disponibilités &nbsp;
              </strong>
              et accédez à vos résultats en ligne facilement.
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
            <h5>Mobile Healthcare Assistance</h5>
            <h2 className="secondary-heading">
              Prises de sang à domicile à Casablanca-Settat 🏠💉
            </h2>
            <ul className="list">
              <li>
                &mdash; L&apos;équipe de <strong>Moble Healthcare</strong>:{" "}
                propose un service de prises de sang à domicile dans toute la
                région Casablanca-Settat.
              </li>
              <li>
                &mdash; Nous réalisons &nbsp;
                <strong>tous les tests compatibles à domicile</strong>. &nbsp;
                <Link
                  className="services-link"
                  to="https://wa.me/+212696964341"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contactez-nous
                </Link>
                pour vérifier si votre examen peut être effectué sans vous
                déplacer, que vous soyez à votre domicile ou sur votre lieu de
                travail.
              </li>
              <li>
                &mdash; 👩‍⚕️
                <strong>
                  Une équipe qualifiée : Nos infirmiers, infirmières et médecins{" "}
                </strong>
                sont inscrits aux Ordres des Infirmiers et des Médecins,
                garantissant un service fiable et sécurisé.
              </li>
              <li>
                &mdash; ⏳ <strong>Résultats rapides</strong> : Recevez vos{" "}
                <strong> résultats sous 24 heures </strong> pour la plupart des
                analyses de sang.
              </li>
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
              Appelez-nous &rarr;
            </Link>
          </div>
          <div className="prelevement__content--col-2">
            <img
              src="test-sanguin--3.avif"
              alt="prelevement-prise-echantillion-sanguin-maison-entreprise-mobilehealthcare"
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
