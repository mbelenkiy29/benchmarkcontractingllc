import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
    image: "/images/project-retail.png",
    title: "Luxury Flagship Retail",
    category: "Luxury Retail",
    description: "High-end flagship store build-out with bespoke millwork and precision finishes.",
    location: "SoHo, New York",
  },
  {
    image: "/images/project-apt.png",
    title: "Penthouse Renovation",
    category: "Residential",
    description: "Full gut renovation of a luxury Manhattan penthouse with custom everything.",
    location: "Upper West Side, NYC",
  },
  {
    image: "/images/project-office.png",
    title: "Corporate HQ Build-Out",
    category: "Commercial",
    description: "Complete interior build-out for a financial services firm's New York headquarters.",
    location: "Midtown Manhattan",
  },
  {
    image: "/images/project-residential-ext.png",
    title: "Custom Luxury Residence",
    category: "Residential",
    description: "Ground-up custom home with high-end finishes and smart home integration.",
    location: "Westchester, NY",
  },
  {
    image: "/images/project-restaurant.png",
    title: "Upscale Restaurant",
    category: "Commercial",
    description: "Hospitality construction from raw shell to fully operational fine dining.",
    location: "Tribeca, New York",
  },
  {
    image: "/images/project-groundup.png",
    title: "Commercial Ground-Up",
    category: "Commercial",
    description: "Managed from foundation to facade on a mid-rise mixed-use development.",
    location: "Brooklyn, New York",
  },
];

const categoryColors: Record<string, string> = {
  "Luxury Retail": "bg-primary text-white",
  "Residential": "bg-white/10 text-white",
  "Commercial": "bg-white/10 text-white",
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-black relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
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
            A selection of our work across residential, commercial, and luxury retail sectors in New York.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              data-testid={`project-card-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-sm bg-zinc-900 border transition-all duration-300 cursor-pointer ${
                (project as any).featured
                  ? "md:col-span-2 lg:col-span-3 border-primary/50 hover:border-primary"
                  : "border-white/10 hover:border-primary/40"
              }`}
            >
              <div className={`overflow-hidden relative ${(project as any).featured ? "aspect-[16/7]" : "aspect-[4/3]"}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm ${categoryColors[project.category]}`}>
                    {project.category}
                  </span>
                  {(project as any).featured && (
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm bg-white/10 text-white/80 border border-white/20">
                      Featured Project
                    </span>
                  )}
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5 text-primary" />
                </div>
              </div>

              <div className={`p-6 ${(project as any).featured ? "md:p-8" : ""}`}>
                <h3 className={`font-bold text-white mb-2 group-hover:text-primary transition-colors ${(project as any).featured ? "text-2xl md:text-3xl" : "text-lg"}`}>
                  {project.title}
                </h3>
                <p className={`text-white/60 mb-3 leading-relaxed ${(project as any).featured ? "text-base max-w-2xl" : "text-sm"}`}>
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-white/40 uppercase tracking-wider">
                  <span className="w-4 h-px bg-primary" />
                  {project.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
