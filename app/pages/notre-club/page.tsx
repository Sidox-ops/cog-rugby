import Image from "next/image";

export default function Club() {
    return (
        <div className="w-full px-4 py-6 md:px-12 lg:px-24">
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 lg:space-x-12 lg:ml-0">
                <div className="bg-white bg-opacity-60 backdrop-blur-md p-8 rounded-xl w-full sm:w-80 border border-white">
                    <h2 className="text-black font-bold text-2xl mb-4">
                        Informations Pratiques
                    </h2>
                    <div className="space-y-2 text-black">
                        <p>
                            <span className="font-semibold">Cotisation :</span>{" "}
                            <a
                                href="/cog_cotisations.pdf"
                                download
                                className="text-blue-500 hover:underline cursor-pointer"
                            >
                                Voir la grille
                            </a>
                        </p>
                        <p>
                            <a
                                className="hover:underline"
                                href="https://www.google.fr/maps/place/1+rue+Andr%C3%A9+Samitier,+78440+Gargenville/@48.986088,1.8154518,17z/data=!3m1!4b1!4m6!3m5!1s0x47e694602358b015:0x1eb425d5eaab1bb5!8m2!3d48.9860845!4d1.8180267!16s%2Fg%2F11fst6s7zz?entry=ttu"
                            >
                                <span className="font-semibold">Adresse :</span>{" "}
                                <span className="text-blue-500">
                                    {" "}
                                    1rue André Samitier, 78440 Gargenville
                                </span>
                            </a>
                        </p>
                        <p>
                            <span className="font-semibold">Email :</span>{" "}
                            <span className="text-blue-500">
                                rugbygargenville@gmail.com
                            </span>
                        </p>
                        <p>
                            <span className="font-semibold">Téléphone :</span>{" "}
                            01 78 72 79 98
                        </p>
                    </div>
                </div>

                <div className="p-4 sm:p-12 lg:pr-6">
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
                <div className="m-12 w-full">
                    <Image
                        src="/cog_togo.jpeg"
                        alt="Description de l'image"
                        className="rounded-3xl"
                        width={1000}
                        height={1000}
                    />
                </div>

                <div className="p-4 sm:p-12 lg:pl-6">
                    <h3 className="text-2xl font-semibold text-gray-800 rounded font-sans">
                        Un club ouvert sur le monde
                    </h3>
                    <p className="mt-4 text-lg text-gray-600">
                        Le Club Omnisport de Gargenville (COG) a enrichi son
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

            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 lg:space-x-12 lg:ml-0">
                <div className="flex flex-col items-center justify-center bg-white bg-opacity-60 backdrop-blur-md p-8 rounded-xl border border-white w-full">
                    <h2 className="text-black font-bold text-2xl mb-4">
                        Palmarès depuis 2000
                    </h2>
                    <div className="space-y-2 text-black text-center">
                        <p>
                            <span className="font-semibold">2001 :</span>{" "}
                            Champion Île de France 4eme série et vice-Champion
                            de France
                        </p>
                        <p>
                            <span className="font-semibold">2002 :</span>{" "}
                            Champion Île de France 3ème série
                        </p>
                        <p>
                            <span className="font-semibold">2004 :</span>{" "}
                            Réserve championne île de France 1ére série
                        </p>
                        <p>
                            <span className="font-semibold">2011 :</span>{" "}
                            L'équipe A est vice-championne Ile de France 1ere
                            série
                        </p>
                        <p>
                            <span className="font-semibold">2012 :</span>{" "}
                            L'équipe B seniors est devenue championne île de
                            France FFSE (Div III)
                        </p>
                        <p>
                            <span className="font-semibold">2013 :</span> Les
                            séniors sont allés jusqu'en finale de la coupe Ile
                            de France
                        </p>
                        <p>
                            <span className="font-semibold">2014 :</span> 2eme
                            de la poule PH et 16ème de finales de championnat de
                            France. le premier montait seulement.
                        </p>
                        <p>
                            <span className="font-semibold">2016 :</span> 2eme
                            de la poule 1ere série et finaliste IDF - remontée
                            en PH
                        </p>
                        <p>
                            <span className="font-semibold">2017/2018 :</span>{" "}
                            Maintien en PH avec deux équipes sans MEI ni
                            forfait. Coupe trophy rugby à 7 IDF
                        </p>
                        <p>
                            <span className="font-semibold">2018/2019 :</span>{" "}
                            2eme de la poule et montée en Honneur. Finalistes
                            IDF pour les deux équipes
                        </p>
                        <p>
                            <span className="font-semibold">2021/2022 :</span>{" "}
                            Champion Ile de France seniors Promotion d'Honneur
                            et montée en Régional 1
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
