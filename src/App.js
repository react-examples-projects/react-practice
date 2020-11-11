import React, { lazy, Suspense } from "react";
import ErrorBoundary from "./Components/ErrorBoundaries/Errorboundary";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostContainer from "./Components/Pages/Post/PostContainer";

import "./Styles/styles.scss";
import "./Styles/LazyLoad.scss";

const HomeLazy = lazy(() => import("./Components/Pages/Home/Home"));

export default function () {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/post/:id">
          <PostContainer />
        </Route>
      </Switch>
    </Router>
  );
}

function App() {
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
