import Image from "next/image";
import Section from "./components/Section";
import Link from "next/link";
import Navbar from "./components/navbar";
export default function Home() {
    const _images = [
        {
            src: "/cog_titre.jpg",
            alt: "Cog rugby gargenville champion",
            className:
                "image-container relative overflow-hidden rounded-2xl impaire",
            description: "Notre Club",
            href: "/pages/notre-club",
        },
        {
            src: "/cog_junior.jpeg",
            alt: "Ovalie Seine",
            className:
                "image-container relative overflow-hidden rounded-2xl impaire",
            description: "Nos Équipes de Jeunes",
            href: "/pages/notre-club",
        },
        {
            src: "/cog_tribune.jpeg",
            alt: "Loto du club",
            className:
                "image-container relative overflow-hidden rounded-2xl impaire",
            description: "Les Équipes Loisirs",
            href: "/pages/notre-club",
        },
        {
            src: "/cog_baby.jpeg",
            alt: "Une équipe de baby rugby",
            className:
                "image-container relative overflow-hidden rounded-2xl impaire",
            description: "La vie du club",
            href: "/pages/notre-club",
        },
    ];

    const isClient = typeof window !== "undefined";
    const showNavbar = isClient ? window.location.pathname == "/" : false;
    return (
        <>
            <main className="flex flex-col min-h-screen p-4">
                <div className="flex flex-col lg:flex-row items-center lg:items-start w-full h-full">
                    <div className="mb-4 lg:mb-0 lg:mr-4 self-center lg:self-start">
                        <Image
                            src="/cog_logo.png"
                            alt="Mon Logo"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row w-full">
                        {_images.map((image, index) => (
                            <Link
                                href={image.href}
                                key={index}
                                className="kl-grid-item relative w-full block mb-4"
                            >
                                <Section>
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
                                    <p className="mt-2 text-center block description">
                                        {image.description}
                                    </p>
                                </Section>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}
