import { Link } from "react-router-dom";
import { HiMiniPhone } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa6";

import Logo from "./Logo";
import MainNavigation from "./MainNavigation";

const MainHeader = () => {
  const handleWhatsAppConversion = async (url) => {
    if (typeof window.gtag_report_conversion === "function") {
      window.gtag_report_conversion(url); // Google handles redirect
    } else {
      window.location.href = url; // fallback redirect
    }
  };

  return (
    <header className="header">
      <Logo />
      <MainNavigation />
      <div className="cta">
        <Link
          to="https://wa.me/+212696964341"
          // target="_blank" // 👈 This is the fix
          rel="noopener noreferrer"
          title="Contact me on WhatsApp"
          className="link"
          onClick={() =>
            handleWhatsAppConversion("https://wa.me/+212696964341")
          }
        >
          <FaWhatsapp className="cta-icon" />
        </Link>

        <Link
          to="https://wa.me/+212696964341"
          // target="_blank" // 👈 This is the fix
          rel="noopener noreferrer"
          title="Contact me on WhatsApp"
          className="link"
          onClick={(e) => {
            e.preventDefault();
            handleWhatsAppConversion("https://wa.me/+212696964341");
          }}
        >
          <HiMiniPhone className="cta-icon" />
        </Link>
      </div>
    </header>
  );
};

export default MainHeader;
