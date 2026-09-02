import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ALL = "All";

const categories = [
  ALL,
  "Renovation",
  "Surfaces & Finishes",
  "Construction",
  "Outdoor",
];

const categoryColors: Record<string, string> = {
  "Renovation":          "bg-black/85 text-white",
  "Surfaces & Finishes": "bg-neutral-700/90 text-white",
  "Construction":        "bg-neutral-500/90 text-white",
  "Outdoor":             "bg-white/90 text-neutral-900",
};

const projects = [
  {
    image: "/images/interior-1.jpeg",
    title: "Luxury Interior Finishes",
    category: "Renovation",
    description:
      "Custom millwork, skim coating, high-end painting, and luxury-standard punch list completion across a full residential gut renovation.",
    location: "Manhattan, New York City",
    featured: true,
  },
  {
    image: "/images/bathroom-new-5.jpeg",
    title: "Spa-Inspired Bathroom Renovation",
    category: "Renovation",
    description:
      "Full bathroom gut renovation with large-format stone tile, frameless glass enclosure, freestanding tub, and radiant floor heating.",
    location: "Upper West Side, Manhattan",
  },
  {
    image: "/images/kitchen-1.jpeg",
    title: "Custom Kitchen Remodel",
    category: "Renovation",
    description:
      "Complete kitchen transformation — bespoke cabinetry, marble countertops, premium appliances, and designer lighting throughout.",
    location: "Brooklyn, New York",
  },
  {
    image: "/images/epoxy-2.jpeg",
    title: "Metallic Epoxy Resin Floor",
    category: "Surfaces & Finishes",
    description:
      "High-gloss metallic epoxy system installed in a commercial showroom — seamless, durable, and built to handle heavy daily traffic.",
    location: "Long Island City, Queens",
  },
  {
    image: "/images/plaster-0.jpeg",
    title: "Venetian Plaster & Stucco",
    category: "Surfaces & Finishes",
    description:
      "Interior Venetian plaster and exterior EIFS stucco system delivering a flawless, high-end finish with lasting moisture resistance.",
    location: "Westchester, New York",
  },
  {
    image: "/images/flooring-1.jpeg",
    title: "Wide-Plank Hardwood Flooring",
    category: "Surfaces & Finishes",
    description:
      "Installation and finishing of wide-plank engineered hardwood across a full-floor residential renovation, including stair treads.",
    location: "Park Slope, Brooklyn",
  },
  {
    image: "/images/project-corporate-hq.jpeg",
    title: "Corporate Headquarters Build-Out",
    category: "Construction",
    description:
      "Full commercial build-out of a modern corporate headquarters — structural framing, MEP coordination, and premium interior finishes.",
    location: "Westchester, New York",
  },
  {
    image: "/images/project-ground-up.jpeg",
    title: "Ground-Up Commercial Build",
    category: "Construction",
    description:
      "Complex ground-up construction in a dense urban environment — structural steel, curtain wall systems, and precision trade coordination.",
    location: "Lower Manhattan, NYC",
  },
  {
    image: "/images/landscaping-5.jpeg",
    title: "Outdoor Patio & Fire Pit",
    category: "Outdoor",
    description:
      "Custom hardscape patio with a built-in stone fire pit, premium pavers, and full outdoor seating area for a residential client.",
    location: "Staten Island, New York",
  },
  {
    image: "/images/landscaping-1.jpeg",
    title: "Outdoor Fireplace & Patio",
    category: "Outdoor",
    description:
      "Masonry outdoor fireplace with flanking planter walls, flagstone patio, and integrated landscaping for a luxury backyard retreat.",
    location: "Westchester, New York",
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

  const showFeatured =
    activeCategory === ALL || activeCategory === "Renovation";

  return (
    <section id="projects" className="py-24 md:py-32 bg-white relative">
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
            <div className="h-px w-12 bg-neutral-900" />
            <span className="text-neutral-900 font-semibold uppercase tracking-wider text-sm">Our Portfolio</span>
            <div className="h-px w-12 bg-neutral-900" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Built to Impress. Built to Last.
          </h2>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
            A selection of our work across renovations, custom finishes, construction, and outdoor spaces in New York.
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
                  ? "bg-neutral-900 border-neutral-900 text-white"
                  : "bg-white border-neutral-300 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900"
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
              className="group relative overflow-hidden rounded-sm bg-neutral-100 border border-neutral-900/40 hover:border-neutral-900 hover:shadow-xl transition-all duration-300 cursor-pointer mb-6"
            >
              <div className="aspect-[16/7] overflow-hidden relative">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm ${categoryColors[featured.category]}`}>
                    {featured.category}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm bg-white/20 text-white border border-white/30">
                    Featured Project
                  </span>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-neutral-200 transition-colors">
                    {featured.title}
                  </h3>
                  <p className="text-base text-white/80 leading-relaxed max-w-2xl hidden md:block">
                    {featured.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-white/60 uppercase tracking-wider mt-2">
                    <span className="w-4 h-px bg-white/70" />
                    {featured.location}
                  </div>
                </div>
              </div>
              <div className="p-6 md:hidden">
                <p className="text-sm text-neutral-600 leading-relaxed">{featured.description}</p>
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
                className="group relative overflow-hidden rounded-sm bg-white border border-neutral-200 hover:border-neutral-900/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm ${categoryColors[project.category] ?? "bg-white/20 text-white"}`}>
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-6">
                    <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-neutral-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-neutral-400 uppercase tracking-wider">
                    <span className="w-4 h-px bg-neutral-900" />
                    {project.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-neutral-400 text-lg">
            No projects in this category yet.
          </div>
        )}
      </div>
    </section>
  );
}
