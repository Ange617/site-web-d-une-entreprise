import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Realisation from "./components/Realisation";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  return (
    <div className="text-sm md:text-lg lg:text-2xl">
      {/*--text-sm  c'est pour les telephones
       md:text-lg c'est pour les tablettes
      lg: text-2xl c'est pour les ordinateur */}
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Realisation />
      <Contact />
    </div>
  );
}


export default App;


