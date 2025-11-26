import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { HiChevronDown } from "react-icons/hi2";

const faqs = [
  {
    question: "Quels sont vos services à domicile ?",
    answer:
      "Nous proposons des soins infirmiers à domicile, consultations médicales, aide à la toilette, pansements, perfusions, injections, et transport médicalisé.",
  },
  {
    question: "Êtes-vous disponibles 24h/24 et 7j/7 ?",
    answer: "Oui, notre service est disponible 24h/24 et 7j/7 sur Casablanca.",
  },
  {
    question: "Comment prendre rendez-vous ?",
    answer:
      "Vous pouvez nous appeler directement ou cliquer sur l’icône WhatsApp pour une prise de contact rapide.",
  },
  {
    question: "Dans quelles zones intervenez-vous à Casablanca ?",
    answer:
      "Nous intervenons dans tous les quartiers de Casablanca, y compris Maarif, Bourgogne, Sidi Maârouf, Hay Hassani, Oasis, Ain Sebaâ, Anfa, et bien d'autres.Notre objectif est de rendre les soins accessibles rapidement à domicile, où que vous soyez dans la ville.",
  },
  {
    question: "Qui sont les infirmiers/infirmières qui interviennent ?",
    answer:
      "🩺 Nos infirmiers et infirmières sont diplômés, expérimentés et inscrits à l’Ordre National des Infirmiers.Ils sont rigoureusement sélectionnés pour garantir des soins professionnels, humains et adaptés à chaque situation.",
  },
  {
    question:
      "Proposez-vous des soins pour les personnes âgées ou dépendantes ?",
    answer:
      "👵👴 Oui, nous proposons des soins personnalisés pour les personnes âgées, alitées ou en perte d’autonomie, à domicile Cela inclut les pansements, l’aide à la toilette, les perfusions, la surveillance médicale, et un accompagnement bienveillant au quotidien.",
  },
];
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <section className="faq">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>
      <h2 className="secondary-heading center-text u-margin-bottom-medium">
        FAQ &mdash; Soins médicaux à domicile avec Mobile Healthcare Casablanca
      </h2>
      <ul className="faq--list">
        {faqs.map((faq, index) => (
          <li key={index} className="faq--item">
            <div className="faq--heading">
              <p className="faq--question">{faq.question}</p>
              <button className="faq--button" onClick={() => toggleFAQ(index)}>
                <HiChevronDown />
              </button>
            </div>
            {openIndex === index && <p className="faq--answer">{faq.answer}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQ;
