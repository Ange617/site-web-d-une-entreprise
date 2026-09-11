import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Realisation from "./components/Realisation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Projet from "./page/Projet";
import Stage from "./page/Stage";


import "./index.css";


function Accueil() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Realisation />
      <Contact />
      <Footer />
    </>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Page d'accueil */}
        <Route path="/" element={<Accueil />} />

        {/* Page projet */}
        <Route path="/projet" element={<Projet />} />

        {/* Page stage */}
        <Route path="/stage" element={<Stage />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;