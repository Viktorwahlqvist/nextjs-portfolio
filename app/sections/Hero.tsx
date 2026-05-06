"use client";
import Image from "next/image";
import Particles from "../components/Particles";
import Button from "../components/Button";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AnimatedBorderButton } from "../components/AnimateBorderButton";
import Link from "next/link";


function Hero() {

  const Social = [
    { icon: FaGithub, link: "https://github.com/Viktorwahlqvist" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/viktor-vahlqvist-45b7a7377/" },
  ];


  const skills = [
    "React",
    "Next.js",
    "Tanstack Start",
    "TypeScript",
    "Node.js",
    "Express",
    "REST API",
    "MySQL",
    "PostgreSQL",
    "Prisma",
    "Supabase",
    "Docker",
    "Vercel",
    "Tailwind CSS",
    "Sass",
    "Jest",
    "Cypress",
    "Git",
    "Figma",
  ];


  return (
    <section className="relatve min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          className="w-full h-full object-cover opacity-40"
          src="/hero-bg.png"
          alt="Hero Picture"
          fill />
        <div className="absolute inset-0 bg-linear-to-b from-background/30 via-background/50 to-background/70" />
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Particles />
      </div>
      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />Frontend Developer - React
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl  lg:text-7xl leading-tight animate-fade-in animation-delay-100">Building
                <span className="text-primary glow-text"> modern</span>
                <br />
                web experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span></h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">Hi, I&apos;m Viktor. I&apos;m currently studying software development and will graduate in May. I work mainly with React, Next.js, and TypeScript. I like building web applications while constantly improving my skills.</p>
            </div>
            <div className="flex flex-wrap gap-4 animate-fade-in animation-deay-400"><Button size="lg">Conact Me <ArrowRight size={15} /></Button>
              <AnimatedBorderButton><Download className="h-5 w-5" /> Download CV</AnimatedBorderButton>
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-500"><span className="text-sm text-muted-foreground">Follow:</span>
              {Social.map((item, index) => (
                <Link target="_blank" rel="noopener noreferrer" key={index} href={item.link} className="p-2 rounded-full glass hover:bg-primary/10 transition-all duration-300">
                  {<item.icon className="w-5 h-5" />}
                </Link>
              ))}
            </div>

          </div>
          {/* Right */}
          <div className="relatice animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <Image
                  width={2000}
                  height={2000}
                  src="/profile.png"
                  alt="Picture of me"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />


                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Coding.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="mt-20 animate-fade-in animation-delay-600"><p className="text-sm text-muted-foreground mb-6 text-center">
          Tech Stack</p>
          <div className="relative overflow-hidden"><div className="flex animate-marquee">
            {[...skills, ...skills].map((skill, index) => (
              <div className="shrink-0 px-8 py-4" key={index}><span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span></div>
            ))}</div></div>
        </div></div>
    </section >
  );
}

export default Hero;