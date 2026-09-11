import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function Stage() {
    const [stage, setStage] = useState({
        nom: "",
        telephone: "",
        email: "",
        filiere: "",
        niveau: "",
        duree: "",
        message: "",
    });

    const handleStageSubmit = (e) => {
        e.preventDefault();

        const numeroWhatsApp = "237699793427";

        const message = `Bonjour METALEX,

Je souhaite déposer une demande de stage.

Nom complet : ${stage.nom}
Téléphone : ${stage.telephone}
Email : ${stage.email}
Filière / Formation : ${stage.filiere}
Niveau d'étude : ${stage.niveau}
Durée souhaitée : ${stage.duree}

Ma demande :
${stage.message}

Je vais joindre mon CV dans cette conversation.`;

        const whatsappUrl =
            `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <section
            className="
                min-h-screen
                bg-slate-300
                text-gray-900
                dark:bg-gray-950
                dark:text-white
                py-28
                px-6
                transition-colors
                duration-300
            "
        >

            <div className="max-w-5xl mx-auto">

                {/* Retour */}
                <Link
                    to="/"
                    className="
                        inline-flex
                        items-center
                        gap-2
                        text-gray-700
                        dark:text-gray-400
                        hover:text-[rgb(35,109,179)]
                        transition
                        mb-10
                    "
                >
                    <FaArrowLeft />
                    Retour à l'accueil
                </Link>


                {/* Titre */}
                <div className="text-center mb-12">

                    <p className="
                        text-[rgb(35,109,179)]
                        uppercase
                        tracking-widest
                        text-sm
                        font-semibold
                    ">
                        Opportunité
                    </p>

                    <h1 className="
                        text-4xl
                        md:text-5xl
                        font-bold
                        mt-3
                    ">
                        Demande de stage
                    </h1>

                    <div className="
                        w-20
                        h-1
                        bg-[rgb(35,109,179)]
                        mx-auto
                        mt-5
                    "></div>

                    <p className="
                        mt-6
                        text-gray-700
                        dark:text-gray-400
                        max-w-2xl
                        mx-auto
                        leading-relaxed
                    ">
                        Vous souhaitez développer vos compétences dans le domaine
                        de la chaudronnerie ou de la soudure ? Présentez-nous votre
                        demande de stage.
                    </p>

                </div>


                {/* Formulaire */}
                <div className="
                    bg-slate-200
                    dark:bg-gray-900
                    border
                    border-slate-400
                    dark:border-gray-800
                    rounded-2xl
                    p-8
                    md:p-10
                    shadow-lg
                    dark:shadow-none
                    transition-colors
                    duration-300
                ">

                    <form
                        onSubmit={handleStageSubmit}
                        className="
                            grid
                            grid-cols-1
                            md:grid-cols-2
                            gap-6
                        "
                    >

                        {/* Nom */}
                        <div>

                            <label className="
                                block
                                text-sm
                                font-medium
                                mb-2
                            ">
                                Nom complet
                            </label>

                            <input
                                type="text"
                                placeholder="Votre nom complet"
                                required
                                value={stage.nom}
                                onChange={(e) =>
                                    setStage({
                                        ...stage,
                                        nom: e.target.value
                                    })
                                }
                                className="
                                    w-full
                                    bg-slate-100
                                    dark:bg-gray-950
                                    text-gray-900
                                    dark:text-white
                                    placeholder-gray-500
                                    border
                                    border-slate-400
                                    dark:border-gray-800
                                    rounded-lg
                                    px-4
                                    py-3
                                    outline-none
                                    focus:border-[rgb(35,109,179)]
                                    transition
                                "
                            />

                        </div>


                        {/* Téléphone */}
                        <div>

                            <label className="
                                block
                                text-sm
                                font-medium
                                mb-2
                            ">
                                Numéro de téléphone
                            </label>

                            <input
                                type="tel"
                                placeholder="+237 ..."
                                required
                                value={stage.telephone}
                                onChange={(e) =>
                                    setStage({
                                        ...stage,
                                        telephone: e.target.value
                                    })
                                }
                                className="
                                    w-full
                                    bg-slate-100
                                    dark:bg-gray-950
                                    text-gray-900
                                    dark:text-white
                                    placeholder-gray-500
                                    border
                                    border-slate-400
                                    dark:border-gray-800
                                    rounded-lg
                                    px-4
                                    py-3
                                    outline-none
                                    focus:border-[rgb(35,109,179)]
                                    transition
                                "
                            />

                        </div>


                        {/* Email */}
                        <div>

                            <label className="
                                block
                                text-sm
                                font-medium
                                mb-2
                            ">
                                Adresse email
                            </label>

                            <input
                                type="email"
                                placeholder="votre@email.com"
                                required
                                value={stage.email}
                                onChange={(e) =>
                                    setStage({
                                        ...stage,
                                        email: e.target.value
                                    })
                                }
                                className="
                                    w-full
                                    bg-slate-100
                                    dark:bg-gray-950
                                    text-gray-900
                                    dark:text-white
                                    placeholder-gray-500
                                    border
                                    border-slate-400
                                    dark:border-gray-800
                                    rounded-lg
                                    px-4
                                    py-3
                                    outline-none
                                    focus:border-[rgb(35,109,179)]
                                    transition
                                "
                            />

                        </div>


                        {/* Filière */}
                        <div>

                            <label className="
                                block
                                text-sm
                                font-medium
                                mb-2
                            ">
                                Filière / Formation
                            </label>

                            <input
                                type="text"
                                placeholder="Ex : Génie mécanique"
                                required
                                value={stage.filiere}
                                onChange={(e) =>
                                    setStage({
                                        ...stage,
                                        filiere: e.target.value
                                    })
                                }
                                className="
                                    w-full
                                    bg-slate-100
                                    dark:bg-gray-950
                                    text-gray-900
                                    dark:text-white
                                    placeholder-gray-500
                                    border
                                    border-slate-400
                                    dark:border-gray-800
                                    rounded-lg
                                    px-4
                                    py-3
                                    outline-none
                                    focus:border-[rgb(35,109,179)]
                                    transition
                                "
                            />

                        </div>


                        {/* Niveau */}
                        <div>

                            <label className="
                                block
                                text-sm
                                font-medium
                                mb-2
                            ">
                                Niveau d'étude
                            </label>

                            <select
                                required
                                value={stage.niveau}
                                onChange={(e) =>
                                    setStage({
                                        ...stage,
                                        niveau: e.target.value
                                    })
                                }
                                className="
                                    w-full
                                    bg-slate-100
                                    dark:bg-gray-950
                                    text-gray-900
                                    dark:text-white
                                    border
                                    border-slate-400
                                    dark:border-gray-800
                                    rounded-lg
                                    px-4
                                    py-3
                                    outline-none
                                    focus:border-[rgb(35,109,179)]
                                    transition
                                "
                            >

                                <option value="">
                                    Sélectionnez votre niveau
                                </option>

                                <option>CEP</option>
                                <option>BEPC</option>
                                <option>Baccalauréat</option>
                                <option>Licence</option>
                                <option>Master</option>
                                <option>Autre</option>

                            </select>

                        </div>


                        {/* Durée */}
                        <div>

                            <label className="
                                block
                                text-sm
                                font-medium
                                mb-2
                            ">
                                Durée souhaitée
                            </label>

                            <select
                                required
                                value={stage.duree}
                                onChange={(e) =>
                                    setStage({
                                        ...stage,
                                        duree: e.target.value
                                    })
                                }
                                className="
                                    w-full
                                    bg-slate-100
                                    dark:bg-gray-950
                                    text-gray-900
                                    dark:text-white
                                    border
                                    border-slate-400
                                    dark:border-gray-800
                                    rounded-lg
                                    px-4
                                    py-3
                                    outline-none
                                    focus:border-[rgb(35,109,179)]
                                    transition
                                "
                            >

                                <option value="">
                                    Choisissez une durée
                                </option>

                                <option>1 mois</option>
                                <option>2 mois</option>
                                <option>3 mois</option>
                                <option>6 mois</option>
                                <option>Autre</option>

                            </select>

                        </div>


                        {/* Message */}
                        <div className="md:col-span-2">

                            <label className="
                                block
                                text-sm
                                font-medium
                                mb-2
                            ">
                                Présentez brièvement votre demande
                            </label>

                            <textarea
                                rows="5"
                                placeholder="Parlez-nous de votre projet de stage..."
                                required
                                value={stage.message}
                                onChange={(e) =>
                                    setStage({
                                        ...stage,
                                        message: e.target.value
                                    })
                                }
                                className="
                                    w-full
                                    bg-slate-100
                                    dark:bg-gray-950
                                    text-gray-900
                                    dark:text-white
                                    placeholder-gray-500
                                    border
                                    border-slate-400
                                    dark:border-gray-800
                                    rounded-lg
                                    px-4
                                    py-3
                                    outline-none
                                    focus:border-[rgb(35,109,179)]
                                    transition
                                    resize-none
                                "
                            ></textarea>

                        </div>


                        {/* CV */}
                        <div className="md:col-span-2">

                            <label className="
                                block
                                text-sm
                                font-medium
                                mb-2
                            ">
                                CV
                            </label>

                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                className="
                                    w-full
                                    bg-slate-100
                                    dark:bg-gray-950
                                    text-gray-600
                                    dark:text-gray-400
                                    border
                                    border-slate-400
                                    dark:border-gray-800
                                    rounded-lg
                                    px-4
                                    py-3
                                    outline-none
                                    focus:border-[rgb(35,109,179)]
                                    transition
                                "
                            />

                            <p className="
                                text-xs
                                text-gray-500
                                mt-2
                            ">
                                Formats acceptés : PDF, DOC, DOCX
                            </p>

                        </div>


                        {/* Bouton */}
                        <div className="
                            md:col-span-2
                            text-center
                            mt-4
                        ">

                            <button
                                type="submit"
                                className="
                                    bg-[rgb(35,109,179)]
                                    hover:bg-[rgb(28,88,145)]
                                    text-white
                                    font-semibold
                                    px-8
                                    py-3
                                    rounded-lg
                                    transition
                                    duration-300
                                    hover:-translate-y-1
                                "
                            >
                                Envoyer ma demande
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </section>
    );
}

export default Stage;