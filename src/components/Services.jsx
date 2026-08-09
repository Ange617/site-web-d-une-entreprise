function Services() {
    return (
        <section d="services" className="py-20 bg-gray-950 text-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Titre */}
                <div className="text-center">
                    <h2 className="text-4xl font-bold">
                        Nos Services
                    </h2>

                    <p className="mt-4 text-gray-300">
                        Notre savoir-faire en chaudronnerie et en soudure
                        au service de vos projets.
                    </p>
                </div>

                {/* Services */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

                    {/* Chaudronnerie */}
                    <div className="bg-gray-900 p-8 rounded-xl">
                        <h3 className="text-2xl font-bold">
                            Chaudronnerie
                        </h3>

                        <p className="mt-4 text-gray-300">
                            Nous réalisons des travaux de chaudronnerie
                            adaptés aux besoins de nos clients, avec
                            précision et savoir-faire.
                        </p>
                    </div>

                    {/* Soudure */}
                    <div className="bg-gray-900 p-8 rounded-xl">
                        <h3 className="text-2xl font-bold">
                            Soudure
                        </h3>

                        <p className="mt-4 text-gray-300">
                            Nous réalisons différents travaux de soudure
                            avec une attention particulière portée à la
                            solidité et à la qualité des réalisations.
                        </p>
                    </div>

                </div>

            </div>
        </section >
    );
}
export default Services;