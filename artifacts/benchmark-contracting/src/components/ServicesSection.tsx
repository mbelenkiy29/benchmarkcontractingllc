import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList, Settings, Home, Building2, Hammer,
  Zap, Paintbrush, TreePine, Star, CheckSquare, ChevronDown
} from "lucide-react";

const services = [
  {
    icon: ClipboardList,
    title: "Pre-Construction & Planning",
    description: "Laying the groundwork for a flawless build — from concept to construction-ready.",
    items: [
      "Project planning & feasibility analysis",
      "Budgeting & cost estimation",
      "Permit acquisition & code compliance",
      "Scheduling & timeline development",
      "Architectural & engineering coordination",
    ],
  },
  {
    icon: Settings,
    title: "Project Management",
    description: "Full oversight from groundbreaking to ribbon-cutting — one point of contact, zero surprises.",
    items: [
      "Full project oversight from start to finish",
      "Trade coordination & subcontractor management",
      "Material procurement & logistics",
      "Quality control & inspections",
      "On-site supervision & safety enforcement (SST compliant)",
    ],
  },
  {
    icon: Home,
    title: "Residential Construction",
    description: "From brownstone renovations to custom luxury homes — every detail done right.",
    items: [
      "Full home renovations & remodels",
      "Kitchen & bathroom renovations",
      "Basement finishing & conversions",
      "Interior & exterior upgrades",
      "Custom home builds",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    description: "Build-outs and ground-up commercial projects executed with precision and speed.",
    items: [
      "Office build-outs & tenant improvements",
      "Retail store construction (luxury + standard)",
      "Restaurant & hospitality construction",
      "Corporate interior renovations",
      "Ground-up commercial projects",
    ],
  },
  {
    icon: Hammer,
    title: "Structural & Core Work",
    description: "The bones of every great build — structural integrity you can trust.",
    items: [
      "Framing & structural modifications",
      "Demolition & site preparation",
      "Concrete & masonry work",
      "Roofing & waterproofing",
      "Foundation work",
    ],
  },
  {
    icon: Zap,
    title: "MEP Coordination",
    description: "Mechanical, electrical, and plumbing systems designed and installed to code.",
    items: [
      "Electrical installations & upgrades",
      "Plumbing systems & fixture installation",
      "HVAC installation & ventilation systems",
      "Licensed trade coordination & compliance",
    ],
  },
  {
    icon: Paintbrush,
    title: "Interior Finishes",
    description: "High-end finishes that transform spaces into statements of luxury.",
    items: [
      "Drywall, taping & painting",
      "Flooring (hardwood, tile, vinyl, etc.)",
      "Custom millwork & carpentry",
      "Trim, doors & cabinetry installation",
      "High-end finish work (luxury standards)",
    ],
  },
  {
    icon: TreePine,
    title: "Exterior Work",
    description: "First impressions that last — facade work, outdoor builds, and weatherproofing.",
    items: [
      "Facade improvements & repairs",
      "Stucco, siding & brickwork",
      "Decks, patios & outdoor builds",
      "Waterproofing & drainage systems",
    ],
  },
  {
    icon: Star,
    title: "Specialty Services",
    description: "Luxury flagship builds, fast-track projects, and value engineering at the highest level.",
    items: [
      "Luxury retail & flagship store builds (LV, Dior level work)",
      "High-end residential finishes",
      "Fast-track / deadline-driven projects",
      "Value engineering (cost-saving strategies)",
      "Turnkey solutions",
    ],
  },
  {
    icon: CheckSquare,
    title: "Post-Construction",
    description: "We don't leave until it's perfect — punch list, inspections, and ongoing support.",
    items: [
      "Final inspections & punch list completion",
      "Certificate of occupancy assistance",
      "Maintenance & repair services",
      "Warranty work",
    ],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`border bg-white rounded-sm overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md hover:border-primary/40 ${
        open ? "border-primary/40 shadow-md" : "border-gray-200"
      }`}
    >
      <button
        data-testid={`service-card-${index}`}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-5 p-6 text-left group"
      >
        <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1 leading-snug">{service.description}</p>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 border-t border-gray-100 pt-4">
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-gray-50 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,102,0,0.03)_0%,_transparent_70%)]" />
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">What We Do</span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Full-Spectrum Construction Services
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            From first shovel to final inspection — we handle everything so you don't have to.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
