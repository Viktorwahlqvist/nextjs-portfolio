import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

function About() {

  const highlights = [
    {
      icon: Code2,
      title: "Practical Code",
      description:
        "Building real projects with a focus on understanding how things work, not just making them work.",
    },
    {
      icon: Rocket,
      title: "Frontend Development",
      description:
        "Creating responsive and modern web experiences with React, Next.js and TypeScript.",
    },
    {
      icon: Users,
      title: "Team Projects",
      description:
        "Collaborating in group projects and learning how to build applications together with others.",
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description:
        "Exploring new technologies and improving through hands-on experience and experimentation.",
    },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/*Left column*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">Building the future,{" "}
              <span className="font-serif italic font-normal text-white">one component at a time.</span></h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m Viktor Vahlqvist, a frontend developer currently studying Frontend Development
                at KYH. I started the program in August 2024 and will be graduating soon. I’m now
                looking for an opportunity where I can continue working hands-on with real projects
                and grow as a developer.
              </p>

              <p>
                Recently, I completed my LIA internship as a fullstack developer, where I worked
                with React, Next.js, Prisma, Jest, Git, and Docker. I was part of the Roslagens
                Schackfyransystem project, contributing to both frontend and backend development,
                designing UI flows in Figma, and implementing features in the application.
              </p>

              <p>
                During my studies and internship, I’ve worked with responsive web development,
                TypeScript, Tailwind, and Sass. I’ve also gained experience working in Scrum teams,
                collaborating on planning and development in a structured workflow.
              </p>

              <p>
                My interest in programming started with C# and PHP, which led me into web
                development and a deeper understanding of how systems are built. Since then, I’ve
                continued developing my skills through both education and personal projects.
              </p>

              <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-lg font-medium italic text-foreground">
                  &quot;I like taking on new challenges, learning new technologies, and turning ideas
                  into working products through code.&quot;
                </p>
              </div>
            </div>   </div>

          {/* Right */}
          <div className="grid sm:grid-cols-2 gap-2">
            {highlights.map((item, index) => (
              <div className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }} key={index}><div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb- hover:bg-primary/20">{<item.icon className="w-6 h-6 text-primary" />}</div>
                <h3 className="text-lg font font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p></div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;