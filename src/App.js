import React, { lazy, Suspense } from "react";
import ErrorBoundary from "./Components/ErrorBoundaries/Errorboundary";

import "./Styles/styles.scss";
import "./Styles/LazyLoad.scss";

const HomeLazy = lazy(() => import("./Components/Pages/Home"));

export default function () {
  const AppLazy = (
    <Suspense fallback={<span>Cargando...</span>}>
      <HomeLazy />
    </Suspense>
  );
  return (
    <ErrorBoundary componentName="App.js">
      <div id="modals" />

      <div className="App">{AppLazy}</div>
    </ErrorBoundary>
  );
}
