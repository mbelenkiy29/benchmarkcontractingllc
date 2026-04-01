import { Link } from "wouter";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logoSrc from "@assets/Benchmark_1775063903268.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  "Pre-Construction",
  "Project Management",
  "Luxury Residential",
  "Commercial Build-outs",
  "Retail Flagships",
];

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/">
              <div className="cursor-pointer overflow-hidden relative" style={{ width: "200px", height: "44px" }}>
                <img
                  src={logoSrc}
                  alt="Benchmark Contracting Group"
                  className="absolute"
                  style={{ width: "200px", top: "-77px" }}
                />
              </div>
            </Link>
            <p className="text-white/60 leading-relaxed max-w-sm">
              New York's trusted partner for high-end residential, commercial, and luxury retail construction. Excellence built from the ground up.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href}>
                    <span className="text-white/60 hover:text-primary transition-colors cursor-pointer">
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-white/60">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link href="/services">
                    <span className="hover:text-primary transition-colors cursor-pointer">{s}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>New York City & Surrounding Areas</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:3473235535" className="hover:text-white transition-colors">(347) 323-5535</a>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@benchmarkcontractingllc.com" className="hover:text-white transition-colors">info@benchmarkcontractingllc.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Benchmark Contracting Group. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
