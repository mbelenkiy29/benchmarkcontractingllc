import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ALL = "All";

const categories = [
  ALL,
  "Commercial",
  "Residential Kitchen Remodeling",
  "Hospitality",
  "Construction",
  "Luxury Retail",
];

const categoryColors: Record<string, string> = {
  "Luxury Retail": "bg-primary text-white",
  "Commercial": "bg-blue-500/80 text-white",
  "Residential Kitchen Remodeling": "bg-emerald-600/80 text-white",
  "Hospitality": "bg-purple-600/80 text-white",
  "Construction": "bg-amber-600/80 text-white",
};

const projects = [
  {
    image: "/images/project-louis-vuitton.png",
    title: "Louis Vuitton NYC",
    category: "Luxury Retail",
    description: "Contributed to the construction of the iconic new Louis Vuitton flagship on Fifth Avenue — a landmark in luxury retail architecture.",
    location: "Fifth Avenue, New York City",
    featured: true,
  },
  {
    image: "/images/project-corporate-hq.jpeg",
    title: "Corporate Headquarters",
    category: "Commercial",
    description: "Full build-out of a modern glass-facade corporate headquarters — precision engineering from structural steel to interior finishes.",
    location: "Westchester, New York",
  },
  {
    image: "/images/project-tech-campus.jpeg",
    title: "Major Tech Campus",
    category: "Commercial",
    description: "Large-scale commercial construction for a leading technology company, blending industrial design with sustainable green architecture.",
    location: "New York City",
  },
  {
    image: "/images/project-kitchen-residential.jpeg",
    title: "Luxury Kitchen Remodel",
    category: "Residential Kitchen Remodeling",
    description: "Complete residential kitchen transformation — custom cabinetry, marble countertops, premium appliances, and designer pendant lighting.",
    location: "Upper East Side, Manhattan",
  },
  {
    image: "/images/project-ground-up.jpeg",
    title: "Ground-Up Commercial Build",
    category: "Construction",
    description: "Complex ground-up construction in lower Manhattan — structural steel, curtain wall systems, and precision coordination in a dense urban environment.",
    location: "Lower Manhattan, NYC",
  },
  {
    image: "/images/project-restaurant-kitchen.jpeg",
    title: "Commercial Kitchen Build-Out",
    category: "Hospitality",
    description: "Full commercial kitchen installation for a high-volume NYC restaurant — NSF-compliant equipment layout, ventilation systems, and fire suppression.",
    location: "Tribeca, New York City",
  },
  {
    image: "/images/project-landmark.jpeg",
    title: "Landmark Site Construction",
    category: "Construction",
    description: "High-stakes construction work at one of New York City's most recognized sites — precision welding, structural reinforcement, and full compliance with landmark requirements.",
    location: "Lower Manhattan, NYC",
  },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState(ALL);

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  const filtered =
    activeCategory === ALL
      ? rest
      : rest.filter((p) => p.category === activeCategory);

  const showFeatured = activeCategory === ALL || activeCategory === "Luxury Retail";

  return (
    <section id="projects" className="py-24 md:py-32 bg-black relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Portfolio</span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built to Impress. Built to Last.
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A selection of our work across residential, commercial, hospitality, and luxury retail sectors in New York.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm font-semibold uppercase tracking-wider rounded-sm border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary border-primary text-white"
                  : "bg-transparent border-white/20 text-white/60 hover:border-primary/60 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Card */}
        <AnimatePresence>
          {showFeatured && featured && (
            <motion.div
              key="featured"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-sm bg-zinc-900 border border-primary/50 hover:border-primary transition-all duration-300 cursor-pointer mb-6"
            >
              <div className="aspect-[16/7] overflow-hidden relative">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm ${categoryColors[featured.category]}`}>
                    {featured.category}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm bg-white/10 text-white/80 border border-white/20">
                    Featured Project
                  </span>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {featured.title}
                </h3>
                <p className="text-base text-white/60 mb-3 leading-relaxed max-w-2xl">
                  {featured.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-white/40 uppercase tracking-wider">
                  <span className="w-4 h-px bg-primary" />
                  {featured.location}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-sm bg-zinc-900 border border-white/10 hover:border-primary/40 transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm ${categoryColors[project.category] ?? "bg-white/10 text-white"}`}>
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/60 mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-white/40 uppercase tracking-wider">
                    <span className="w-4 h-px bg-primary" />
                    {project.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-white/40 text-lg">
            No projects in this category yet.
          </div>
        )}
      </div>
    </section>
  );
}
