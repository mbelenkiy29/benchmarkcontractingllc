import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoSrc from "@assets/BENCHMARK_LOGO_1785646359770.png";
import { servicesData } from "@/data/services";

const serviceMenuItems = servicesData.map((s) => ({
  label: s.title,
  href: `/services/${s.slug}`,
}));

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [location] = useLocation();
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

  const isServicesActive = location.startsWith("/services");
  const isServiceDetail = location.startsWith("/services/");
  const navAccent = isServiceDetail ? "text-white" : "text-primary";
  const navHover = isServiceDetail ? "hover:text-gray-300" : "hover:text-primary";
  const navCta = isServiceDetail
    ? "bg-white hover:bg-gray-200 text-gray-900"
    : "bg-primary hover:bg-primary/90 text-white";
  const desktopLinkClass = (active: boolean) =>
    active ? navAccent : `text-white/80 ${navHover}`;
  const mobileLinkClass = (active: boolean) =>
    active ? navAccent : `text-white/90 ${navHover}`;

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
            <img
              src={logoSrc}
              alt="Benchmark Contracting Group"
              className="cursor-pointer flex-shrink-0 h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/">
              <span data-testid="nav-link-home" className={`text-sm font-medium uppercase tracking-wider transition-colors cursor-pointer ${desktopLinkClass(location === "/")}`}>
                Home
              </span>
            </Link>

            <Link href="/about">
              <span data-testid="nav-link-about" className={`text-sm font-medium uppercase tracking-wider transition-colors cursor-pointer ${desktopLinkClass(location === "/about")}`}>
                About
              </span>
            </Link>

            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link href="/services">
                <span
                  data-testid="nav-link-services"
                  className={`flex items-center gap-1 text-sm font-medium uppercase tracking-wider transition-colors cursor-pointer ${desktopLinkClass(isServicesActive)}`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </span>
              </Link>

              {servicesOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-black/97 backdrop-blur-xl border border-white/10 rounded-sm shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black border-l border-t border-white/10 rotate-45" />
                  <div className="py-2 max-h-[70vh] overflow-y-auto">
                    {serviceMenuItems.map((item) => (
                      <Link key={item.href} href={item.href}>
                        <span className={`block px-5 py-2.5 text-sm transition-colors cursor-pointer hover:bg-white/5 ${navHover} ${location === item.href ? `${navAccent} bg-white/5` : "text-white/75"}`}>
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/projects">
              <span data-testid="nav-link-projects" className={`text-sm font-medium uppercase tracking-wider transition-colors cursor-pointer ${desktopLinkClass(location === "/projects")}`}>
                Projects
              </span>
            </Link>

            <Link href="/contact">
              <span data-testid="nav-link-contact" className={`text-sm font-medium uppercase tracking-wider transition-colors cursor-pointer ${desktopLinkClass(location === "/contact")}`}>
                Contact
              </span>
            </Link>

            <Link href="/contact">
              <Button data-testid="nav-cta" className={`${navCta} font-semibold ml-2 rounded-sm px-6`}>
                Get a Free Estimate
              </Button>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu" data-testid="nav-mobile-toggle">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl p-6 flex flex-col gap-5 animate-in slide-in-from-top-2 max-h-[80vh] overflow-y-auto">
          <Link href="/"><span className={`text-lg font-medium block cursor-pointer ${mobileLinkClass(location === "/")}`}>Home</span></Link>
          <Link href="/about"><span className={`text-lg font-medium block cursor-pointer ${mobileLinkClass(location === "/about")}`}>About</span></Link>

          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`flex items-center justify-between w-full text-lg font-medium ${isServicesActive ? navAccent : "text-white/90"}`}
            >
              Services
              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? `rotate-180 ${navAccent}` : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="mt-3 ml-4 flex flex-col gap-2 border-l border-white/10 pl-4">
                {serviceMenuItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <span className={`text-sm block cursor-pointer transition-colors ${location === item.href ? navAccent : `text-white/70 ${navHover}`}`}>
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/projects"><span className={`text-lg font-medium block cursor-pointer ${mobileLinkClass(location === "/projects")}`}>Projects</span></Link>
          <Link href="/contact"><span className={`text-lg font-medium block cursor-pointer ${mobileLinkClass(location === "/contact")}`}>Contact</span></Link>
          <Link href="/contact">
            <Button className={`${navCta} font-semibold w-full mt-2 rounded-sm py-6 text-lg`}>Get a Free Estimate</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
