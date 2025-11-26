import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Hero = ({ className, h5, h2 }) => {
  const handleWhatsAppConversion = (url) => {
    if (typeof window.gtag_report_conversion === "function") {
      window.gtag_report_conversion(url);
    } else {
      window.location = url; // Fallback in case gtag_report_conversion is not defined
    }
  };

  return (
    <div className={`${className} hero`}>
      <div className="hero-content">
        {h5 && <h5 className="u-margin-bottom-small center-text">{h5}</h5>}
        {h2 && (
          <h2 className="secondary-heading u-margin-bottom-big center-text">
            {h2}
          </h2>
        )}
        <div className="center-text">
          <Link
            className="btn"
            to="https://wa.me/+212696964341"
            title="Contact me on WhatsApp"
            onClick={() =>
              handleWhatsAppConversion("https://wa.me/+212696964341")
            }
          >
            Appelez-nous &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
