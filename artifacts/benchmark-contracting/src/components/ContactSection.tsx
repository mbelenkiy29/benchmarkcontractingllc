import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const projectTypes = [
  "Residential Renovation",
  "Custom Home Build",
  "Commercial Build-Out",
  "Office Renovation",
  "Restaurant / Hospitality",
  "Luxury Retail / Flagship",
  "Pre-Construction Planning",
  "Other",
];

export default function ContactSection() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill in required fields.", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      toast({
        title: "Request submitted!",
        description: "We'll be in touch within one business day.",
      });
      setForm({ name: "", email: "", phone: "", projectType: "", message: "" });
    } catch {
      toast({
        title: "Something went wrong.",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-white border border-gray-300 text-gray-900 placeholder-gray-400 rounded-sm px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200";

  return (
    <section id="contact" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,102,0,0.04)_0%,_transparent_60%)]" />

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
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Get in Touch</span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Tell us about your project. We'll respond within one business day with a plan.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Talk</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-semibold">Phone</div>
                    <a
                      href="tel:3473235535"
                      data-testid="contact-phone"
                      className="text-gray-900 hover:text-primary transition-colors font-medium text-lg"
                    >
                      (347) 323-5535
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-semibold">Email</div>
                    <a
                      href="mailto:info@benchmarkcontractingllc.com"
                      data-testid="contact-email"
                      className="text-gray-900 hover:text-primary transition-colors font-medium"
                    >
                      info@benchmarkcontractingllc.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-semibold">Service Area</div>
                    <p className="text-gray-900 font-medium">New York City & Surrounding Areas</p>
                    <p className="text-gray-500 text-sm mt-1">Manhattan · Brooklyn · Queens · The Bronx · Staten Island · Westchester</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-sm p-6 bg-white shadow-sm">
              <div className="text-3xl font-bold text-primary mb-1">Free Estimates</div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Every project starts with a no-obligation consultation and detailed cost estimate. No guesswork, no surprises.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              data-testid="contact-form"
              className="border border-gray-200 rounded-sm p-8 bg-white shadow-sm space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className={inputClass}
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClass}
                    data-testid="input-email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(212) 555-0100"
                    className={inputClass}
                    data-testid="input-phone"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className={inputClass + " cursor-pointer"}
                    data-testid="select-project-type"
                  >
                    <option value="" className="bg-white">Select a type...</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold">
                  Project Description <span className="text-primary">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project — scope, timeline, location, and any specific requirements..."
                  rows={5}
                  className={inputClass + " resize-none"}
                  data-testid="input-message"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                data-testid="button-submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 text-lg rounded-sm flex items-center justify-center gap-3"
              >
                {loading ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Request a Free Estimate
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-gray-400">
                We respond within 1 business day. No commitment required.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
