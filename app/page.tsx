import Image from "next/image";

export default function Home() {
    const _images = [
        {
            src: "/cog_titre.jpg",
            alt: "Cog rugby gargenville champion",
            className:
                "image-container relative overflow-hidden rounded-2xl impaire",
            description: "Une institution",
        },
        {
            src: "/cog_junior.jpeg",
            alt: "Ovalie Seine",
            className:
                "image-container relative overflow-hidden rounded-2xl impaire",
            description: "Découvrez nos équipes de jeunes",
        },
        {
            src: "/cog_tribune.jpeg",
            alt: "Loto du club",
            className:
                "image-container relative overflow-hidden rounded-2xl impaire",
            description: "Les équipes loisirs",
        },
        {
            src: "/cog_baby.jpeg",
            alt: "Une équipe de baby rugby",
            className:
                "image-container relative overflow-hidden rounded-2xl impaire",
            description: "La vie du club",
        },
    ];
    return (
        <main className="flex flex-col min-h-screen p-4">
            {/* Conteneur principal */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start w-full h-full">
                {/* Logo */}
                <div className="mb-4 lg:mb-0 lg:mr-4 self-center lg:self-start">
                    <Image
                        src="/cog_logo.png"
                        alt="Mon Logo"
                        width={100}
                        height={100}
                    />
                </div>
                {/* Conteneur d'images */}
                <div className="flex flex-col lg:flex-row w-full">
                    {_images.map((image, index) => (
                        <div
                            key={index}
                            className="kl-grid-item relative w-full lg:w-1/4 mb-4"
                        >
                            <div className={image.className}>
                                <Image
                                    src={image.src}
                                    className="image"
                                    alt={image.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    quality={100}
                                />
                            </div>
                            <p className="mt-2 text-center description">
                                {image.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
