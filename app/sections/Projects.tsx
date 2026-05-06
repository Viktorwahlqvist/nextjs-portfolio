
import { ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "../components/AnimateBorderButton";

function Projects() {
  const projects = [
    {
      title: "Neo Cinema",
      description: "A cinema booking application where users can browse movies, view detailed information, and reserve seats through an interactive interface.",
      image: "/projects/Neo.png",
      tags: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "MySQL",
        "Bootstrap",
        "Sass"
      ],
      link: "https://neocinema.nodehill.se/",
      github: "https://github.com/Viktorwahlqvist/NeoCinema"
    },
  ];
  return (
    <section id="projects" className="py-32w relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16 ">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animatioin-delay-100 text-secondary-foreground">Project that{" "}
            <span className="font-serif italic font-normal text-white">make an impact.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my projects, built as web applications solving real-world problems.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{
                animationDelay: `${(index + 1) * 100}ms`
              }}>
              <div className="relative overflow-hidden aspect-video">
                <Image
                  width={600}
                  height={400}
                  src={project.image}
                  alt={`Image of ${project.title}`}
                  className="w-full h-full objet-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.link && (<Link className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all" target="_blank" rel="noopener noreferrer" href={project.link}><ArrowUpRight className="w-5 h-5" /></Link>)}{project.github && (<Link className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all" target="_blank" rel="noopener noreferrer" href={project.github}><FaGithub className="w-5 h-5" /></Link>)}</div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-all">{project.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm ">{project.description}</p>
                <div className="flex flex-wrap gap-2">{project.tags.map((tag, tagIndex) => (
                  <span className="px-4 py-1.5 rounded-full bg-surface text-sm font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300" key={tagIndex}>{tag}</span>
                ))}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 animate-fade-in animation-delay-500"><AnimatedBorderButton>View all Projects<Download className="h-5 w-5" /></AnimatedBorderButton></div>
      </div>
    </section>
  );
}

export default Projects;