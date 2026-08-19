import { FaTools, FaFire } from "react-icons/fa";
function Services() {
    return (
        <section id="services" className="py-20 bg-gray-950 text-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Titre */}
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mt-3d">
                        Nos Services
                    </h2>

                    <div className="w-20 h-1 bg-yellow-500 mx-auto mt-5"></div>


                    <p className="mt-4 text-gray-300">
                        Notre savoir-faire en chaudronnerie et en soudure
                        au service de vos projets.
                    </p>
                </div>

                {/* Services */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

                    {/* Chaudronnerie */}
                    <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-yellow-500 transition duration-300 hover:-translate-y-2">
                        <div className="flex items-center grap-4">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-500/10">
                                <FaTools className="text-yellow-500 text-3xl" />
                            </div>
                            <h3 className="text-2xl font-bold mt-6">
                                Chaudronnerie
                            </h3>
                        </div>
                        <p className="mt-4 text-gray-300 leading-relaxed">
                            Nous réalisons des travaux de chaudronnerie
                            adaptés aux besoins de nos clients, avec
                            précision et savoir-faire.
                        </p>
                    </div>

                    {/* Soudure */}
                    <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-yellow-500 transition duration-300 hover:-translate-y-2">
                        <div className="flex items-center grap-4">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-500/10">
                                <FaFire className="text-yellow-500 text-3xl" />
                            </div>
                            <h3 className="text-2xl font-bold mt-6">
                                Soudure
                            </h3>
                        </div>
                        <p className="mt-4 text-gray-300 leading-relaxed">
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