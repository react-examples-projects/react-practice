import React, { lazy, Suspense } from "react";
import "./App.css";
import ErrorBoundary from "./Components/ErrorBoundaries/Errorboundary";

const HomeLazy = lazy(() => import("./Components/Pages/Home"));

export default function () {
  const AppLazy = (
    <Suspense fallback={<span>Cargando...</span>}>
      <HomeLazy />
    </Suspense>
  );
  return (
    <ErrorBoundary componentName="TestComponent">
      <div id="modals" />

      <div className="App">{AppLazy}</div>
    </ErrorBoundary>
  );
}
