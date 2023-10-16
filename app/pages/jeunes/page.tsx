import Image from "next/image";

export default function Jeunes() {
    return (
        <div className="container mx-auto px-4 py-6 space-y-8">
            <div className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg p-6 mb-6 transition-transform transform hover:scale-105">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                    <Image
                        src={"/cog_cadet.jpeg"}
                        alt="Ovalie Seine"
                        width={256}
                        height={200}
                        className="rounded-md mb-4 md:mb-0"
                    />
                    <div>
                        <h2 className="text-xl text-gray-700 md:text-2xl font-semibold mb-4 leading-tight">
                            Cadets & Juniors de l'
                            <span>Ovalie Seine</span>
                        </h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Ovalie Seine est une entente des clubs de
                            Gargenville, Epône et Aubergenville. L'objectif
                            principal est de réunir et faire jouer à leur
                            meilleur niveau les jeunes des 3 clubs.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg p-6 mb-6 transition-transform transform hover:scale-105">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                    <Image
                        src={"/cog_baby.jpeg"}
                        alt="Ovalie Seine"
                        width={256}
                        height={200}
                        className="rounded-md mb-4 md:mb-0"
                    />
                    <div>
                        <h2 className="text-xl text-gray-700 md:text-2xl font-semibold mb-4 leading-tight">
                            École de <span>Rugby labelisée</span>
                        </h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Notre école de rugby accueille des jeunes
                            passionnés, garçons et filles, dès l'âge de 3 ans
                            avec notre programme "baby rugby". Les catégories
                            s'étendent de -6 ans à -14 ans, offrant une
                            formation complète et adaptée à chaque tranche
                            d'âge.
                        </p>
                        <br />
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Nous sommes fiers d'annoncer que la labellisation de
                            notre école de rugby a été reconduite par la
                            Fédération Française. Cette reconnaissance est le
                            fruit du travail acharné et de la dévotion de nos
                            éducateurs, entraîneurs et de notre direction
                            sportive.
                        </p>
                        <br />
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Pour la troisième fois consécutive, nous tenons à
                            féliciter chaleureusement les dirigeants, éducateurs
                            et accompagnateurs de nos équipes de l’École de
                            Rugby. Leur engagement et leur passion sont les
                            piliers de notre succès et de la qualité de
                            formation que nous offrons à nos jeunes joueurs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
