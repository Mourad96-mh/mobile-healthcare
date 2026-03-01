import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import { HiMiniChatBubbleBottomCenter } from "react-icons/hi2";
import { HiMiniPhone } from "react-icons/hi2";
import { useState } from "react";
import Spinner from "../UI/Spinner";

const Contact = () => {
  const { t } = useTranslation();
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [demande, setDemande] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isSuccess) {
    console.log("Success");
    navigate("/");
    alert("Appuyer Sur telephone icon pour appelez nous !");
  }

  return (
    <div className="contact grid grid--2-cols">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t("contact.meta.title")}</title>
        <meta name="description" content={t("contact.meta.description")} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.mobile-healthcare.org/contact" />
      </Helmet>
      <div className="container">
        <div className="contact-info">
          <header className="contact-header">
            <h2 className="secondary-heading">{t("contact.title")}</h2>
            <p className="contact-text">{t("contact.text")}</p>
          </header>
          <footer className="contact-footer">
            <div>
              <HiMiniChatBubbleBottomCenter className="contact-icon" />
              <Link
                to="mailto: 8erpplm60@gmail.com"
                className="link contact-link"
              >
                mobileHealthCare60@gmail.com
              </Link>
            </div>
            <div>
              <HiMiniPhone className="contact-icon" />
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/+212696964341"
                title="Contact me on WhatsApp"
                className="link contact-link"
              >
                0696964341
              </Link>
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
              <option value="demande">{t("contact.form.demandeOption1")}</option>
              <option value="reclamation">{t("contact.form.demandeOption2")}</option>
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
      </div>
    </div>
  );
};

export default Contact;
