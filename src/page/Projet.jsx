import { useState } from "react";
import { FaArrowLeft, FaPaperclip } from "react-icons/fa";
import { Link } from "react-router-dom";

function Projet() {

    const [projet, setProjet] = useState({
        nom: "",
        telephone: "",
        email: "",
        type: "",
        description: "",
        date: "",
        fichier: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setProjet({
            ...projet,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const numeroWhatsApp = "237699793427";

        const message = `Bonjour METALEX,

Je souhaite vous contacter concernant un projet.

Nom complet : ${projet.nom}
Téléphone : ${projet.telephone}
Email : ${projet.email}

Type de projet : ${projet.type}

Description du projet :
${projet.description}

Date souhaitée : ${projet.date || "Non précisée"}

Je vais joindre les photos ou documents nécessaires dans cette conversation.`;

        const whatsappUrl =
            `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank");
    };


    return (
        <section className="min-h-screen bg-gray-950 text-white py-24 px-6">

            <div className="max-w-4xl mx-auto">

                {/* Retour */}
                <Link
                    to="/"
                    
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-[rgb(35,109,179)] transition mb-10"
                >
                    <FaArrowLeft />
                    Retour à l'accueil
                </Link>


                {/* En-tête */}
                <div className="text-center mb-12">

                    <p className="text-[rgb(35,109,179)] uppercase tracking-widest text-sm font-semibold">
                        Votre projet
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold mt-3">
                        Parlons de votre projet
                    </h1>

                    <div className="w-20 h-1 bg-[rgb(35,109,179)] mx-auto mt-5"></div>

                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Vous avez un projet en chaudronnerie ou en soudure ?
                        Décrivez-nous votre besoin et notre équipe pourra étudier
                        votre demande.
                    </p>

                </div>


                {/* Formulaire */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-10"
                >

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Nom */}
                        <div>

                            <label className="block text-sm font-medium mb-2">
                                Nom complet
                            </label>

                            <input
                                type="text"
                                name="nom"
                                value={projet.nom}
                                onChange={handleChange}
                                placeholder="Votre nom complet"
                                required
                                className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-[rgb(35,109,179)] transition"
                            />

                        </div>


                        {/* Téléphone */}
                        <div>

                            <label className="block text-sm font-medium mb-2">
                                Numéro de téléphone
                            </label>

                            <input
                                type="tel"
                                name="telephone"
                                value={projet.telephone}
                                onChange={handleChange}
                                placeholder="Votre numéro"
                                required
                                className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-[rgb(35,109,179)] transition"
                            />

                        </div>


                        {/* Email */}
                        <div>

                            <label className="block text-sm font-medium mb-2">
                                Adresse e-mail
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={projet.email}
                                onChange={handleChange}
                                placeholder="exemple@email.com"
                                required
                                className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-[rgb(35,109,179)] transition"
                            />

                        </div>


                        {/* Type de projet */}
                        <div>

                            <label className="block text-sm font-medium mb-2">
                                Type de projet
                            </label>

                            <select
                                name="type"
                                value={projet.type}
                                onChange={handleChange}
                                required
                                className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-[rgb(35,109,179)] transition"
                            >

                                <option value="" disabled>
                                    Sélectionnez une option
                                </option>

                                <option value="Chaudronnerie">
                                    Chaudronnerie
                                </option>

                                <option value="Soudure">
                                    Soudure
                                </option>

                                <option value="Autre">
                                    Autre
                                </option>

                            </select>

                        </div>

                    </div>


                    {/* Description */}
                    <div className="mt-6">

                        <label className="block text-sm font-medium mb-2">
                            Décrivez votre projet
                        </label>

                        <textarea
                            name="description"
                            value={projet.description}
                            onChange={handleChange}
                            rows="6"
                            placeholder="Expliquez-nous votre projet, vos besoins, les dimensions, les matériaux souhaités, etc."
                            required
                            className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-[rgb(35,109,179)] transition resize-none"
                        ></textarea>

                    </div>


                    {/* Date souhaitée */}
                    <div className="mt-6">

                        <label className="block text-sm font-medium mb-2">
                            Date souhaitée de réalisation
                        </label>

                        <input
                            type="date"
                            name="date"
                            value={projet.date}
                            onChange={handleChange}
                            className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-[rgb(35,109,179)] transition"
                        />

                    </div>


                    {/* Fichier */}
                    <div className="mt-6">

                        <label className="block text-sm font-medium mb-2">
                            Ajouter un fichier
                            <span className="text-gray-500">
                                {" "} (facultatif)
                            </span>
                        </label>

                        <label className="flex items-center gap-3 w-full bg-gray-950 border border-dashed border-gray-700 rounded-lg px-4 py-4 cursor-pointer hover:border-[rgb(35,109,179)] transition">

                            <FaPaperclip className="text-[rgb(35,109,179)]" />

                            <span className="text-gray-400">
                                {projet.fichier
                                    ? projet.fichier.name
                                    : "Joindre un fichier"}
                            </span>

                            <input
                                type="file"
                                name="fichier"
                                onChange={handleChange}
                                className="hidden"
                                accept="image/*,.pdf,.doc,.docx"
                            />

                        </label>

                    </div>


                    {/* Bouton */}
                    <button
                        type="submit"
                        className="w-full mt-8 bg-[rgb(35,109,179)] hover:bg-[rgb(29,88,145)] text-white font-semibold py-4 rounded-lg transition duration-300"
                    >
                        Envoyer ma demande
                    </button>

                </form>

            </div>

        </section>
    );
}

export default Projet;