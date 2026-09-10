import { useState } from "react";

function Contact() {
    // Formulaire de contact
    const [contact, setContact] = useState({
        nom: "",
        email: "",
        message: "",
    });

    // Formulaire de demande de stage
    const [stage, setStage] = useState({
        nom: "",
        telephone: "",
        email: "",
        filiere: "",
        niveau: "",
        duree: "",
        message: "",
    });

    // Envoi du formulaire de contact vers WhatsApp
    const handleContactSubmit = (e) => {
        e.preventDefault();

        const numeroWhatsApp = "237699793427";

        const message = `Bonjour METALEX,

    Je souhaite vous contacter depuis votre site internet.

Nom complet: ${ contact.nom }
Email: ${ contact.email }

Message:
${ contact.message } `;

        const whatsappUrl = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(message)}`;

window.open(whatsappUrl, "_blank");
    };



return (
    <section
        id="contact"
        className="py-24 bg-gray-950 text-white"
    >
        <div className="max-w-7xl mx-auto px-6">

            {/* Titre */}
            <div className="text-center">

                <p className="text-[rgb(35,109,179)] uppercase tracking-widest text-sm font-semibold">
                    Parlons de votre projet
                </p>

                <h2 className="text-4xl md:text-5xl font-bold mt-3">
                    Contactez-nous
                </h2>

                <div className="w-20 h-1 bg-[rgb(35,109,179)] mx-auto mt-5"></div>

                <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
                    Vous avez un projet de chaudronnerie ou de soudure ?
                    Notre équipe est à votre écoute.
                </p>

            </div>


            {/* Contenu */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-14">


                {/* Informations */}
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">

                    <h3 className="text-2xl font-bold mb-8">
                        Parlons-nous
                    </h3>

                    <div className="space-y-6">

                        {/* Adresse */}
                        <div className="flex items-start gap-4">

                            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-[rgb(35,109,179)]/10">
                                <span className="text-[rgb(35,109,179)] text-xl">
                                    📍
                                </span>
                            </div>

                            <div>
                                <h4 className="font-semibold">
                                    Adresse
                                </h4>

                                <p className="text-gray-400 mt-1">
                                    BP Cite Entrée Camrail, Douala, Cameroun
                                </p>
                            </div>

                        </div>


                        {/* Téléphone */}
                        <div className="flex items-start gap-4">

                            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-[rgb(35,109,179)]/10">
                                <span className="text-[rgb(35,109,179)] text-xl">
                                    📞
                                </span>
                            </div>

                            <div>
                                <h4 className="font-semibold">
                                    Téléphone
                                </h4>

                                <p className="text-gray-400 mt-1">
                                    +237 699 793 427
                                </p>
                            </div>

                        </div>


                        {/* Email */}
                        <div className="flex items-start gap-4">

                            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-[rgb(35,109,179)]/10">
                                <span className="text-[rgb(35,109,179)] text-xl">
                                    ✉
                                </span>
                            </div>

                            <div>
                                <h4 className="font-semibold">
                                    Email
                                </h4>

                                <p className="text-gray-400 mt-1">
                                    metalex79@yahoo.com
                                </p>
                            </div>

                        </div>

                    </div>

                </div>


                {/* Formulaire de contact */}
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">

                    <h3 className="text-2xl font-bold mb-8">
                        Envoyez-nous un message
                    </h3>

                    <form
                        onSubmit={handleContactSubmit}
                        className="space-y-5"
                    >

                        {/* Nom */}
                        <div>
                            <label className="block text-sm text-gray-300 mb-2">
                                Nom complet
                            </label>

                            <input
                                type="text"
                                placeholder="Votre nom"
                                required
                                value={contact.nom}
                                onChange={(e) =>
                                    setContact({
                                        ...contact,
                                        nom: e.target.value
                                    })
                                }
                                className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white outline-none focus:border-[rgb(35,109,179)] transition"
                            />
                        </div>


                        {/* Email */}
                        <div>
                            <label className="block text-sm text-gray-300 mb-2">
                                Adresse email
                            </label>

                            <input
                                type="email"
                                placeholder="votre@email.com"
                                required
                                value={contact.email}
                                onChange={(e) =>
                                    setContact({
                                        ...contact,
                                        email: e.target.value
                                    })
                                }
                                className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white outline-none focus:border-[rgb(35,109,179)] transition"
                            />
                        </div>


                        {/* Message */}
                        <div>
                            <label className="block text-sm text-gray-300 mb-2">
                                Message
                            </label>

                            <textarea
                                rows="5"
                                placeholder="Décrivez votre projet..."
                                required
                                value={contact.message}
                                onChange={(e) =>
                                    setContact({
                                        ...contact,
                                        message: e.target.value
                                    })
                                }
                                className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white outline-none focus:border-[rgb(35,109,179)] transition resize-none"
                            ></textarea>
                        </div>


                        {/* Bouton */}
                        <button
                            type="submit"
                            className="w-full bg-[rgb(35,109,179)] hover:bg-[rgb(28,88,145)] text-white font-semibold py-3 rounded-lg transition duration-300 hover:-translate-y-1"
                        >
                            Envoyer le message
                        </button>

                    </form>

                </div>

            </div>

        </div>


        {/* SECTION STAGE */}
        <div className="mt-20">

            <div className="text-center mb-10">

                <p className="text-[rgb(35,109,179)] uppercase tracking-widest text-sm font-semibold">
                    Opportunité
                </p>

                <h3 className="text-3xl md:text-4xl font-bold mt-3">
                    Vous recherchez un stage ?
                </h3>

                <div className="w-20 h-1 bg-[rgb(35,109,179)] mx-auto mt-5"></div>

                <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
                    Vous souhaitez développer vos compétences dans le domaine
                    de la chaudronnerie ou de la soudure ? Envoyez-nous votre
                    demande de stage.
                </p>

            </div>

        </div>

    </section>
);
}

export default Contact;

