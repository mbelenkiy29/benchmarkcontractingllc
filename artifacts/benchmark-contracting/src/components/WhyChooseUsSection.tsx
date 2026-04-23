import { motion } from "framer-motion";
import { ShieldCheck, HardHat, Package, Gem, Clock, DollarSign } from "lucide-react";

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Fully licensed in New York with comprehensive insurance coverage on every project. Your investment is protected.",
  },
  {
    icon: HardHat,
    title: "SST Compliant",
    description: "All crews and supervisors hold current Site Safety Training certifications — NYC compliance is never an afterthought.",
  },
  {
    icon: Package,
    title: "Turnkey Solutions",
    description: "One company. One contract. One point of contact from pre-construction through final punch list.",
  },
  {
    icon: Gem,
    title: "Luxury-Level Quality",
    description: "We've built flagship stores for luxury brands and high-end residences where every detail is held to the highest standard.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Deadlines aren't suggestions. Our project management system ensures your build finishes on time, every time.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden costs. Detailed, itemized budgets upfront — and proactive communication the moment anything changes.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,102,0,0.04)_0%,_transparent_60%)]" />

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
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">The Benchmark Difference</span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why the Best Choose Benchmark
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Architects, developers, and luxury brands trust us to deliver when it counts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {differentiators.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                data-testid={`differentiator-${i}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-8 border border-gray-200 rounded-sm bg-white hover:border-primary/40 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-6 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
