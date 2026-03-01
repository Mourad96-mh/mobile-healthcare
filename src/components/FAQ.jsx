import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { HiChevronDown } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = t("faq.items", { returnObjects: true });

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
        {t("faq.title")}
      </h2>
      <ul className="faq--list">
        {faqs.map((faq, index) => (
          <li key={index} className="faq--item">
            <div className="faq--heading">
              <p className="faq--question">{faq.question}</p>
              <button
                className="faq--button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-label={openIndex === index ? t("faq.collapse") : t("faq.expand")}
              >
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
