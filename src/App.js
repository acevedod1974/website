import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProcesosDeFabricacion1 from "./pages/ProcesosDeFabricacion1";
import ProcesosDeFabricacion2 from "./pages/ProcesosDeFabricacion2";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/pf1" element={<ProcesosDeFabricacion1 />} />
        <Route path="/pf2" element={<ProcesosDeFabricacion2 />} />
      </Routes>
    </Router>
  );
};

export default App;
