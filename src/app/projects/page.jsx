import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "JAVA - Risk",
      imageSrc: "/images/risk-main.png",
      link: "https://github.com/DPlauder/risk_java",
      external: true,
    },
    {
      title: "PHP - MyShop",
      imageSrc: "/images/php-shop.png",
      link: "https://plaudertech-solution.at/public/index.php",
      external: true,
    },
    {
      title: "Unity - Durak Cardgame",
      imageSrc: "/images/durak-game.png",
      link: "/projects/project-three",
      external: false,
    },
    {
      title: "JS - Sinking Ships",
      imageSrc: "/images/sinking-ships.png",
      link: "https://github.com/DPlauder/hw_schiffeversenken",
      external: true,
    },
    {
      title: "React - Memory Game",
      imageSrc: "/images/memory-game.png",
      link: "https://memory-game-red-seven.vercel.app/",
      external: true,
    },
    {
      title: "React - Quiz App",
      imageSrc: "/images/quizz-app.png",
      link: "https://quizz-app-neon.vercel.app/",
      external: true,
    },
    {
      title: "React - CV App",
      imageSrc: "/images/cv-app.png",
      link: "https://cv-app-seven.vercel.app/",
      external: true,
    },
  ];

  return (
    <main className="pt-[6rem] pb-[4rem] px-4 bg-custom-bg text-white h-full overflow-hidden">
      <div className="container mx-auto h-full">
        <h1 className="text-4xl font-bold mb-8 text-center">Recent Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              passHref
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              target={project.external ? "_blank" : "_self"}
              rel={project.external ? "noopener noreferrer" : undefined}
            >
              <div className="w-full h-48 flex items-center justify-center bg-black text-white">
                <h2 className="text-xl font-bold group-hover:opacity-0 transition-opacity duration-300">
                  {project.title}
                </h2>
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
