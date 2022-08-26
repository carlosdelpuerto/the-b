import React from "react";
import NavBar from "./components/NavBar";
import SobreNosotros from "./components/SobreNosotros";
import Servicios from "./components/Servicios";
import Footer from "./components/Footer";
import Slider from "./components/SliderImg.jsx/Slider";

function App() {
  
  return (
    <div>
      <NavBar />
      <Slider/>
      <SobreNosotros />
      <Servicios />
      <Footer />
    </div>
  );
}

export default App;
