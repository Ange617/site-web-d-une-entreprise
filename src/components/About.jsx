function About() {
  return (
    <section id="apropos" className="py-20 bg-gray-900 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/about.jpg"
              alt="METALEX SARL"
              className="w-95 h-95 object-cover rounded-full"
            />
          </div>

          {/* Texte */}
          <div>

            <h2 className="text-4xl font-bold">
              À propos de METALEX SARL
            </h2>

            <p className="mt-6 text-gray-300 text-lg">
              METALEX SARL  est une entreprise qui met son savoir-faire au service de la fabrication et de la transformation
          de matériaux métallurgique de haute qualité. Nous concevons et réalisons des ouvrages métalliques solides, durables
          et adaptés aux besoins des particuliers, des entreprises et des industries.
            </p>

            <p className="mt-4 text-gray-300">
              Vous satisfaire est notre priorité...
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;