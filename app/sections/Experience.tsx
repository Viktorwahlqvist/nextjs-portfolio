
function Experience() {
  const experiences = [
    {
      period: "2024 — Present",
      role: "Front-end Developer Student",
      company: "KYH Anywhere",
      description:
        "Frontend development studies with focus on modern web development, UX/UI design, fullstack development and testing practices. Built applications using Vite on the frontend and Node.js with Express on the backend, working with API development, responsive design and component-based architecture.",
      technologies: [
        "React",
        "Vite",
        "TypeScript",
        "Node.js",
        "Express",
        "UX/UI Design",
        "Tailwind CSS",
        "Sass",
        "Bootstrap",
        "Git",
        "GitHub",
        "Jest",
        "Cypress"
      ],
      current: true,
    },
    {
      period: "2025 — 2026",
      role: "LIA Frontend Developer",
      company: "Roslagens Webbyrå",
      description:
        "Developed and maintained a web application using React and TypeScript. Implemented Monrad pairing system, full-site translation, API integration, Prisma, and backend communication. Worked with Tailwind CSS for UI, Docker for development environment, and deployed applications via Vercel. Contributed to system architecture improvements and scalability across districts.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "Docker",
        "Vercel",
        "Git",
        "GitHub",
        "Jest"
      ],
      current: false,
    }, {
      period: "2023 — 2024",
      role: "Web Server Programming 2",
      company: "NTI",
      description:
        "Advanced backend development with PHP and database integration for dynamic web applications.",
      technologies: ["PHP", "MySQL"],
      current: false,
    },

    {
      period: "2023 — 2024",
      role: "Web Server Programming 1",
      company: "NTI",
      description:
        "Backend development fundamentals using PHP and server-side logic.",
      technologies: ["PHP"],
      current: false,
    }
    , {
      period: "2023 — 2024",
      role: "Programming 1",
      company: "NTI",
      description:
        "Introduction to programming with focus on C# and fundamental programming concepts.",
      technologies: ["C#"],
      current: false,
    },
  ];
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 vg-primary/5 rounded-full
      blur-3xl -translate-y-1/2"/>
      <div className="container mx-auto px-6 relative z-10">
        {/* header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Career Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Experience that{" "}
            <span className="font-serif italic font-normal text-white">speaks volumes.</span></h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my growth as a developer, from curious beginner to building real-world applications through education and hands-on experience.
          </p>
        </div>
        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 vid-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          <div className="space-y-12">{experiences.map((exp, index) => (
            <div
              style={{
                animationDelay: `${(index + 1 * 100)}ms`
              }}
              className="relative grid md:grid-cols-2 gap-8 animate-fade-in" key={index}>
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full
              -translate-x-1/2 ring-4 ring-background z-10">
                {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />}
              </div>
              {/* Content */}

              <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                  <span className="text-sm text-primary font-medium">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                  <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>{exp.technologies.map((tech, techIndex) => (
                    <span className="px-3 py-1 bg-surface text-xs roundend-full" key={techIndex}>{tech}</span>
                  ))}</div>
                </div>
              </div>
            </div>
          ))}</div>
        </div>
      </div>
    </section>
  );
}

export default Experience;