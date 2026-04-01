import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoSrc from "@assets/Benchmark_1775063903268.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

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
            {navLinks.map(({ label, href }) => (
              <Link key={href} href={href}>
                <span
                  data-testid={`nav-link-${label.toLowerCase()}`}
                  className={`text-sm font-medium uppercase tracking-wider transition-colors cursor-pointer ${
                    location === href
                      ? "text-primary"
                      : "text-white/80 hover:text-primary"
                  }`}
                >
                  {label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <Button
                data-testid="nav-cta"
                className="bg-primary hover:bg-primary/90 text-white font-semibold ml-4 rounded-sm px-6"
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
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl p-6 flex flex-col gap-6 animate-in slide-in-from-top-2">
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href}>
              <span
                className={`text-lg font-medium transition-colors block cursor-pointer ${
                  location === href ? "text-primary" : "text-white/90 hover:text-primary"
                }`}
              >
                {label}
              </span>
            </Link>
          ))}
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold w-full mt-4 rounded-sm py-6 text-lg">
              Get a Free Estimate
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
