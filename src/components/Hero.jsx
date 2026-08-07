function Hero() {
  return (
    <section id="accueil"
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/hero_indust.jpg')",
      }}
    >

      {/* Cette ligne est pour la couche sombre par-dessus l'image */}
      <div className="absolute inset-0 bg-black/70"></div>


      {/* Le texte */}
      <div className="relative max-w-7x1 mx-auto text-white text-center px-6 w-full">

        <h1 className="text-4xl md:text-5xl font-bold">
          METALEX SARL - La Touche Des Experts</h1>

        <p className="mt-5 text-lg">
          Votre partenaire en construction métallique. Fabrication d'ouvrage métallique.
          <h2>Qualité - Fiabilité - Durabilité - Satisfaction garantie</h2>
        </p> <br />
        
      </div>

    </section>
  );
}

export default Hero;