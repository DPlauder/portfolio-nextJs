import { use } from "react";
import Image from "next/image";
import Link from "next/link";

// Simulated function to fetch project data
const fetchProjectData = async (id: string) => {
  // In a real application, this would be an API call
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
  return {
    id,
    title: `Project ${id}`,
    image: "/images/durak-game.png?height=600&width=1200",
    link: "",
    githubRepo: "",
    description:
      "This is a detailed description of the project. It showcases the main features and goals of the project.",
    techStack: ["Unity", "C Sharp", "Unit Hub", "Visual Studio"],
    year: 2024,
  };
};

export default function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const project = use(fetchProjectData(id));

  return (
    <div className=" bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-primary">
          {project.title}
        </h1>

        <div className="mb-12">
          <div className="relative w-full h-[400px] mb-8">
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-[0_4px_12px_rgba(220,38,38,0.25)]"
            />
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300 shadow-[0_4px_12px_rgba(220,38,38,0.25)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                Visit Project
              </Link>
            )}

            {project.githubRepo && (
              <Link
                href={project.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-red-700 text-white rounded-md hover:bg-red-800 transition duration-300 shadow-[0_4px_12px_rgba(220,38,38,0.25)]"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub Repo
              </Link>
            )}
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                Description
              </h2>
              <p className="text-lg leading-relaxed">{project.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium shadow-[0_2px_4px_rgba(220,38,38,0.1)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className=" p-6 rounded-lg shadow-[0_4px_12px_rgba(220,38,38,0.15)]">
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Year</h3>
                <span className="px-4 py-2 bg-red-600 text-white rounded-full text-sm font-medium shadow-[0_2px_4px_rgba(220,38,38,0.1)] inline-block">
                  {project.year}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
