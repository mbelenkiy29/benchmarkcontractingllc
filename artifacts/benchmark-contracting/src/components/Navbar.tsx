import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoSrc from "@assets/Benchmark_1775063903268.png";

const serviceItems = [
  "Stretch Ceilings",
  "Acoustical Systems",
  "Plaster and Stucco",
  "Residential Construction",
  "Residential Renovation",
  "Commercial Construction",
  "Commercial Renovation",
  "Structural & Exterior Work",
  "Mechanical, Electrical & Plumbing",
  "Interior Finishes",
  "Specialty Services",
  "Compliance & Safety",
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-2"
          : "bg-black/70 backdrop-blur-sm py-2"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div
              className="cursor-pointer overflow-hidden relative flex-shrink-0"
              style={{ width: "260px", height: "56px" }}
            >
              <img
                src={logoSrc}
                alt="Benchmark Contracting Group"
                className="absolute"
                style={{ width: "260px", top: "-100px" }}
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Home */}
            <Link href="/">
              <span
                data-testid="nav-link-home"
                className={`text-sm font-medium uppercase tracking-wider transition-colors cursor-pointer ${
                  location === "/" ? "text-primary" : "text-white/80 hover:text-primary"
                }`}
              >
                Home
              </span>
            </Link>

            {/* About */}
            <Link href="/about">
              <span
                data-testid="nav-link-about"
                className={`text-sm font-medium uppercase tracking-wider transition-colors cursor-pointer ${
                  location === "/about" ? "text-primary" : "text-white/80 hover:text-primary"
                }`}
              >
                About
              </span>
            </Link>

            {/* Services Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/services">
                <span
                  data-testid="nav-link-services"
                  className={`flex items-center gap-1 text-sm font-medium uppercase tracking-wider transition-colors cursor-pointer ${
                    location === "/services" ? "text-primary" : "text-white/80 hover:text-primary"
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </span>
              </Link>

              {/* Dropdown Panel */}
              {servicesOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-black/95 backdrop-blur-xl border border-white/10 rounded-sm shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Arrow */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black/95 border-l border-t border-white/10 rotate-45" />

                  <div className="py-2">
                    {serviceItems.map((item) => (
                      <Link key={item} href="/services">
                        <span className="block px-5 py-2.5 text-sm text-white/75 hover:text-primary hover:bg-white/5 transition-colors cursor-pointer">
                          {item}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Projects */}
            <Link href="/projects">
              <span
                data-testid="nav-link-projects"
                className={`text-sm font-medium uppercase tracking-wider transition-colors cursor-pointer ${
                  location === "/projects" ? "text-primary" : "text-white/80 hover:text-primary"
                }`}
              >
                Projects
              </span>
            </Link>

            {/* Contact */}
            <Link href="/contact">
              <span
                data-testid="nav-link-contact"
                className={`text-sm font-medium uppercase tracking-wider transition-colors cursor-pointer ${
                  location === "/contact" ? "text-primary" : "text-white/80 hover:text-primary"
                }`}
              >
                Contact
              </span>
            </Link>

            <Link href="/contact">
              <Button
                data-testid="nav-cta"
                className="bg-primary hover:bg-primary/90 text-white font-semibold ml-2 rounded-sm px-6"
              >
                Get a Free Estimate
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            data-testid="nav-mobile-toggle"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl p-6 flex flex-col gap-5 animate-in slide-in-from-top-2 max-h-[80vh] overflow-y-auto">
          <Link href="/">
            <span className={`text-lg font-medium transition-colors block cursor-pointer ${location === "/" ? "text-primary" : "text-white/90 hover:text-primary"}`}>
              Home
            </span>
          </Link>
          <Link href="/about">
            <span className={`text-lg font-medium transition-colors block cursor-pointer ${location === "/about" ? "text-primary" : "text-white/90 hover:text-primary"}`}>
              About
            </span>
          </Link>

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`flex items-center justify-between w-full text-lg font-medium transition-colors ${
                location === "/services" ? "text-primary" : "text-white/90"
              }`}
            >
              Services
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-primary" : ""}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="mt-3 ml-4 flex flex-col gap-3 border-l border-white/10 pl-4">
                {serviceItems.map((item) => (
                  <Link key={item} href="/services">
                    <span className="text-sm text-white/70 hover:text-primary transition-colors cursor-pointer block">
                      {item}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/projects">
            <span className={`text-lg font-medium transition-colors block cursor-pointer ${location === "/projects" ? "text-primary" : "text-white/90 hover:text-primary"}`}>
              Projects
            </span>
          </Link>
          <Link href="/contact">
            <span className={`text-lg font-medium transition-colors block cursor-pointer ${location === "/contact" ? "text-primary" : "text-white/90 hover:text-primary"}`}>
              Contact
            </span>
          </Link>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold w-full mt-2 rounded-sm py-6 text-lg">
              Get a Free Estimate
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
