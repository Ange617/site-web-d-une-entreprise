function Hero() {
  return (
    <section id="accueil"
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/hero_indust.jpg')",
      }}
    >

      {/* Cette ligne est pour la couche sombre par-dessus l'image */}
      <div className="absolute inset-0 bg-black/70"></div>


      {/* Le texte */}
      <div className="relative max-w-7xl mx-auto text-white text-center px-6 w-full">

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          METALEX SARL - La Touche Des Experts</h1>

        <p className="mt-5 text-lg sm:text-xl md:text-2xl">
          Votre partenaire en construction métallique. Fabrication d'ouvrage métallique.
        </p> 
        <h2 className="mt-5 text-lg sm:text-xl md:text-2xl">Qualité - Fiabilité - Durabilité - Satisfaction garantie</h2>
        <br />
        
      </div>

    </section>
  );
}

export default Hero;