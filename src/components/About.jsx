function About() {
  return (
    <section id="apropos" className="py-20 bg-gray-900 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* Image de coté */}
          <div className="flex justify-center">
            <div className="relative">

              {/* Petit cadre derrière l'image */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-blue-500 rounded-2xl"></div>

              <img
                src="/about.jpg"
                alt="METALEX SARL"
                className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl"
              />

            </div>
          </div>

          {/* Texte à coyé de l'image */}
          <div>

            <h2 className="text-4xl md:text-5xl mt-3 font-bold">
              À propos de METALEX SARL
            </h2>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              METALEX SARL  est une entreprise qui met son savoir-faire au service de la fabrication et de la transformation
              de matériaux métallurgique de haute qualité. Nous concevons et réalisons des ouvrages métalliques solides, durables
              et adaptés aux besoins des particuliers, des entreprises et des industries.<br /><br />
              Vous satisfaire est notre priorité...
            </p>

            <div className="mt-8 flex items-center gap-4">

              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/30">
                <span className="text-blue-500 text-xl">
                  ✓
                </span>
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Qualité & savoir-faire
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  Des réalisations pensées pour durer.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;