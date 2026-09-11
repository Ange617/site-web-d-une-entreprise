import { useEffect, useRef } from "react";

function About() {
  const galleryRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;

    if (!gallery) return;

    let animationId;
    let position = 0;

    const vitesse = 0.5;

    const animate = () => {
      position += vitesse;

      // Quand on arrive à la moitié,
      // on recommence sans que l'utilisateur voie la coupure.
      if (position >= gallery.scrollWidth / 2) {
        position = 0;
      }

      gallery.scrollLeft = position;

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const images = [
    "/about.jpg",
    "/real1.jpg",
    "/real2.jpg",
    "/real3.jpg",
    "/real4.jpg",
    "/about.jpg",
    "/real1.jpg",
    "/real2.jpg",
    "/real3.jpg",
    "/real4.jpg",
  ];

  return (
    <section
      id="apropos"
      className="py-20 bg-slate-200 text-gray-900 dark:bg-gray-950 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* GALERIE */}
          <div className="w-full overflow-hidden">

            <div
              ref={galleryRef}
              className="flex gap-5 overflow-hidden"
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="shrink-0 relative"
                >
                  <img
                    src={image}
                    alt={`Réalisation METALEX SARL ${index + 1}`}
                    className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl"
                  />

                  {/* Petit cadre bleu */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-blue-500/30 pointer-events-none"></div>
                </div>
              ))}
            </div>

          </div>

          {/* TEXTE */}
          <div>

            <p className="text-blue-600 dark:text-blue-500 uppercase tracking-widest text-sm font-semibold">
              Qui sommes-nous ?
            </p>

            <h2 className="text-4xl md:text-5xl mt-3 font-bold">
              À propos de METALEX SARL
            </h2>

            <div className="w-20 h-1 bg-blue-500 mt-5"></div>

            <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              METALEX SARL est une entreprise qui met son savoir-faire
              au service de la fabrication et de la transformation de
              matériaux métallurgiques de haute qualité.
              Nous concevons et réalisons des ouvrages métalliques
              solides, durables et adaptés aux besoins des particuliers,
              des entreprises et des industries.
              <br />
              <br />
              Vous satisfaire est notre priorité...
            </p>

            {/* Qualité */}
            <div className="mt-8 flex items-center gap-4">

              <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/30">
                <span className="text-blue-500 text-xl">
                  ✓
                </span>
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Qualité & savoir-faire
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
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