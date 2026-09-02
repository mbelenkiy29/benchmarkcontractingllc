import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10" />
        <img
          src="/images/hero.jpg"
          alt="Luxury construction site at twilight"
          className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 border border-white/30 bg-black/30 rounded-sm">
              <span className="text-white font-semibold tracking-wider text-sm uppercase">Premium General Contracting</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[1.1]">
              Building Excellence <br />
              <span className="text-neutral-200">
                From the Ground Up
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed">
              New York's trusted partner for residential, commercial, and luxury construction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects">
                <Button
                  data-testid="hero-view-work"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 text-lg rounded-sm"
                >
                  View Our Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  data-testid="hero-request-quote"
                  variant="outline"
                  size="lg"
                  className="border-white/50 text-white hover:bg-white hover:text-neutral-950 font-bold h-14 px-8 text-lg rounded-sm bg-transparent"
                >
                  Request a Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
