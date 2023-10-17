import Organigramme from "../../components/Organigramme";
import Image from "next/image";

export default function Partenaires() {
    return (
        <div className="container mx-auto px-4 py-6 space-y-8">
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 lg:space-x-12 lg:ml-0">
                <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
                    <div className="border-b border-gray-300 pb-4">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Boutique en ligne du rugby
                        </h2>
                        <p className="mt-2 text-gray-700">
                            Pour vos cadeaux et habillements sport, pensez à
                            notre boutique en ligne:{" "}
                            <a
                                href="https://clubshop.macron.com/mantes/38322-cog-rugby/merchandising"
                                style={{
                                    color: "rgb(31, 108, 63)",
                                    textDecoration: "underline",
                                }}
                            >
                                juste ici
                            </a>
                        </p>
                        <p className="mt-2 text-gray-600">
                            Après avoir créé votre compte, choisissez les
                            articles et réglez en ligne avec votre CB, la
                            livraison se fera environ 3 semaines plus tard au
                            club de rugby de Gargenville. Possibilité de
                            personnaliser vos articles avec un numéro ou vos
                            initiales.
                        </p>
                    </div>

                    <div className=" text-gray-700">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Un grand merci à tous nos sponsors
                        </h2>
                        <p className="mt-2">
                            N'hésitez pas à aller les voir de notre part !
                        </p>
                        <div className="mt-4 grid grid-cols-2 gap-4 ">
                            <div className="flex flex-col items-center">
                                <Image
                                    src="/logo/u_logo.png"
                                    alt="SUPER U Logo"
                                    width={64}
                                    height={64}
                                />
                                <span>SUPER U</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Image
                                    src="/logo/aurus_logo.jpeg"
                                    alt="Aurus Community Logo"
                                    width={64}
                                    height={64}
                                />
                                <span>Aurus Community</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Image
                                    src="/logo/diferran_logo.jpeg"
                                    alt="Restaurant Di Fer Ran Logo"
                                    width={64}
                                    height={64}
                                />
                                <span>Restaurant Di Fer Ran</span>
                            </div>
                            <div className="flex flex-col items-center">
                                {/* <Image
                                    src="/path/to/perroux-logo.png"
                                    alt="Perroux Couverture Logo"
                                    width={64}
                                    height={64}
                                /> */}
                                <span>Perroux Couverture</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-gray-700">
                    <h2 className="text-2xl font-semibold text-gray-800 rounded font-sans">
                        Les services civiques
                    </h2>
                    <br />
                    <div className=" space-y-4">
                        <p className="pl-4">
                            Le club de rugby propose pour la rentrée de
                            septembre 8 postes de volontaires Les candidat(e)s
                            sont agé(e)s de 16 à 25 ans.
                            <br />
                            <br />
                            La mission est sur une durée de 8 mois de 24H00 par
                            semaine. Conditions d'éligibilté sur le site du
                            Gouvernement Indemnité mensuelle versée : 573 € /
                            mois
                            <br />
                            <br />
                            Dépôt des candidatures par mail avec lettre
                            demotivation + CV :{" "}
                            <a className="text-blue-500">
                                {" "}
                                rugbygargenville@gmail.com
                            </a>
                        </p>
                        <h3 className="text-l font-semibold text-gray-800 border-b border-gray-300 pb-2">
                            Le contexte du projet :
                        </h3>
                        <p className="pl-4">
                            L’objectif est de rendre accessible la pratique du
                            rugby à tous et de fédérer éducateurs, parents et
                            enfants autour de projets collectifs.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-2">
                            Les objectifs du projet :
                        </h3>
                        <p className="pl-4">
                            Fidéliser et augmenter le nombre des licenciés des
                            publics concernés (enfants, adolescents et
                            éducateurs).
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-2">
                            Qualitatifs :
                        </h3>
                        <p className="pl-4">
                            Améliorer la qualité d’accueil et d’encadrement
                            extra-sportif.
                        </p>
                    </div>
                </div>
            </div>

            <Organigramme />
        </div>
    );
}
