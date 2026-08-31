import { FaTools, FaFire } from "react-icons/fa";
function Services() {
    return (
        <section id="services" className="py-20 bg-gray-950 text-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Titre */}
                <div className="text-center">
                    <p className="text-blue-500 uppercase tracking-widest text-sm font-semibold">
                        Notre expertise
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mt-3">
                        Nos Services
                    </h2>

                    <div className="w-20 h-1 bg-blue-500 mx-auto mt-5"></div>


                    <p className="mt-6 text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Notre savoir-faire en chaudronnerie et en soudure
                        au service de vos projets.
                    </p>
                </div>

                {/* Services */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">

                    {/* Chaudronnerie */}
                    <div className="group bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500/10  border border-blue-500/20 group-hover:bg-blue-500/20 transition duration-300">
                                <FaTools className="text-blue-500 text-3xl" />
                            </div>
                            <h3 className="text-2xl font-bold mt-6">
                                Chaudronnerie
                            </h3>
                        </div>
                        <p className="mt-6 text-gray-300 leading-relaxed">
                            Nous réalisons des travaux de chaudronnerie
                            adaptés aux besoins de nos clients, avec
                            précision et savoir-faire.
                        </p>
                        <div className="mt-6 w-10 h-1 bg-blue-500 transition-all duration-300 group-hover:w-20"></div>
                    </div>

                    {/* Soudure */}
                    <div className="group bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2">
                        <div className="flex items-center grap-4">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500/10  border border-blue-500/20 group-hover:bg-blue-500/20 transition duration-300">
                                <FaFire className="text-blue-500 text-3xl" />
                            </div>
                            <h3 className="text-2xl font-bold mt-6">
                                Soudure
                            </h3>
                        </div>
                        <p className="mt-6 text-gray-300 leading-relaxed">
                            Nous réalisons différents travaux de soudure
                            avec une attention particulière portée à la
                            solidité et à la qualité des réalisations.
                        </p>
                        <div className="mt-6 w-10 h-1 bg-blue-500 transition-all duration-300 group-hover:w-20"></div>
                    </div>

                </div>

            </div>
        </section >
    );
}
export default Services;