import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
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
    </div>
  );
}


export default App;


