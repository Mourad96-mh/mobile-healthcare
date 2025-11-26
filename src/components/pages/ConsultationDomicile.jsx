import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import ServicesView from "../ServicesView";
import Hero from "../UI/Hero";
import LayoutContent from "../UI/LayoutContent";

const ConsultationDomicile = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Consultation à domicile - Mobile Healthcare Casablanca",
    image: "https://mobile-healthcare.org/assets/logo.png",
    url: "https://mobile-healthcare.org/consultation-a-domicile",
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
    medicalSpecialty: "GeneralPractice",
    description:
      "Consultation à domicile à Casablanca : un médecin qualifié se déplace chez vous pour des soins personnalisés. Service rapide et humain. Idéal pour toute urgence ou besoin médical à domicile.",
    keywords:
      "médecin à domicile, SOS médecin Casablanca, consultation à domicile",
    areaServed: {
      "@type": "Place",
      name: "Casablanca",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Consultation à domicile",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Consultation médicale à domicile",
            description:
              "Un médecin se déplace à votre domicile à Casablanca pour toute consultation médicale urgente ou régulière. Appelez dès maintenant pour une assistance rapide.",
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
    <section className="consultation-domicile">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Consultation à domicile | Visite à domicile du médecin</title>
        <meta
          name="description"
          content="Le service de Consultation à domicile Mobilehealthcare fournit des soins experts pour vous et votre famille qui englobent les besoins de soins de santé quotidiens ainsi qu'une assistance à long terme."
        />
        <link
          rel="canonical"
          href="https://www.mobile-healthcare.org/consultation-a-domicile"
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <h1 className="heading-primary center-text u-margin-bottom-medium">
        Consultation à Domicile
      </h1>
      <Hero
        h5="Mobile healthcare Assistance"
        h2="Médecin à Domicile / Consultation à domicile"
        className="consultation__hero"
      />
      <div className="container">
        <div className="prelevement__def">
          <h2 className="secondary-heading center-text u-margin-bottom-medium">
            Mobile Healthcare
          </h2>
          <p>
            Le service de{" "}
            <strong>consultations à domicile de Mobile Healthcare</strong> met à
            votre disposition des <strong>médecins spécialisés</strong>,
            garantissant une prise en charge complète et adaptée à tous vos
            besoins médicaux.
          </p>
          <div>
            <div className="center-text">
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
          <div className="service-img">
            <img src="doc-at-home.avif" alt="later" loading="lazy" />
          </div>
        </div>
        <LayoutContent reverse="true">
          <>
            <div>
              <h5>Mobile Healthcare assistance </h5>
              <h2 className="secondary-heading u-margin-bottom-small">
                Consultation à domicile
              </h2>
              <p>
                <strong>Mobile Healthcare</strong>, spécialiste de &nbsp;
                <strong>
                  l&apos;assistance médicale à domicile à Casablanca
                </strong>
                , propose des{" "}
                <strong>consultations médicales à domicile</strong> pour les
                patients nécessitant un suivi régulier ou ayant des difficultés
                à se déplacer. Nous savons que l&apos;accès aux soins peut être
                un défi, c&apos;est pourquoi nous nous engageons à fournir une
                &nbsp;
                <strong>
                  prise en charge rapide, efficace et professionnelle
                </strong>
                &nbsp; pour assurer votre{" "}
                <strong>bien-être et votre santé</strong>
                .&nbsp;
                <strong>
                  Nos médecins généralistes, urgentistes et spécialistes à
                  Casablanca
                </strong>
                &nbsp; se déplacent directement chez vous pour réaliser des
                &nbsp;
                <strong>consultations à domicile</strong>, des &nbsp;
                <strong>examens médicaux personnalisés</strong>, ainsi que la
                &nbsp;
                <strong>prescription d&apos;ordonnances adaptées</strong>.
                Attentifs à vos besoins, ils vous accompagnent à chaque étape
                pour garantir un{" "}
                <strong>suivi médical optimal à domicile</strong>.
              </p>
            </div>
          </>
          <>
            <div>
              <img
                loading="lazy"
                src="ordonance.avif"
                alt="medecin-de-garde-a-domicile-mobilehealthcare-services"
              />
            </div>
          </>
        </LayoutContent>
        <div className="prelevement__def">
          <h5>Mobile healthcare</h5>
          <h2 className="secondary-heading u-margin-bottom-medium">
            SERVICE DE CONSULTATION À DOMICILE À CASABLANCA
          </h2>
          <p>
            Notre mission est d&apos;offrir une{" "}
            <strong>assistance médicale à domicile de haute qualité</strong> à
            tous les patients de Casablanca. Que vous ayez besoin d&apos;une{" "}
            <strong>consultation médicale à domicile</strong>, d&apos;un{" "}
            <strong>examen clinique</strong> ou d&apos;une
            <strong>prescription médicale</strong>, notre équipe est à votre
            disposition pour vous accompagner à chaque étape.
            <br /> 📞 <strong>Contactez-nous dès aujourd&apos;hui</strong> pour
            découvrir nos services de{" "}
            <strong>consultation à domicile à Casablanca</strong> et planifier
            votre rendez-vous. Nous nous engageons à vous offrir des soins
            personnalisés pour préserver votre{" "}
            <strong>santé et votre bien-être</strong>.
          </p>
        </div>
        <LayoutContent>
          <>
            <div>
              <h5>Mobile Healthcare assistance </h5>
              <h2 className="secondary-heading u-margin-bottom-small">
                Consultations et Suivi Médical à Domicile à Casablanca
              </h2>
              <p>
                Chez <strong>Mobile Healthcare</strong>, nous mettons un point
                d&apos;honneur à offrir des &nbsp;
                <strong>soins personnalisés et adaptés</strong> aux besoins de
                chaque patient. Nous collaborons avec des{" "}
                <strong>médecins qualifiés</strong>, ainsi que des{" "}
                <strong>
                  cliniques, laboratoires et centres médicaux de Casablanca
                </strong>
                , afin d&apos;assurer un &nbsp;
                <strong>suivi médical continu et efficace</strong>. Pour les
                patients ayant des difficultés à se déplacer, nous proposons un
                &nbsp;
                <strong>accompagnement médical à domicile</strong>, incluant des
                &nbsp;
                <strong>
                  consultations, examens cliniques et prescriptions médicales
                  adaptées
                </strong>
                . De plus, nous facilitons le &nbsp;
                <strong>suivi médical à distance</strong> grâce à un
                accompagnement personnalisé, permettant à chacun de préserver sa
                santé en toute sérénité.
                <br /> 📞 <strong>
                  Contactez-nous dès aujourd&apos;hui
                </strong>{" "}
                pour bénéficier de notre expertise et prendre rendez-vous avec
                un professionnel de santé.
              </p>
            </div>
          </>
          <>
            <img
              src="suivi-medicale.avif"
              alt="Consultation médicale et suivi à distance pour patients"
              loading="lazy"
            />
          </>
        </LayoutContent>
        <LayoutContent reverse="true">
          <>
            <div>
              <h5>Mobile Healthcare assistance SOS Médecins</h5>
              <h2 className="secondary-heading u-margin-bottom-small">
                Urgences et Consultations Médicales à Domicile à Casablanca
              </h2>
              <p>
                Disponible <strong>7j/7</strong>, Mobile Healthcare assure des
                &nbsp;
                <strong>consultations médicales à domicile</strong> pour les
                urgences et les besoins de suivi médical. Chaque visite comprend
                un &nbsp;
                <strong>
                  examen clinique approfondi, un diagnostic personnalisé et une
                  prise en charge adaptée
                </strong>
                &nbsp;à votre état de santé. En l&apos;absence de votre médecin
                traitant ou en cas de besoin médical urgent, nos{" "}
                <strong>médecins généralistes expérimentés</strong>{" "}
                interviennent directement à votre domicile pour vous apporter
                les soins nécessaires, de jour comme de nuit.
              </p>
              <div>
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
          </>
          <>
            <img
              src="geriatrie.avif"
              alt="Médecin à domicile en intervention pour une urgence médicale à Casablanca"
              loading="lazy"
            />
          </>
        </LayoutContent>
        <ServicesView />
      </div>
    </section>
  );
};

export default ConsultationDomicile;
