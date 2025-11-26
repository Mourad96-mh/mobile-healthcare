import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./components/UI/Applayout";
import Spinner from "./components/UI/Spinner";

const ConsultationDomicile = lazy(() =>
  import("./components/pages/ConsultationDomicile")
);
// import Prelevement from "./components/pages/Prelevement";
const Prelevement = lazy(() => import("./components/pages/Prelevement"));
// import SoinsInfirmiers from "./components/pages/SoinsInfirmiers";
const SoinsInfirmiers = lazy(() =>
  import("./components/pages/SoinsInfirmiers")
);
// import HomPage from "./components/pages/Home";
const HomePage = lazy(() => import("./components/pages/Home"));
// import Contact from "./components/pages/Contact";
const Contact = lazy(() => import("./components/pages/Contact"));

// import TransportSanitaire from "./components/pages/TransportSanitaire";
const TransportSanitaire = lazy(() =>
  import("./components/pages/TransportSanitaire")
);

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<Spinner />}>
              <HomePage />
            </Suspense>
          ),
        },
        {
          path: "/consultation-a-domicile",
          element: (
            <Suspense fallback={<Spinner />}>
              <ConsultationDomicile />
            </Suspense>
          ),
        },
        {
          path: "/transport-sanitaire",
          element: (
            <Suspense fallback={<Spinner />}>
              <TransportSanitaire />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: (
            <Suspense fallback={<Spinner />}>
              <Contact />
            </Suspense>
          ),
        },
        {
          path: "/soins-infirmiers",
          element: (
            <Suspense fallback={<Spinner />}>
              <SoinsInfirmiers />
            </Suspense>
          ),
        },
        {
          path: "/prelevement-a-domicile",
          element: <Prelevement />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

function App() {
  return (
    <>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </>
  );
}

export default App;
