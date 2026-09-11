import {
    FaFacebookF,
    FaInstagram,
    FaTiktok,
    FaPhone,
    FaEnvelope,
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-slate-900 text-white">

            {/* Partie principale */}
            <div className="max-w-7xl mx-auto px-6 py-14">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* Présentation */}
                    <div>

                        <h2 className="text-2xl font-bold text-[rgb(35,109,179)]">
                            METALEX SARL
                        </h2>

                        <p className="mt-4 text-gray-400 leading-relaxed">
                            La Touche Des Experts.
                            <br />
                            Votre partenaire en chaudronnerie et en soudure.
                        </p>

                    </div>

                    {/* Contact */}
                    <div>

                        <h3 className="text-xl font-bold">
                            Contact
                        </h3>

                        <div className="mt-5 space-y-4">

                            <p className="flex items-center gap-3 text-gray-400">
                                <FaPhone className="text-blue-500 shrink-0" />
                                +237 699 793 427
                            </p>

                            <p className="flex items-center gap-3 text-gray-400">
                                <FaEnvelope className="text-blue-500 shrink-0" />
                                <span className="break-all">
                                    metalex79@yahoo.com
                                </span>
                            </p>

                        </div>

                    </div>

                    {/* Réseaux sociaux */}
                    <div>

                        <h3 className="text-xl font-bold">
                            Suivez-nous
                        </h3>

                        <p className="mt-4 text-gray-400">
                            Retrouvez METALEX SARL sur nos réseaux sociaux.
                        </p>

                        <div className="flex gap-4 mt-6">

                            <a
                                href="https://www.facebook.com/share/1H3wpskyjp/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition duration-300"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="https://www.instagram.com/metalex.sarl"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition duration-300"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="https://www.tiktok.com/@metalex.sarl7"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="TikTok"
                                className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition duration-300"
                            >
                                <FaTiktok />
                            </a>

                        </div>

                    </div>

                </div>

            </div>

            {/* Ligne du bas */}
            <div className="border-t border-gray-800">

                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">

                    <p>
                        © {new Date().getFullYear()} METALEX SARL. Tous droits réservés.
                    </p>

                    <p>
                        Chaudronnerie • Soudure
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;