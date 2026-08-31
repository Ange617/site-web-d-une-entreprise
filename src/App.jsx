import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Realisation from "./components/Realisation";
import Contact from "./components/Contact";
import "./index.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Realisation />
      <Contact />
      <Footer />
      
    </div>
  );
}


export default App;


