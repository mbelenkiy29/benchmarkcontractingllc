import React, { useState, useEffect } from "react";
import logoSrc from "@assets/Benchmark_1775063903268.png";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="cursor-pointer" onClick={() => scrollTo("home")}>
            <img src={logoSrc} alt="Benchmark Contracting Group" className="h-10 md:h-12 w-auto" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {["home", "about", "services", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-sm font-medium text-white/80 hover:text-primary transition-colors capitalize uppercase"
              >
                {item}
              </button>
            ))}
            <Button
              onClick={() => scrollTo("contact")}
              className="bg-primary hover:bg-primary/90 text-white font-semibold ml-4 rounded-sm px-6"
            >
              Get a Free Estimate
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl p-6 flex flex-col gap-6 animate-in slide-in-from-top-2">
          {["home", "about", "services", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-lg font-medium text-white/90 hover:text-primary transition-colors text-left capitalize"
            >
              {item}
            </button>
          ))}
          <Button
            onClick={() => scrollTo("contact")}
            className="bg-primary hover:bg-primary/90 text-white font-semibold w-full mt-4 rounded-sm py-6 text-lg"
          >
            Get a Free Estimate
          </Button>
        </div>
      )}
    </header>
  );
}
