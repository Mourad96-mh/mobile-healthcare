import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import MainHeader from "./MainHeader";
import Footer from "./Footer";
import FAQ from "../FAQ";
import { captureGCLID } from "../../utils/utils";

const AppLayout = () => {
  useEffect(() => {
    // Call the script on component mount
    fetch("/log-ip.php")
      .then((response) => response.text())
      // .then((data) => console.log(data)) // Optional: Log success message
      .catch((error) => console.error("Error logging IP:", error));
  }, []); // Empty dependency array ensures it runs only once on mount

  useEffect(() => {
    console.log("captureGCLID");
    captureGCLID();
  }, []);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mobile Healthcare",
    image: "https://mobile-healthcare.org/logo.avif",
    "@id": "https://mobile-healthcare.org",
    url: "https://mobile-healthcare.org",
    telephone: "+212696964341",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Boulevard Zerktouni",
      addressLocality: "Casablanca",
      postalCode: "20000",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.5924501,
      longitude: -7.6043579,
    },
    openingHoursSpecification: [
      {
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
    ],

    description:
      "Mobile Healthcare propose des services de soins infirmiers à domicile à Casablanca : pansements, injections, perfusions et transport médicalisé 24h/24 et 7j/7.",
    serviceArea: {
      "@type": "Place",
      name: "Casablanca",
    },
    services: [
      {
        "@type": "MedicalService",
        name: "Infirmier à domicile",
        description:
          "Service d'infirmier à domicile à Casablanca pour les soins médicaux et infirmiers professionnels.",
      },
      {
        "@type": "MedicalService",
        name: "Consultation médicale à domicile",
        description:
          "Consultations médicales à domicile avec un médecin qualifié, disponibles 24h/24 et 7j/7.",
      },
      {
        "@type": "MedicalService",
        name: "Transport médicalisé",
        description:
          "Transport médicalisé sécurisé pour urgences et transferts hospitaliers.",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      <MainHeader />
      <main>
        <Outlet />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
