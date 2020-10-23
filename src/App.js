import React, { lazy, Suspense } from "react";
import "./App.css";
import ErrorBoundary from "./Errors Capture/Errorboundary";

const TestComponentLazy = lazy(() => import("./TestComponent"));

class App extends React.Component {
  AppLazy = (
    <Suspense fallback={<span>Cargando...</span>}>
      <TestComponentLazy />
    </Suspense>
  );
  render() {
    return (
      <ErrorBoundary componentName="TestComponent">
        <div id="modals" />
        
        <div className="App">{this.AppLazy}</div>
      </ErrorBoundary>
    );
  }
}

export default App;
