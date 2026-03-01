import { Link } from "react-router-dom";

const ServicesDomicile = () => {
  const handleWhatsAppConversion = (url) => {
    if (typeof window.gtag_report_conversion === "function") {
      console.log(url);
      window.gtag_report_conversion(url);
    } else {
      window.location = url; // Fallback in case gtag_report_conversion is not defined
    }
  };

  return (
    <div className="nos-services prelevement__def ">
      <h2 className="secondary-heading center-text u-margin-bottom-medium">
        Nos Services à Domicile
      </h2>
      <ul className="services-list">
        <li className="service-item">
          <img
            src="/injection-a-domicile.avif"
            title="injection-a-domicile-casablanca"
            alt="Administration d'une injection ou d'une perfusion à domicile pour un patient, assurant des soins médicaux sécurisés."
          />
          <div className="service-details">
            <h5 className="u-margin-bottom-small">
              Injection à domicile &mdash; Casablanca
            </h5>
            <p>
              Faites appel à un <strong>infirmier à domicile</strong> pour vos
              injections en toute sécurité, sans quitter votre logement. Nos
              professionnels interviennent rapidement à Casablanca, dans le
              respect des normes d&apos;hygiène médicale.
            </p>

            <Link
              className="btn center-text"
              to="https://wa.me/+212696964341"
              title="Contactez-nous sur WhatsApp"
              rel="noopener noreferrer"
              onClick={() =>
                handleWhatsAppConversion("https://wa.me/+212696964341")
              }
            >
              Appelez-nous &rarr;
            </Link>
          </div>
        </li>
        <li className="service-item">
          <img
            src="/pansement-change.avif"
            title="changement-pansement-a-domicile"
            alt="changement de pansement par un infirmier a domicile"
          />
          <div className="service-details">
            <h5 className="u-margin-bottom-small">
              Changement de pansement à domicile &mdash; Casablanca
            </h5>
            <p>
              Évitez les déplacements inutiles : un{" "}
              <strong>infirmier à domicile</strong> intervient rapidement à
              Casablanca pour le changement de pansement, dans le respect strict
              des normes d&apos;hygiène. Soins adaptés pour plaies
              chirurgicales, escarres, brûlures et autres.
            </p>
            <Link
              className="btn center-text"
              to="https://wa.me/+212696964341"
              title="Contactez-nous sur WhatsApp"
              rel="noopener noreferrer"
              onClick={() =>
                handleWhatsAppConversion("https://wa.me/+212696964341")
              }
            >
              Appelez-nous &rarr;
            </Link>
          </div>
        </li>
        <li className="service-item">
          <img
            src="/perfusion-service.avif"
            title="perfusion-a-domicile"
            alt="perfusion par un infirmier a domicile"
          />
          <div className="service-details">
            <h5 className="u-margin-bottom-small">
              {" "}
              Perfusion à domicile &mdash; Casablanca
            </h5>
            <p>
              Besoin d&apos;une <strong>perfusion à domicile</strong> à
              Casablanca? Nos infirmiers diplômés assurent la pose et le suivi
              en toute sécurité : réhydratation, antibiotiques, fer, nutrition
              parentérale… Le tout dans le respect strict des protocoles
              médicaux.
            </p>
            <Link
              className="btn center-text"
              to="https://wa.me/+212696964341"
              title="Contactez-nous sur WhatsApp"
              rel="noopener noreferrer"
              onClick={() =>
                handleWhatsAppConversion("https://wa.me/+212696964341")
              }
            >
              Appelez-nous &rarr;
            </Link>
          </div>
        </li>
        <li className="service-item">
          <img src="/prelevement.avif" />
          <div className="service-details">
            <h5 className="u-margin-bottom-small">
              Prélèvement à domicile &mdash; Casablanca
            </h5>
            <p>
              Optez pour un <strong>prélèvement sanguin à domicile</strong> à
              Casablanca, sans vous déplacer. Nos infirmiers réalisent prises de
              sang et autres analyses, avec envoi sécurisé des échantillons à
              notre laboratoire partenaire.
            </p>

            <Link
              className="btn center-text"
              to="https://wa.me/+212696964341"
              title="Contactez-nous sur WhatsApp"
              rel="noopener noreferrer"
              onClick={() =>
                handleWhatsAppConversion("https://wa.me/+212696964341")
              }
            >
              Appelez-nous &rarr;
            </Link>
          </div>
        </li>
        <li className="service-item">
          <img src="/lavement-rectal.avif" />
          <div className="service-details">
            <h5 className="u-margin-bottom-small">
              {" "}
              Lavement à domicile &mdash; Casablanca
            </h5>
            <p>
              Un <strong>infirmier à domicile</strong> se déplace à Casablanca
              pour réaliser vos lavements en toute discrétion. Soins adaptés,
              matériel stérile, confort et hygiène garantis selon votre
              prescription médicale.
            </p>
            <Link
              className="btn center-text"
              to="https://wa.me/+212696964341"
              title="Contactez-nous sur WhatsApp"
              rel="noopener noreferrer"
              onClick={() =>
                handleWhatsAppConversion("https://wa.me/+212696964341")
              }
            >
              Appelez-nous &rarr;
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ServicesDomicile;
