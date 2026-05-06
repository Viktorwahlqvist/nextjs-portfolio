"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header id="top" className={`fixed top-0 left-0 right-0 transition duration-500 ${isScrolled ? "glass-strong" : "bg-transparent"} py-5  z-50`}>
      <nav className="container mx-auto px-6 flex items-center justify-between ">
        <Link href="#top" className="text-xl font-bold tracking-tight hover:text-primary">
          <span className="sr-only">Portfolio</span>
          <Image src="/loggo.png" alt="Portfolio logo" width={40} height={40} className="object-contain" />
        </Link>


        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                {link.label}
              </Link>
            ))}</div>
        </div>
        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>


        {/* Mobile ------- */}
        <button onClick={() => setIsMobileMenuOpen((prev) => !prev)} className="md:hidden p-2 text-foreground">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">{navLinks.map((link, index) => (
            <Link onClick={() => setIsMobileMenuOpen(false)} key={index} href={link.href} className="text-lg text-muted-foreground hover:text-foreground py-2">
              {link.label}
            </Link>
          ))}
            <Button onClick={() => setIsMobileMenuOpen(false)}>Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;