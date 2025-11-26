import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Hero from "../UI/Hero";
import LayoutContent from "../UI/LayoutContent";

const SoinsInfirmiers = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Mobile Healthcare",
    url: "https://www.mobile-healthcare.org/soins-infirmiers",
    logo: "https://www.mobile-healthcare.org/logo.avif",
    image: "https://www.mobile-healthcare.org/nurse-at-home.avif",
    description:
      "Mobile Healthcare propose un infirmier à domicile à Casablanca, 7j/7, pour des soins infirmiers professionnels : pansements, injections, perfusions, pose de sondes, etc.",
    telephone: "+212696964341",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casablanca",
      addressCountry: "MA",
    },
    areaServed: {
      "@type": "Place",
      name: "Casablanca",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.5924501,
      longitude: -7.6043579,
    },

    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: "Soins Infirmiers à Domicile",
          procedureType: "TherapeuticProcedure",
          description:
            "Soins infirmiers à domicile incluant les pansements, injections, perfusions, pose de sonde urinaire et gastrique, gestion de la nutrition parentérale, et soins post-opératoires.",
        },
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+212696964341",
      contactType: "Customer Service",
      availableLanguage: ["English", "French", "Arabic"],
    },
  };

  const handleWhatsAppConversion = (url) => {
    if (typeof window.gtag_report_conversion === "function") {
      console.log(url);
      window.gtag_report_conversion(url);
    } else {
      window.location = url; // Fallback in case gtag_report_conversion is not defined
    }
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>INFIRMIER À DOMICILE CASABLANCA | Mobile Healthcare</title>
        <meta
          name="description"
          content="Mobile Healthcare met à votre disposition un infirmier à domicile à Casablanca, 7j/7, pour des soins infirmiers professionnels : pansements, injections, perfusions. Appelez-nous dès maintenant pour une prise en charge rapide !"
        />
        <meta
          name="keywords"
          content="soins infirmiers à domicile Casablanca,infirmier à domicile, nurse home care, soins à domicile, pansements, injections, perfusions, sonde gastrique, sonde vésicale, Mobile Healthcare"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mobile Healthcare" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://www.mobile-healthcare.org/soins-infirmiers"
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <h1 className="heading-primary center-text u-margin-bottom-medium u-margin-top-big">
        Infirmier à Domicile
      </h1>
      <Hero
        h2="Soins Infirmiers à Domicile"
        h5="Mobile healthcare Assistance"
        className="soins__hero"
      />
      <div className="container">
        <div className="prelevement__def">
          <h2 className="secondary-heading center-text u-margin-bottom-medium">
            Soins infirmiers à domicile à Casablanca &mdash; Service rapide et
            professionnel
          </h2>

          <section>
            <p>
              <strong>Mobile Healthcare</strong> vous offre un{" "}
              <strong>service infirmier à domicile à Casablanca</strong>, adapté
              à vos besoins médicaux. Nos{" "}
              <strong>infirmiers et infirmières diplômés </strong>
              offrent des soins comme{" "}
              <strong>
                des pansements, des injections et des perfusions. Ils posent
                aussi des sondes gastriques et vésicales,
              </strong>
              ainsi que d&apos;autres soins spécialisés, directement chez vous.
            </p>

            <p>
              Nous offrons un{" "}
              <strong>service de soins infirmiers fiable et rapide</strong>,
              disponible 24 heures sur 24 et 7j/7 pour votre bien-être et votre
              tranquillité d&apos;esprit.
            </p>

            <p>
              <strong>Besoin d&apos;un infirmier à domicile ? </strong>
              <span className="highlight">
                Contactez-nous dès maintenant sur le numero:{" "}
                <strong>06 96 96 43 41</strong>
              </span>
            </p>
          </section>

          <div>
            <div className="center-text">
              <Link
                className="btn u-margin-top-big"
                to="https://wa.me/+212696964341"
                title="Contact me on WhatsApp"
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
            <img
              src="nurse-at-home.avif"
              title="infirmier-a-domicile-casablanca"
              alt="Infirmière réalisant des soins infirmiers à domicile à Casablanca avec Mobile Healthcare &mdash; Pansements, injections, perfusions et plus."
            />
          </div>
        </div>
        <LayoutContent>
          <>
            <section className="u-margin-bottom-medium">
              <h4 className="u-margin-bottom-small">
                Infirmier à domicile - Soins des Plaies et Changement de
                Pansement à Domicile
              </h4>
              <p>
                Nos{" "}
                <strong>infirmiers spécialisés à domicile à Casablanca</strong>{" "}
                assurent le <strong>changement de pansement</strong> en toute
                sécurité. Grâce à des{" "}
                <strong>techniques stériles avancées</strong>, nous prévenons
                les infections et accélérons la cicatrisation des plaies.
              </p>
              <p>
                Nous prenons en charge tous types de plaies :{" "}
                <strong>
                  escarres, plaies post-opératoires, pied diabétique, gangrène
                </strong>{" "}
                et autres lésions cutanées. Notre objectif est de garantir un{" "}
                <strong>soin efficace</strong> pour une guérison rapide et un
                meilleur confort du patient.
              </p>
              <p>
                Vous recherchez un service de{" "}
                <strong>
                  changement de pansement à domicile à Casablanca{" "}
                </strong>{" "}
                ?{" "}
                <Link className="services-link" to="tel:+212696964341">
                  {" "}
                  Contactez-nous{" "}
                </Link>{" "}
                dès aujourd&apos;hui !
              </p>
            </section>

            <section>
              <h4 className="u-margin-bottom-small">
                Infirmier à domicile - Pose de Sonde Urinaire et Gastrique à
                Domicile à Casablanca
              </h4>
              <p>
                Nos <strong>infirmiers à domicile à Casablanca</strong> sont
                experts en <strong>pose de sonde urinaire</strong> et de{" "}
                <strong>pose de sonde gastrique</strong>,ils garantissent des
                soins précis et sûrs.
              </p>
              <p>
                Nous assurons également la{" "}
                <strong>gestion de la nutrition par perfusion </strong>,
                essentielle pour les patients nécessitant un apport nutritif
                contrôlé. Chaque intervention est réalisée avec un{" "}
                <strong>suivi personnalisé</strong> pour assurer le bien-être et
                le confort du patient.
              </p>
              <p>
                Besoin d&apos;un{" "}
                <strong>
                  service de pose de sonde urinaire ou gastrique à domicile à
                  Casablanca
                </strong>{" "}
                ?{" "}
                <Link className="services-link" to="tel:+212696964341">
                  Contactez-nous{" "}
                </Link>{" "}
                pour une intervention rapide et professionnelle.
              </p>
            </section>
          </>
          <>
            <div className="overlay">&nbsp;</div>
            <img
              src="grid-of-4-imgs.avif"
              title="infirmier-a-domicile-casablanca"
              alt="Infirmier à domicile à Casablanca réalisant un changement de pansement et une pose de sonde avec des soins professionnels et personnalisés pour assurer le confort et la guérison des patients."
              loading="lazy"
            />
          </>
        </LayoutContent>
        <LayoutContent reverse="true">
          <>
            <section className="u-margin-bottom-medium">
              <h4 className="u-margin-bottom-small">
                Infirmier à domicile - Service de Garde Malade 24h/24 à Domicile
                &mdash; Assistance Médicale sur mesure
              </h4>
              <p>
                Pour les familles qui ont besoin de{" "}
                <strong>soins infirmiers, Mobile Healthcare</strong> propose un
                service de <strong>garde malade à domicile.</strong>
                Ce service est toujours disponible. Il fonctionne 24 heures sur
                24 et 7 jours sur 7. C&apos;est idéal pour les patients qui ont
                besoin d&apos;une surveillance constante. Cela assure sécurité,
                confort et tranquillité aux proches.
              </p>
            </section>
            <section>
              <h4 className="u-margin-bottom-small">
                Infirmier à domicile - Soins Infirmiers à Domicile à Casablanca
                : Un Accompagnement Sur-Mesure
              </h4>
              <p>
                Chez <strong>Mobile Healthcare</strong> , nous adaptons chaque
                prestation aux besoins spécifiques de nos patients. Nos{" "}
                <strong>soins infirmiers à domicile </strong> permettent une{" "}
                <strong>prise en charge médicale adaptée </strong>, tout en
                assurant un suivi personnalisé et une continuité des soins. Nous
                collaborons étroitement avec les médecins traitants pour
                garantir une{" "}
                <strong>
                  {" "}
                  assistance médicale coordonnée et efficace à domicile.
                </strong>
              </p>
            </section>
            <p className="u-margin-top-medium">
              👩‍⚕️ <strong>Besoin d&apos;un garde-malade à domicile ?</strong>{" "}
              <Link className="services-link" to="tel:+212696964341">
                Contactez-nous{" "}
              </Link>{" "}
              dès maintenant pour une prise en charge immédiate.
            </p>
          </>
          <>
            <div className="overlay"></div>
            <img
              src="garde-domicile.avif"
              title="infirmier-a-domicile-casablanca"
              alt="Garde malade à domicile à Casablanca &mdash; Service infirmier 24h/24 pour assistance médicale et soins personnalisés à domicile."
              loading="lazy"
            />
          </>
        </LayoutContent>
        <LayoutContent>
          <>
            <section className="u-margin-bottom-medium">
              <h4 className="u-margin-bottom-small">
                Infirmier à domicile - Injections à Domicile &mdash; gestion en
                Toute Sécurité
              </h4>
              <p>
                Nos professionnels de santé réalisent les{" "}
                <strong>
                  injections dans le muscle (intramusculaires), sous-cutanées et
                  intraveineuses
                </strong>
                , incluant :
              </p>
              <ul className="list u-margin-top-small">
                <li>
                  <strong>✔ Antibiotiques</strong> &mdash; Traitement efficace
                  des infections sous prescription médicale.
                </li>
                <li>
                  <strong>✔ Anticoagulants</strong> &mdash; Prévention des
                  thromboses et embolies pulmonaires.
                </li>
                <li>
                  <strong>✔ Autres médicaments injectables</strong> adaptés aux
                  pathologies chroniques ou aigües.
                </li>
              </ul>
            </section>
            <section>
              <h4 className="u-margin-bottom-small">
                Infirmier à domicile - Perfusions à Domicile &mdash; apport
                d&apos;eau / hydratation et Soutien Nutritionnel
              </h4>
              <p>
                Nous assurons la mise en place et la surveillance de{" "}
                <strong>perfusion intraveineuse</strong> avec:
              </p>
              <ul className="list u-margin-top-small">
                <li>
                  <strong>✔ Sérum physiologique</strong> &mdash; Pour maintenir
                  l&apos;équilibre hydrique et traiter les déshydratations.
                </li>
                <li>
                  <strong>✔ Glucose intraveineux</strong> &mdash; Apport
                  énergétique pour les patients affaiblis.
                </li>
                <li>
                  <strong>
                    ✔ Solutions d&apos;apport d&apos;eau / hydratation
                  </strong>{" "}
                  &mdash; Indispensables en cas de troubles digestifs sévères.
                </li>
              </ul>
            </section>
            <p className="u-margin-top-medium">
              <strong>
                👩‍⚕️ Besoin d&apos;une injection ou d&apos;une perfusion à
                domicile ?{" "}
              </strong>{" "}
              <Link className="services-link" to="tel:+212696964341">
                Contactez-nous{" "}
              </Link>{" "}
              dès maintenant pour une prise en charge immédiate.
            </p>
          </>
          <>
            <div className="overlay"></div>
            <img
              src="injection-a-domicile.avif"
              title="injection-a-domicile-casablanca"
              alt="Administration d'une injection ou d'une perfusion à domicile pour un patient, assurant des soins médicaux sécurisés."
              loading="lazy"
            />
          </>
        </LayoutContent>
        <LayoutContent reverse="true">
          <>
            <section className="u-margin-bottom-medium">
              <h4 className="u-margin-bottom-small">
                Infirmier à domicile - Soins d&apos;Hygiène et de Confort
                &mdash; Assistance aux Patients Dépendants
              </h4>
              <p>
                Nos infirmiers(ères) experts prennent en charge les soins
                d&apos;hygiène et de confort pour les patients en perte
                d&apos;autonomie :
              </p>
              <ul className="list u-margin-top-small">
                <li>
                  <strong>✔ Toilette complète ou partielle</strong> &mdash;
                  Respect des besoins et du bien-être du patient.
                </li>
                <li>
                  <strong>✔ Prévention des escarres</strong> &mdash;
                  Surveillance et soins des patients alités.
                </li>
                <li>
                  <strong>
                    ✔ Aide au remise en place et au maintien du confort.
                  </strong>
                </li>
              </ul>
            </section>
            <section>
              <h4 className="u-margin-bottom-small">
                Infirmier à domicile - Ablation des Fils et Sutures &mdash;
                Soins Post-Opératoires à Domicile
              </h4>
              <p>
                Nous effectuons l&apos;ablation des fils et agrafes après une
                intervention chirurgicale, garantissant :
              </p>
              <ul className="list u-margin-top-small">
                <li>
                  <strong>
                    ✔ Un retrait sans douleur et en toute sécurité
                  </strong>
                  .
                </li>
                <li>
                  <strong>✔ Un suivi rigoureux de la cicatrisation</strong> pour
                  éviter toute complication.
                </li>
              </ul>
            </section>
            <p className="u-margin-top-medium">
              <strong>📞 Besoin de soins à domicile? </strong>{" "}
              <Link className="services-link" to="tel:+212696964341">
                Contactez-nous{" "}
              </Link>{" "}
              dès maintenant pour une prise en charge immédiate.
            </p>
          </>
          <>
            <div className="overlay"></div>
            <img
              src="ablation-fils.avif"
              title="infirmier-a-domicile-casablanca"
              alt="Infirmier réalisant des soins d'hygiène, de confort et l'ablation des fils à domicile pour assurer le bien-être et la récupération des patients."
              loading="lazy"
            />
          </>
        </LayoutContent>
        <div className="prelevement__def">
          <h2 className="secondary-heading center-text u-margin-bottom-medium">
            Besoin d&apos;un Infirmier a Domicile ? Contactez Mobile Healthcare
          </h2>
          <section>
            <p>
              Vous recherchez un{" "}
              <strong>infirmier à domicile près de vous</strong> à Casablanca ?{" "}
              <strong>Mobile Healthcare</strong> vous offre des{" "}
              <strong>soins infirmiers à domicile</strong>, selon vos besoins.
              Nous proposons des pansements des injections, après une opération,
              des perfusions et bien plus encore.
            </p>
            <p>
              Nos services comprennent aussi également une{" "}
              <strong>infirmière à domicile</strong>, une{" "}
              <strong>aide-soignante</strong>, un <strong>aide-soignant</strong>
              , une <strong>hospitalisation à domicile 24h/24</strong> et une{" "}
              <strong>surveillance médicale personnalisée</strong> Cela garantit
              votre bien-être et celui de vos proches.
            </p>
            <p>
              📞 Contactez-nous dès maintenant :{" "}
              <Link to="tel:+212696964341" className="services-link">
                +212 6 96 96 43 41
              </Link>
            </p>
            <p>
              Avec <strong>Mobile Healthcare</strong>, profitez d&apos;un{" "}
              <strong>service infirmier à domicile</strong> de qualité, assuré
              par des professionnels compétents et à votre écoute.
            </p>
          </section>
          <div className="center-text">
            <Link
              className="btn u-margin-top-big"
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
        </div>
        <div className="nos-services prelevement__def ">
          <h2 className="secondary-heading center-text u-margin-bottom-medium">
            Nos Services à Domicile
          </h2>
          <ul className="services-list">
            <li className="service-item">
              <img
                src="injection-a-domicile.avif"
                title="injection-a-domicile-casablanca"
                alt="Administration d'une injection ou d'une perfusion à domicile pour un patient, assurant des soins médicaux sécurisés."
              />
              <div className="service-details">
                <h5 className="u-margin-bottom-small">
                  Injection à domicile &mdash; Casablanca
                </h5>
                <p>
                  Faites appel à un <strong>infirmier à domicile</strong> pour
                  vos injections en toute sécurité, sans quitter votre logement.
                  Nos professionnels interviennent rapidement à Casablanca, dans
                  le respect des normes d&apos;hygiène médicale.
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
                src="pansement-change.avif"
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
                  Casablanca pour le changement de pansement, dans le respect
                  strict des normes d&apos;hygiène. Soins adaptés pour plaies
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
                src="perfusion-service.avif"
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
                  Casablanca? Nos infirmiers diplômés assurent la pose et le
                  suivi en toute sécurité : réhydratation, antibiotiques, fer,
                  nutrition parentérale… Le tout dans le respect strict des
                  protocoles médicaux.
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
              <img src="prelevement.avif" />
              <div className="service-details">
                <h5 className="u-margin-bottom-small">
                  Prélèvement à domicile &mdash; Casablanca
                </h5>
                <p>
                  Optez pour un <strong>prélèvement sanguin à domicile</strong>{" "}
                  à Casablanca, sans vous déplacer. Nos infirmiers réalisent
                  prises de sang et autres analyses, avec envoi sécurisé des
                  échantillons à notre laboratoire partenaire.
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
              <img src="lavement-rectal.avif" />
              <div className="service-details">
                <h5 className="u-margin-bottom-small">
                  {" "}
                  Lavement à domicile &mdash; Casablanca
                </h5>
                <p>
                  Un <strong>infirmier à domicile</strong> se déplace à
                  Casablanca pour réaliser vos lavements en toute discrétion.
                  Soins adaptés, matériel stérile, confort et hygiène garantis
                  selon votre prescription médicale.
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
        <section className="prelevement__def">
          <h2 className="secondary-heading center-text u-margin-bottom-medium">
            Nos Services Infirmiers à Domicile à Casablanca
          </h2>
          <p>
            Besoin d&apos;un <strong>infirmier à domicile</strong> ou d&apos;une{" "}
            <strong>infirmière libérale autour de moi</strong> à Casablanca ?
            Nous intervenons rapidement dans tous les quartiers :{" "}
            <strong>Maarif</strong>, <strong>Bourgogne</strong>,{" "}
            <strong>Oasis</strong>,<strong>Hay Hassani</strong>,{" "}
            <strong>Ain Sebaâ</strong>, <strong>Sidi Maârouf</strong>, et{" "}
            <strong>Belvédère</strong>. Notre équipe propose des{" "}
            <strong>services infirmiers à domicile</strong> complets et
            sécurisés, adaptés à chaque patient.
          </p>
          <p>
            Nos prestations incluent le{" "}
            <strong>changement de pansement à domicile</strong>, la{" "}
            <strong>perfusion à domicile</strong>, le{" "}
            <strong>prélèvement sanguin à domicile</strong>, ainsi que
            d&apos;autres <strong>soins à domicile</strong> pour adultes et
            enfants. Nous travaillons avec des{" "}
            <strong>infirmiers diplômés</strong> et expérimentés, disponibles
            7j/7 sur toute la ville de Casablanca.
          </p>
          <p>
            Pour une prise en charge rapide, faites appel à notre{" "}
            <strong>service infirmier à domicile Casablanca</strong>. Nous
            proposons également une <strong>aide-soignante à domicile</strong>{" "}
            si besoin pour l&apos;accompagnement quotidien.
          </p>
        </section>
      </div>
    </div>
  );
};

export default SoinsInfirmiers;
