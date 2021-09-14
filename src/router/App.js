import React from "react";
import Header from "../components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import NovedadesJordan from "../pages/NovedadesJordan";
import NovedadesJordanProducts from "../pages/NovedadesJordan/NovedadesJordanProducts";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/products">
          <Header />
          <NovedadesJordanProducts/>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
