import { useState } from "react";
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact() {
    const [contact, setContact] = useState({
        nom: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const numeroWhatsApp = "237699793427";

        const message = `Bonjour METALEX,

Je souhaite vous contacter.

Nom complet : ${contact.nom}
Email : ${contact.email}

Message :
${contact.message}`;

        const whatsappUrl =
            `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <section
            id="contact"
            className="py-20 bg-slate-300 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* En-tête */}
                <div className="text-center">

                    <p className="text-blue-600 dark:text-blue-500 uppercase tracking-widest text-sm font-semibold">
                        Parlons de votre projet
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mt-3">
                        Contactez-nous
                    </h2>

                    <div className="w-20 h-1 bg-blue-500 mx-auto mt-5"></div>

                    <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Une question, un projet ou une demande particulière ?
                        Notre équipe est à votre écoute.
                    </p>

                </div>

                {/* Informations + formulaire */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14">

                    {/* Informations */}
                    <div className="bg-slate-200 dark:bg-gray-950 p-8 rounded-2xl border border-slate-400 dark:border-gray-800">

                        <h3 className="text-2xl font-bold">
                            Nos coordonnées
                        </h3>

                        <p className="mt-4 text-gray-700 dark:text-gray-400 leading-relaxed">
                            N'hésitez pas à nous contacter pour discuter de vos besoins
                            en chaudronnerie et en soudure.
                        </p>

                        {/* Téléphone */}
                        <div className="flex items-start gap-4 mt-8">

                            <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/30">
                                <FaPhone className="text-blue-500" />
                            </div>

                            <div>
                                <h4 className="font-bold">
                                    Téléphone
                                </h4>

                                <p className="text-gray-700 dark:text-gray-400 mt-1">
                                    +237 699 793 427
                                </p>
                            </div>

                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4 mt-6">

                            <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/30">
                                <FaEnvelope className="text-blue-500" />
                            </div>

                            <div>
                                <h4 className="font-bold">
                                    Email
                                </h4>

                                <p className="text-gray-700 dark:text-gray-400 mt-1 break-all">
                                    metalex79@yahoo.com
                                </p>
                            </div>

                        </div>

                        {/* Adresse */}
                        <div className="flex items-start gap-4 mt-6">

                            <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/30">
                                <FaMapMarkerAlt className="text-blue-500" />
                            </div>

                            <div>
                                <h4 className="font-bold">
                                    Adresse
                                </h4>

                                <p className="text-gray-700 dark:text-gray-400 mt-1">
                                    BP Cite Entrée Camrail, Douala, Cameroun
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Formulaire */}
                    <div className="bg-slate-200 dark:bg-gray-950 p-8 rounded-2xl border border-slate-400 dark:border-gray-800">

                        <h3 className="text-2xl font-bold">
                            Envoyez-nous un message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6 mt-6">

                            {/* Nom */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Nom complet
                                </label>

                                <input
                                    type="text"
                                    name="nom"
                                    value={contact.nom}
                                    onChange={handleChange}
                                    placeholder="Votre nom"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-gray-900 border border-slate-400 dark:border-gray-700 focus:outline-none focus:border-blue-500 transition"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Adresse email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={contact.email}
                                    onChange={handleChange}
                                    placeholder="Votre email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-gray-900 border border-slate-400 dark:border-gray-700 focus:outline-none focus:border-blue-500 transition"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Votre message
                                </label>

                                <textarea
                                    name="message"
                                    value={contact.message}
                                    onChange={handleChange}
                                    placeholder="Décrivez votre demande..."
                                    rows="5"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-gray-900 border border-slate-400 dark:border-gray-700 focus:outline-none focus:border-blue-500 transition resize-none"
                                ></textarea>
                            </div>

                            {/* Bouton */}
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 hover:-translate-y-1"
                            >
                                Envoyer sur WhatsApp
                                <FaArrowRight />
                            </button>

                        </form>

                    </div>

                </div>

                {/* CTA Projet / Stage */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

                    {/* Projet */}
                    <div className="bg-slate-200 dark:bg-gray-950 p-8 rounded-2xl border border-slate-400 dark:border-gray-800">

                        <h3 className="text-2xl font-bold">
                            Vous avez un projet en tête ?
                        </h3>

                        <p className="mt-3 text-gray-700 dark:text-gray-400">
                            Décrivez-nous votre projet et obtenez une réponse adaptée
                            à vos besoins.
                        </p>

                        <Link
                            to="/projet"
                            className="inline-flex items-center gap-3 mt-6 bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-300 hover:-translate-y-1 "
                        >
                            Découvrir
                            <FaArrowRight />
                        </Link>

                    </div>

                    {/* Stage */}
                    <div className="bg-slate-200 dark:bg-gray-950 p-8 rounded-2xl border border-slate-400 dark:border-gray-800">

                        <h3 className="text-2xl font-bold">
                            Vous recherchez un stage ?
                        </h3>

                        <p className="mt-3 text-gray-700 dark:text-gray-400">
                            Vous pouvez nous transmettre votre demande de stage
                            directement depuis notre site.
                        </p>

                        <Link
                            to="/stage"
                             className="inline-flex items-center gap-3 mt-6 bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-300 hover:-translate-y-1"
                        >
                            Déposer une demande
                            <FaArrowRight />
                        </Link>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;