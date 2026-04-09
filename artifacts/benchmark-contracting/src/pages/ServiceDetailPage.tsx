import { useParams } from "wouter";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Phone, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { servicesBySlug, servicesData } from "@/data/services";

export default function ServiceDetailPage() {
  const params = useParams<{ slug: string }>();
  const service = servicesBySlug[params.slug ?? ""];

  if (!service) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
            <Link href="/services">
              <Button className="bg-primary text-white">Back to Services</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Other services for the sidebar (exclude current)
  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gray-900 overflow-hidden">
        {service.heroImage && (
          <>
            <div className="absolute inset-0">
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-full object-cover opacity-60"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/30" />
          </>
        )}
        <div className="container mx-auto px-4 md:px-6 relative">
          <Link href="/services">
            <span className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors text-sm mb-6 cursor-pointer">
              <ArrowLeft className="w-4 h-4" /> All Services
            </span>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-block px-4 py-1.5 mb-4 border border-primary/30 bg-primary/10 rounded-sm">
              <span className="text-primary font-semibold tracking-wider text-sm uppercase">
                Benchmark Contracting
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-primary font-semibold mb-4">{service.tagline}</p>
            <p className="text-lg text-white/70 leading-relaxed mb-8">{service.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8 rounded-sm">
                  Get a Free Estimate
                </Button>
              </Link>
              <a href="tel:3473235535">
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 font-semibold h-12 px-8 rounded-sm bg-transparent flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" /> (347) 323-5535
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap divide-x divide-white/20">
            {service.highlights.map((h, i) => (
              <div key={i} className="flex-1 min-w-[120px] py-5 px-6 text-center">
                <div className="text-xl font-bold text-white">{h.value}</div>
                <div className="text-xs text-white/70 uppercase tracking-wider mt-0.5">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Features */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-10 bg-primary" />
                  <span className="text-primary font-semibold uppercase tracking-wider text-sm">What's Included</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Everything You Need, Nothing You Don't.
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-sm border border-gray-100"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm font-medium leading-snug">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Why Benchmark */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-14 p-8 bg-gray-900 rounded-sm"
              >
                <h3 className="text-2xl font-bold text-white mb-3">Why Benchmark?</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  Benchmark Contracting Group is a fully licensed and insured New York general contractor with 15+ years delivering high-end results. Every project has one dedicated point of contact, a transparent budget, and SST-compliant crews — from the first shovel to the final punch list.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-sm px-6">
                      Start Your Project
                    </Button>
                  </Link>
                  <Link href="/projects">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-sm px-6 bg-transparent">
                      View Our Work
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Sidebar — Other Services */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider text-sm">
                  Other Services
                </h3>
                <div className="flex flex-col gap-1">
                  {otherServices.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`}>
                      <span className="flex items-center justify-between px-4 py-3 rounded-sm border border-gray-100 hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all group cursor-pointer text-sm text-gray-600 font-medium">
                        {s.title}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                      </span>
                    </Link>
                  ))}
                </div>

                {/* CTA Box */}
                <div className="mt-6 p-6 bg-primary/5 border border-primary/20 rounded-sm">
                  <div className="text-2xl font-bold text-primary mb-1">Free Estimate</div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Ready to get started? Contact us for a no-obligation consultation and detailed project estimate.
                  </p>
                  <Link href="/contact">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-sm">
                      Get in Touch
                    </Button>
                  </Link>
                  <a href="tel:3473235535" className="block text-center mt-3 text-sm text-gray-500 hover:text-primary transition-colors">
                    (347) 323-5535
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
