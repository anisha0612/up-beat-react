import React from "react";
import PlayerPage from "./pages/PlayerPage/PlayerPage.jsx";
import GenrePage from "./pages/GenrePage/GenrePage.jsx";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <GenrePage />
        </Route>
        <Route path="/playlist/:genreName">
          <PlayerPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
