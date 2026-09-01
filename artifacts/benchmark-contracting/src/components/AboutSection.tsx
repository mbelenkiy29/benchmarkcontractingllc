import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "100%", label: "Licensed & Insured" },
    { value: "SST", label: "Compliant" },
    { value: "1", label: "Point of Contact" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-neutral-900" />
              <span className="text-neutral-900 font-semibold uppercase tracking-wider">About Benchmark</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8 leading-tight">
              Precision. Trust. <br />
              <span className="text-neutral-400">Uncompromising Craftsmanship.</span>
            </h2>

            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed mb-10">
              <p>
                Benchmark Contracting Group is a high-end, licensed, and insured general contractor based in New York. We specialize in luxury retail, high-end residential, and complex commercial projects.
              </p>
              <p>
                We don't just build spaces; we deliver peace of mind. Developers, architects, and luxury brands trust us because we provide turnkey solutions with a single point of contact. From pre-construction to the final punch list, our commitment to quality is unwavering.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "Luxury Retail (Louis Vuitton, Dior level)",
                "High-End Residential",
                "Complex Commercial Projects",
                "Turnkey Solutions"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-neutral-900 shrink-0" />
                  <span className="text-neutral-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/5] rounded-sm overflow-hidden relative border border-neutral-200 bg-neutral-100">
              <div className="absolute inset-0 bg-black/10 z-10" />
              <img
                src="/images/project-retail.png"
                alt="Craftsmanship and precision"
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
              />

              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-neutral-200 p-6 z-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  {stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-3xl font-bold text-neutral-900 mb-1">{stat.value}</div>
                      <div className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-neutral-900 hidden md:block" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-neutral-900 hidden md:block" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
