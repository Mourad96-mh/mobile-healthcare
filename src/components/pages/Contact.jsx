import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import { HiMiniChatBubbleBottomCenter } from "react-icons/hi2";
import { HiMiniPhone } from "react-icons/hi2";
import { useState } from "react";
import Spinner from "../UI/Spinner";
import { useConversionTracking } from "../../hooks/useConversionTracking";

const Contact = () => {
  const { t } = useTranslation();
  const { trackConversion } = useConversionTracking();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mobile Healthcare",
    url: "https://mobile-healthcare.org/contact",
    telephone: "+212696964341",
    email: "mobileHealthCare60@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casablanca",
      addressCountry: "MA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+212696964341",
      contactType: "Customer Service",
      availableLanguage: ["French", "Arabic", "English", "Spanish"],
    },
  };
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [demande, setDemande] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/mobileHealthCare60@gmail.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(event.target),
        },
      );
      const data = await res.json();
      setIsLoading(false);
      if (data.success) {
        setIsSuccess(true);
      }
    } catch {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isSuccess) {
    return (
      <div
        className="contact-success container"
        style={{ textAlign: "center", padding: "4rem 2rem" }}
      >
        <h1 className="heading-primary u-margin-bottom-medium">
          {t("contact.success.title")}
        </h1>
        <p>{t("contact.success.message")}</p>
        <a
          className="btn"
          href="https://wa.me/+212696964341"
          target="_blank"
          rel="noopener noreferrer"
          title="Contact Mobile Healthcare on WhatsApp"
          style={{ display: "inline-block", marginTop: "2rem" }}
          onClick={() => trackConversion("https://wa.me/+212696964341")}
        >
          {t("common.callUs")}
        </a>
      </div>
    );
  }

  return (
    <div className="contact grid grid--2-cols">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t("contact.meta.title")}</title>
        <meta name="description" content={t("contact.meta.description")} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={t("contact.meta.title")} />
        <meta
          property="og:description"
          content={t("contact.meta.description")}
        />
        <meta
          property="og:image"
          content="https://mobile-healthcare.org/logo.avif"
        />
        <meta name="twitter:title" content={t("contact.meta.title")} />
        <meta
          name="twitter:description"
          content={t("contact.meta.description")}
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <div className="container">
        <div className="contact-info">
          <header className="contact-header">
            <h1 className="heading-primary">{t("contact.title")}</h1>
            <p className="contact-text">{t("contact.text")}</p>
          </header>
          <footer className="contact-footer">
            <div>
              <a
                href="mailto:mobileHealthCare60@gmail.com"
                className="link contact-link"
              >
                <HiMiniChatBubbleBottomCenter className="contact-icon" />
                mobileHealthCare60@gmail.com
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/+212696964341"
                title="Contact me on WhatsApp"
                className="link contact-link"
                onClick={() => trackConversion("https://wa.me/+212696964341")}
              >
                <HiMiniPhone className="contact-icon" />
                0696964341
              </a>
            </div>
          </footer>
        </div>
        <form className="contact-form" onSubmit={submitHandler}>
          <div className="form-group">
            <div className="form-control">
              <label htmlFor="prenom">{t("contact.form.prenom")}</label>
              <input
                type="text"
                name="prenom"
                id="prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="nom">{t("contact.form.nom")}</label>
              <input
                type="text"
                name="nom"
                id="nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-control">
              <label htmlFor="telephone">{t("contact.form.telephone")}</label>
              <input
                type="text"
                name="telephone"
                id="telephone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="email">{t("contact.form.email")}</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="demande">{t("contact.form.demandeLabel")}</label>
            <select
              name="demande"
              id="demande"
              value={demande}
              onChange={(e) => setDemande(e.target.value)}
            >
              <option value="">{t("contact.form.demandeSelect")}</option>
              <option value="demande">
                {t("contact.form.demandeOption1")}
              </option>
              <option value="reclamation">
                {t("contact.form.demandeOption2")}
              </option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="message">{t("contact.form.message")}</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              cols="30"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn--primary">
              {t("contact.form.submit")}
            </button>
          </div>
        </form>
        <p className="contact-credit">
          Site créé par{" "}
          <a
            href="https://www.moudevpro.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Développeur Web Freelance Maroc"
          >
            MouDev — Développeur Web Freelance Maroc
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
