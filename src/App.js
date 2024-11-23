import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ProcesosDeFabricacion1 from "./pages/ProcesosDeFabricacion1";
import ProcesosDeFabricacion2 from "./pages/ProcesosDeFabricacion2";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pf1" component={ProcesosDeFabricacion1} />
        <Route path="/pf2" component={ProcesosDeFabricacion2} />
      </Switch>
    </Router>
  );
};

export default App;
