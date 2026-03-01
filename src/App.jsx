import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./components/UI/Applayout";
import Spinner from "./components/UI/Spinner";
import HomePage from "./components/pages/Home";

const ConsultationDomicile = lazy(() =>
  import("./components/pages/ConsultationDomicile")
);
const Prelevement = lazy(() => import("./components/pages/Prelevement"));
const SoinsInfirmiers = lazy(() =>
  import("./components/pages/SoinsInfirmiers")
);
const Contact = lazy(() => import("./components/pages/Contact"));
const TransportSanitaire = lazy(() =>
  import("./components/pages/TransportSanitaire")
);

const childRoutes = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "consultation-a-domicile",
    element: (
      <Suspense fallback={<Spinner />}>
        <ConsultationDomicile />
      </Suspense>
    ),
  },
  {
    path: "transport-sanitaire",
    element: (
      <Suspense fallback={<Spinner />}>
        <TransportSanitaire />
      </Suspense>
    ),
  },
  {
    path: "contact",
    element: (
      <Suspense fallback={<Spinner />}>
        <Contact />
      </Suspense>
    ),
  },
  {
    path: "soins-infirmiers",
    element: (
      <Suspense fallback={<Spinner />}>
        <SoinsInfirmiers />
      </Suspense>
    ),
  },
  {
    path: "prelevement-a-domicile",
    element: (
      <Suspense fallback={<Spinner />}>
        <Prelevement />
      </Suspense>
    ),
  },
];

const router = createBrowserRouter(
  [
    { path: "/", element: <AppLayout />, children: childRoutes },
    { path: "/en", element: <AppLayout />, children: childRoutes },
    { path: "/es", element: <AppLayout />, children: childRoutes },
    { path: "/ar", element: <AppLayout />, children: childRoutes },
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
