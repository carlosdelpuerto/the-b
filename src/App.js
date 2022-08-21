import React from "react";
import NavBar from "./components/NavBar";
import Inicio from "./components/Inicio";
import SobreNosotros from "./components/SobreNosotros";
import Servicios from "./components/Servicios";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Inicio />
      <SobreNosotros />
      <Servicios />
      <Footer />
    </div>
  );
}

export default App;
