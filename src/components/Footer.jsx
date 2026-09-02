import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-black text-white border-t border-gray-800">

            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    <div>

                        <h2 className="text-2xl font-bold">
                            METALEX SARL
                        </h2>

                        <p className="text-gray-400 mt-5 leading-relaxed">
                            Votre partenaire en chaudronnerie et en soudure.
                            Nous mettons notre savoir-faire au service de vos projets.
                        </p>

                    </div>

                    <div>

                        <h3 className="text-lg font-semibold">
                            Navigation
                        </h3>

                        <ul className="mt-5 space-y-3">

                            <li>
                                <a
                                    href="#accueil"
                                    className="text-gray-400 hover:text-[rgb(35,109,179)] transition"
                                >
                                    Accueil
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#apropos"
                                    className="text-gray-400 hover:text-[rgb(35,109,179)] transition"
                                >
                                    À propos
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#services"
                                    className="text-gray-400 hover:text-[rgb(35,109,179)] transition"
                                >
                                    Services
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#realisations"
                                    className="text-gray-400 hover:text-[rgb(35,109,179)] transition"
                                >
                                    Réalisations
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#contact"
                                    className="text-gray-400 hover:text-[rgb(35,109,179)] transition"
                                >
                                    Contact
                                </a>
                            </li>

                        </ul>

                    </div>

                    <div>

                        <h3 className="text-lg font-semibold">
                            Suivez-nous
                        </h3>

                        <p className="text-gray-400 mt-5">
                            Retrouvez METALEX sur nos réseaux sociaux.
                        </p>

                        <div className="flex gap-4 mt-6">

                            <a
                                href="https://www.facebook.com/share/1H3wpskyjp/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-900 border border-gray-800 hover:border-[rgb(35,109,179)] hover:text-[rgb(35,109,179)] transition duration-300"
                            >
                                <FaFacebookF />
                            </a>
                            {/* noopener empêche la nouvelle page d'avoir accès à la page de ton site et noreferrer empêche également le navigateur de transmettre certaines informations sur la page d'origine au site ouvert.*/}


                            <a
                                href="https://www.instagram.com/metalex.sarl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-900 border border-gray-800 hover:border-[rgb(35,109,179)] hover:text-[rgb(35,109,179)] transition duration-300"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="https://www.tiktok.com/@metalex.sarl7" target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-900 border border-gray-800 hover:border-[rgb(35,109,179)] hover:text-[rgb(35,109,179)] transition duration-300"
                            >
                                <FaTiktok />
                            </a>

                        </div>

                    </div>

                </div>

            </div>


            {/* Copyright */}
            <div className="border-t border-gray-800">

                <div className="max-w-7xl mx-auto px-6 py-6 text-center">

                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} METALEX SARL. Tous droits réservés.
                        {/* permet de prendre automatiquement l'année actuelle */}
                    </p>
                </div>
            </div>

        </footer>
    );
}

export default Footer;