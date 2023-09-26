import Image from "next/image";

export default function Club() {
    return (
        <div className="w-full p-24">
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 lg:ml-11">
                <div className="bg-white bg-opacity-60 backdrop-blur-md p-8 rounded-xl w-80 border border-white">
                    <h2 className="text-black font-bold text-2xl mb-4">
                        Informations Pratiques
                    </h2>
                    <div className="space-y-2 text-black">
                        <p>
                            <span className="font-semibold">Cotisation :</span>{" "}
                            150€ / an
                        </p>
                        <p>
                            <span className="font-semibold">Adresse :</span> 123
                            Rue de la Victoire, Montagneville
                        </p>
                        <p>
                            <span className="font-semibold">Email :</span>{" "}
                            contact@guerriersmontagne.rugby
                        </p>
                        <p>
                            <span className="font-semibold">Téléphone :</span>{" "}
                            01 23 45 67 89
                        </p>
                    </div>
                </div>

                <div className="p-4 sm:p-12 ">
                    <h3 className="text-2xl font-semibold text-gray-800 rounded font-sans">
                        La division rugby du Club Omnisport Gargenville
                    </h3>
                    <p className="mt-4 text-lg text-gray-600">
                        Ce club, riche d'une communauté passionnée et dynamique,
                        accueille des joueurs de tous âges et de tous niveaux,
                        offrant un environnement convivial et stimulant pour
                        apprendre et exceller dans ce sport intense et
                        stratégique. Le COG est reconnu pour son engagement
                        envers le développement des compétences de rugby, la
                        promotion de l'esprit sportif et la création d'un espace
                        où l'amour du jeu et le respect mutuel sont valorisés.
                        Les entraînements et les matchs organisés par le club
                        sont l'occasion pour les membres de tisser des liens
                        forts et de partager leur passion pour le rugby.
                    </p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row-reverse space-y-6 sm:space-y-0 sm:space-x-6">
                <div className="m-12 w-full ">
                    <Image
                        src="/cog_togo.jpeg"
                        alt="Description de l'image"
                        className="rounded-3xl"
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className="p-4 sm:p-12">
                    <h3 className="text-2xl font-semibold text-gray-800 rounded font-sans">
                        Un club ouvert sur le monde
                    </h3>
                    <p className="mt-4 text-lg text-gray-600">
                        Le Club Olympique de Gargenville (COG) a enrichi son
                        expérience et partagé sa passion pour le rugby à travers
                        plusieurs tournées internationales marquantes. En 1998,
                        le club a traversé les frontières pour se rendre en Côte
                        d'Ivoire, inaugurant ainsi une série de voyages
                        internationaux. En 2002, les membres du COG ont exploré
                        Cuba, vivant des moments inoubliables et échangeant avec
                        les communautés locales autour du rugby. Quatre ans plus
                        tard, en 2006, la Roumanie a accueilli le club, offrant
                        de nouvelles opportunités d'apprentissage et de partage.
                        Enfin, en 2010, le COG a mis le cap sur le Togo,
                        consolidant son engagement envers le développement du
                        rugby et l'établissement de liens internationaux. Ces
                        tournées ont non seulement permis aux joueurs de
                        découvrir de nouvelles cultures et approches du jeu,
                        mais ont également renforcé l'esprit de camaraderie et
                        les valeurs du club.
                    </p>
                </div>
            </div>
        </div>
    );
}
