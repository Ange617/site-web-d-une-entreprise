function Realisations() {
    return (
        <section id="realisation" className="py-20 bg-gray-900 text-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Titre qui presente*/}
                <div className="text-center">
                    <h2 className="text-4xl font-bold">
                        Nos Réalisations
                    </h2>

                    <p className="mt-4 text-gray-300">
                        Découvrez quelques-unes de nos réalisations
                        en chaudronnerie et en soudure.
                    </p>
                </div>

                {/* Galerie de photos*/}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

                    <div>
                        <img
                            src="/real1.jpg"
                            alt="Réalisation METALEX SARL"
                            className="w-full h-64 object-cover rounded-xl"
                        />
                    </div>

                    <div>
                        <img
                            src="/real2.jpg"
                            alt="Réalisation METALEX SARL"
                            className="w-full h-64 object-cover rounded-xl"
                        />
                    </div>

                    <div>
                        <img
                            src="/real3.jpg"
                            alt="Réalisation METALEX SARL"
                            className="w-full h-64 object-cover rounded-xl"
                        />
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Realisations;