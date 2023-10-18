import Image from "next/image";

export default function Loisirs() {
    return (
        <div className="container mx-auto px-4 py-6 space-y-8">
            {/* Rugby à 5 */}
            <div className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg p-6 mb-6 transition-transform transform hover:scale-105">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                    <div>
                        <h2 className="text-2xl text-gray-900 font-semibold mb-4 leading-tight">
                            Rugby à 5
                        </h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Envie de jouer au rugby? Si tu aimes le rugby sans
                            contact, viens nous rejoindre. Ouvert aux débutants.
                            Nous accueillons des équipes mixtes ou non de tous
                            âges. À partir de 14 ans pour les garçons et 15 ans
                            pour les filles. C'est un jeu à toucher des deux
                            mains sans contact et sans plaquage. Vivez le
                            plaisir du rugby en famille. Une discipline physique
                            sans choc avec une dimension festive et conviviale.
                        </p>
                    </div>
                    <Image
                        src={"/cog_cinq.jpeg"}
                        alt="Rugby à 5 COG gargenville"
                        width={256}
                        height={200}
                        className="rounded-md mb-4 md:mb-0"
                    />
                </div>
            </div>

            {/* Equipe PAT XV + 35 ANS */}
            <div className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg p-6 mb-6 transition-transform transform hover:scale-105">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                    <Image
                        src={"/cog_patxv.jpeg"}
                        alt="Pat XV équipe de rugby folklo"
                        width={256}
                        height={200}
                        className="rounded-md mb-4 md:mb-0"
                    />
                    <div>
                        <h2 className="text-2xl text-gray-900 font-semibold mb-4 leading-tight">
                            Equipe PAT XV + 35 ANS
                        </h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Rejoignez notre équipe PAT XV pour les joueurs de
                            plus de 35 ans. Une expérience unique pour ceux qui
                            cherchent à continuer à jouer au rugby dans une
                            ambiance amicale et détendue.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
