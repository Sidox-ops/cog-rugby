import Image from "next/image";

export default function Organigramme() {
    return (
        <div className="container mx-auto px-4 py-6 space-y-8">
            <h1 className="text-3xl text-gray-800 font-bold mb-6">Organigramme du Club</h1>

            <div className="space-y-6">
                {/* Président */}
                <Member
                    name="Cyril CHAPELLE"
                    role="Président"
                    email="cc.chapelle@laposte.net"
                    phone=""
                    photoUrl="/profile/cog_cyril.jpeg"
                />
                <div className="flex space-x-6 mt-6 overflow-x-auto organigramme-scrollbar">
                    {/* Vice-Président et secrétaire */}
                    <Member
                        name="Philippe GRAPPERON"
                        role="Vice-Président et secrétaire"
                        email="rugbygargenville@gmail.com"
                        phone="06 74 66 76 16"
                        photoUrl="/profile/cog_grapperon.jpeg"
                    />

                    {/* Responsable Ecole de Rugby */}
                    <Member
                        name="Michel DELAIQUE"
                        role="Responsable Ecole de Rugby"
                        email="michel-delaique@orange.fr"
                        phone=""
                        photoUrl="/profile/cog_michel.jpeg"
                    />

                    {/* Co-responsable Ecole de Rugby */}
                    <Member
                        name="Frédéric RAMO"
                        role="Co-responsable Ecole de Rugby"
                        phone=""
                        photoUrl="/profile/cog_fred.jpeg"
                    />

                    {/* Secrétaire Ecole de Rugby */}
                    <Member
                        name="Carole FISCHER"
                        role="Secrétaire Ecole de Rugby"
                        email="edrcogrugby@gmail.com"
                        phone=""
                        photoUrl="/profile/cog_fischer.jpeg"
                    />

                    {/* Dirigeante Ovalie Seine cadets et juniors */}
                    <Member
                        name="Alexandra LEFEVRE"
                        role="Dirigeante Ovalie Seine cadets et juniors"
                        email="Alexandra-lefevre@hotmail.com"
                        phone=""
                        photoUrl="/profile/cog_lefevre.jpeg"
                    />

                    {/* Co-dirigeante Ovalie Seine cadets et juniors */}
                    <Member
                        name="Mélanie ROCH"
                        role="Co-dirigeante Ovalie Seine cadets et juniors"
                        email="melaniecenuty21@gmail.com"
                        phone=""
                        photoUrl="/profile/cog_roch.jpeg"
                    />

                    {/* Dirigeante séniors */}
                    <Member
                        name="Marine ALLIOT"
                        role="Dirigeante séniors"
                        email="alliot.marine@gmail.com"
                        phone=""
                        photoUrl="/profile/cog_marine.jpeg"
                    />

                    {/* Codirigeante séniors */}
                    <Member
                        name="Vanessa DELAIQUE"
                        role="Codirigeante séniors"
                        email="vanessa-delaique@orange.fr"
                        phone=""
                        photoUrl="/profile/cog_vanessa.jpeg"
                    />

                    {/* Dirigeante Rugby à 5 touché */}
                    <Member
                        name="Lison CORNU"
                        role="Dirigeante Rugby à 5 touché"
                        email="lison.cornu@gmail.com"
                        phone=""
                        photoUrl="/profile/cog_lison.jpeg"
                    />
                </div>
            </div>
        </div>
    );
}

function Member({ name, role, email, phone, photoUrl }: any) {
    const isPresident = role === "Président";

    return (
        <div
            className={`flex ${
                isPresident
                    ? "flex-col justify-center items-center"
                    : "items-center"
            } space-x-4 bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg p-6 mb-6 transition-transform transform hover:scale-105 min-w-[320px]`}
        >
            <div className="w-24 h-24 relative">
                <Image
                    src={photoUrl}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                />
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-2">{name}</h2>
                <p className="text-gray-700 text-sm mb-2">{role}</p>
                {email && <p className="text-blue-500 text-sm mb-2">{email}</p>}
                <p className="text-gray-700 text-sm">{phone}</p>
            </div>
        </div>
    );
}
