import { Link, useNavigate } from "react-router-dom";

import { HiMiniChatBubbleBottomCenter } from "react-icons/hi2";
import { HiMiniPhone } from "react-icons/hi2";
import { useState } from "react";
import Spinner from "../UI/Spinner";

const Contact = () => {
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
      <div className="container">
        <div className="contact-info">
          <header className="contact-header">
            <h2 className="secondary-heading">contactez nous</h2>
            <p className="contact-text">
              pour toute question, ou reclamation, n&apos;hesitez pas a nous
              contacter. Nous sommes la pour vous.
            </p>
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
              <label htmlFor="prenom">Prenom</label>
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
              <label htmlFor="nom">Nom</label>
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
              <label htmlFor="telephone">Telephone</label>
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
              <label htmlFor="email">Email</label>
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
            <label htmlFor="demande">Choisissez votre type de demande</label>
            <select
              name="demande"
              id="demande"
              value={demande}
              onChange={(e) => setDemande(e.target.value)}
            >
              <option value="">Selectionner</option>
              <option value="demande">Faire une demande</option>
              <option value="reclamation">Reclamation</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="message">Message</label>
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
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
