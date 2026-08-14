
function Contact() {
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    return (
        <section id="contact" className="py-20 bg-gray-950 text-white ">
            <div className="max-w-7x1 mx-auto px-6">

                <div className="text-center">
                    <h2 className="text-4xl font-bold">
                        Contactez-nous
                    </h2>

                    <p className="mt-4 text-gray-300">
                        Vous avez un projet en chaudronnerie ou en soudure ?
                        Parlons-en.
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">


                    <div>
                        <h3 className="text-2xl font-bold">
                            Nos coordonnées
                        </h3>

                        <p className="mt-6 text-gray-300">
                            Nous sommes à votre disposition pour répondre à vos
                            questions et discuter de vos projets.
                        </p>

                        <div className="mt-8 space-y-6 text-gray-300">

                            <div className="flex items-center gap-4">
                                <FaPhone className="text-yellow-500 text-xl" />
                                <p>+237 XXX XXX XXX</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-yellow-500 text-xl" />
                                <p>contact@metalex.com</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-yellow-500 text-xl" />
                                <p>Douala, Cameroun</p>
                            </div>

                        </div>

                        {/* Formulaire */}
                        <div>

                            <form className="space-y-5">

                                <input
                                    type="text"
                                    placeholder="Votre nom"
                                    className="w-full p-4 rounded-lg bg-gray-900 text-white border border-gray-700"
                                />

                                <input
                                    type="email"
                                    placeholder="Votre email"
                                    className="w-full p-4 rounded-lg bg-gray-900 text-white border border-gray-700"
                                />

                                <textarea
                                    placeholder="Votre message"
                                    rows="5"
                                    className="w-full p-4 rounded-lg bg-gray-900 text-white border border-gray-700"
                                ></textarea>

                                <button
                                    type="submit"
                                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-lg"
                                >
                                    Envoyer
                                </button>

                            </form>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
export default Contact;