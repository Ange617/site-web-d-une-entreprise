function Realisations() {
    return (
        <section id="realisation" className="py-20 bg-gray-900 text-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Titre qui presente*/}
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mt-3d">
                        Nos Réalisations
                    </h2>

                    <div className="w-20 h-1 bg-blue-500 mx-auto mt-5"></div>

                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
                        Découvrez quelques-unes de nos réalisations en
                        chaudronnerie et en soudure.
                    </p>
                </div>
            </div>

            {/* Galerie de photos*/}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

                <div className="group relative overflow-hidden rounded-2xl">
                    <img
                        src="/real1.jpg"
                        alt="Réalisation de METALEX SARL"
                        className="w-full h-80 md: h-96 object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition duration-500 flex items-end">

                        <div className="p-6 opacity-0 group-hover:opacity-100 transition duration-500">
                            <h3 className="text-xl font-bold">
                                Soudure
                            </h3>

                            <p className="text-gray-300 mt-2">
                                Travail de soudure professionnel
                            </p>
                        </div>

                    </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl">
                    <img
                        src="/real2.jpg"
                        alt="Réalisation de METALEX SARL"
                        className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition duration-500 flex items-end">

                        <div className="p-6 opacity-0 group-hover:opacity-100 transition duration-500">
                            <h3 className="text-xl font-bold">
                                Projet métallique
                            </h3>

                            <p className="text-gray-300 mt-2">
                                Une réalisation adaptée aux besoins du client
                            </p>
                        </div>

                    </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl">
                    <img
                        src="/real3.jpg"
                        alt="Réalisation de METALEX SARL"
                        className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition duration-500 flex items-end">

                        <div className="p-6 opacity-0 group-hover:opacity-100 transition duration-500">
                            <h3 className="text-xl font-bold">
                                Chaudronnerie
                            </h3>

                            <p className="text-gray-300 mt-2">
                                Réalisation métallique sur mesure
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </section >
    );
}

export default Realisations;