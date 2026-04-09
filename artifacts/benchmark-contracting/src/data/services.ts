export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  highlights: { label: string; value: string }[];
  heroImage?: string;
}

export const servicesData: ServiceData[] = [
  {
    slug: "kitchens",
    title: "Kitchen Renovations",
    tagline: "The Heart of the Home, Reimagined.",
    description:
      "From full gut renovations to custom kitchen builds, Benchmark Contracting delivers kitchens that combine function with luxury. We manage every detail — cabinetry, countertops, appliances, lighting, and finishes — so the result is seamless.",
    features: [
      "Full kitchen demolition and rebuild",
      "Custom cabinetry design and installation",
      "Marble, quartz & granite countertops",
      "Premium appliance installation",
      "Under-cabinet & pendant lighting",
      "Tile backsplash and flooring",
      "Plumbing rough-in and fixture installation",
      "Open-concept layout conversions",
    ],
    highlights: [
      { label: "Experience", value: "40+ Years" },
      { label: "Service Area", value: "All NYC Boroughs" },
      { label: "Estimate", value: "Free Consultation" },
    ],
    heroImage: "/images/project-kitchen-residential.jpeg",
  },
  {
    slug: "bathrooms",
    title: "Bathroom Renovations",
    tagline: "Luxury Finishes. Flawless Execution.",
    description:
      "Whether it's a spa-inspired master bath or a clean, modern guest bathroom, Benchmark brings precision craftsmanship to every tile, fixture, and fitting. We handle permits, plumbing, tile work, and all finishes end-to-end.",
    features: [
      "Full bathroom gut renovation",
      "Custom tile work and stone finishes",
      "Walk-in shower and freestanding tub installation",
      "Vanity, fixture & hardware installation",
      "Radiant floor heating",
      "Frameless glass enclosures",
      "Plumbing and waterproofing",
      "Exhaust and lighting systems",
    ],
    highlights: [
      { label: "Experience", value: "40+ Years" },
      { label: "Service Area", value: "All NYC Boroughs" },
      { label: "Estimate", value: "Free Consultation" },
    ],
    heroImage: "/images/project-apt.png",
  },
  {
    slug: "flooring",
    title: "Flooring",
    tagline: "Every Step, a Statement.",
    description:
      "From wide-plank hardwood to large-format porcelain tile, Benchmark installs and refinishes flooring to exacting standards. We work with all materials across residential and commercial spaces, ensuring a perfect, lasting result.",
    features: [
      "Hardwood installation and refinishing",
      "Engineered wood and LVP flooring",
      "Marble, porcelain & ceramic tile",
      "Large-format tile installation",
      "Subfloor leveling and preparation",
      "Radiant heat underlayment",
      "Commercial-grade vinyl and epoxy",
      "Stair tread and riser installation",
    ],
    highlights: [
      { label: "Experience", value: "40+ Years" },
      { label: "Service Area", value: "All NYC Boroughs" },
      { label: "Estimate", value: "Free Consultation" },
    ],
  },
  {
    slug: "stretch-ceilings",
    title: "Stretch Ceilings",
    tagline: "Ceilings That Make a Statement.",
    description:
      "Stretch ceiling systems offer a sleek, modern finish that hides imperfections, integrates lighting, and transforms any space. Benchmark installs and finishes stretch ceiling systems for residential, commercial, and hospitality projects across New York.",
    features: [
      "PVC and fabric stretch ceiling systems",
      "Custom shapes and curves",
      "Integrated LED and backlit panels",
      "Acoustic and moisture-resistant options",
      "Concealed structural defect coverage",
      "Rapid installation with minimal disruption",
      "Gloss, matte, satin, and printed finishes",
      "Commercial and residential applications",
    ],
    highlights: [
      { label: "Experience", value: "40+ Years" },
      { label: "Service Area", value: "All NYC Boroughs" },
      { label: "Estimate", value: "Free Consultation" },
    ],
    heroImage: "/images/project-retail.png",
  },
  {
    slug: "acoustical-systems",
    title: "Acoustical Systems",
    tagline: "Precision Sound Control for Every Space.",
    description:
      "From office noise reduction to studio-grade acoustic treatment, Benchmark designs and installs acoustical systems that improve comfort, privacy, and performance. We work with architects and designers to specify and deliver the right solution.",
    features: [
      "Acoustical ceiling tile installation",
      "Suspended grid systems",
      "Sound-dampening wall panels",
      "Studio and recording room acoustic treatment",
      "Office and conference room noise control",
      "STC-rated partition systems",
      "Fiberglass and mineral fiber panels",
      "Custom fabric-wrapped panels",
    ],
    highlights: [
      { label: "Experience", value: "40+ Years" },
      { label: "Service Area", value: "All NYC Boroughs" },
      { label: "Estimate", value: "Free Consultation" },
    ],
  },
  {
    slug: "plaster-stucco",
    title: "Plaster & Stucco",
    tagline: "Old World Craft. Modern Precision.",
    description:
      "Benchmark's plaster and stucco work honors traditional techniques while meeting modern standards for durability and finish quality. From interior skim coat to exterior EIFS stucco systems, we handle every application with master-level skill.",
    features: [
      "Interior plaster skim coat and repair",
      "Three-coat plaster systems",
      "Venetian plaster and decorative finishes",
      "Exterior stucco application",
      "EIFS (Exterior Insulation Finish System)",
      "Parging and waterproof coatings",
      "Historic restoration and matching",
      "Crack repair and patching",
    ],
    highlights: [
      { label: "Experience", value: "40+ Years" },
      { label: "Service Area", value: "All NYC Boroughs" },
      { label: "Estimate", value: "Free Consultation" },
    ],
  },
  {
    slug: "residential-construction",
    title: "Residential Construction",
    tagline: "Your Home. Built Without Compromise.",
    description:
      "Benchmark Contracting builds and renovates luxury residences across New York City and Westchester. From brownstone gut renovations to ground-up custom homes, we deliver turnkey results with meticulous attention to every detail.",
    features: [
      "Full gut renovations and remodels",
      "Ground-up custom home construction",
      "Brownstone and townhouse renovations",
      "Basement finishing and conversions",
      "Multi-family residential construction",
      "Interior and exterior upgrades",
      "Smart home integration",
      "Luxury finish work and millwork",
    ],
    highlights: [
      { label: "Experience", value: "40+ Years" },
      { label: "Service Area", value: "NYC & Westchester" },
      { label: "Estimate", value: "Free Consultation" },
    ],
    heroImage: "/images/project-residential-ext.png",
  },
  {
    slug: "commercial-construction",
    title: "Commercial Construction",
    tagline: "Built for Business. Built to Last.",
    description:
      "From corporate headquarters to luxury retail flagships, Benchmark Contracting executes commercial construction projects with speed, precision, and zero surprises. We self-perform where it counts and manage every trade to keep your project on schedule.",
    features: [
      "Office build-outs and tenant improvements",
      "Luxury retail and flagship store construction",
      "Restaurant and hospitality builds",
      "Ground-up commercial construction",
      "Corporate interior renovations",
      "Medical and professional office fit-outs",
      "Multi-tenant commercial buildings",
      "Fast-track and deadline-driven delivery",
    ],
    highlights: [
      { label: "Experience", value: "40+ Years" },
      { label: "Service Area", value: "All NYC Boroughs" },
      { label: "Estimate", value: "Free Consultation" },
    ],
    heroImage: "/images/project-corporate-hq.jpeg",
  },
  {
    slug: "structural-exterior",
    title: "Structural & Exterior Work",
    tagline: "Strong Foundations. Lasting Structures.",
    description:
      "The bones of a great building demand expert hands. Benchmark handles all structural and exterior work — from foundation to facade — with licensed engineers, SST-compliant crews, and a zero-compromise approach to safety and code compliance.",
    features: [
      "Framing and structural modifications",
      "Foundation work and underpinning",
      "Demolition and site preparation",
      "Concrete and masonry construction",
      "Facade restoration and repair",
      "Roofing and waterproofing systems",
      "Stucco, siding and brickwork",
      "Decks, patios and outdoor builds",
    ],
    highlights: [
      { label: "Experience", value: "40+ Years" },
      { label: "Service Area", value: "All NYC Boroughs" },
      { label: "Estimate", value: "Free Consultation" },
    ],
    heroImage: "/images/project-ground-up.jpeg",
  },
  {
    slug: "mechanical-electrical-plumbing",
    title: "Mechanical, Electrical & Plumbing",
    tagline: "Systems That Work. Code That's Met.",
    description:
      "Benchmark coordinates licensed MEP trades on every project to ensure your mechanical, electrical, and plumbing systems are properly designed, installed, and inspected. No shortcuts, no callbacks.",
    features: [
      "Electrical rough-in and panel upgrades",
      "Lighting design and installation",
      "Plumbing rough-in and fixture installation",
      "HVAC installation and ductwork",
      "Fire suppression and sprinkler systems",
      "Low-voltage and data cabling",
      "Energy-efficient system upgrades",
      "NYC DOB inspection coordination",
    ],
    highlights: [
      { label: "Experience", value: "40+ Years" },
      { label: "Service Area", value: "All NYC Boroughs" },
      { label: "Estimate", value: "Free Consultation" },
    ],
    heroImage: "/images/project-restaurant-kitchen.jpeg",
  },
  {
    slug: "interior-finishes",
    title: "Interior Finishes",
    tagline: "Where Craftsmanship Meets Luxury.",
    description:
      "The final stage of any build is where Benchmark truly shines. Our finish crews deliver world-class millwork, painting, and detail work that sets luxury projects apart — the kind of quality that luxury brands and high-end developers demand.",
    features: [
      "Custom millwork and cabinetry",
      "Trim, baseboard and crown molding",
      "Drywall taping and skim coating",
      "High-end painting and wall finishes",
      "Door and hardware installation",
      "Built-in shelving and closets",
      "Decorative ceiling work",
      "Luxury-standard punch list completion",
    ],
    highlights: [
      { label: "Experience", value: "40+ Years" },
      { label: "Service Area", value: "All NYC Boroughs" },
      { label: "Estimate", value: "Free Consultation" },
    ],
    heroImage: "/images/project-restaurant.png",
  },
  {
    slug: "specialty-services",
    title: "Specialty Services",
    tagline: "When the Project Demands More.",
    description:
      "Some projects don't fit a standard mold — and that's where Benchmark excels. We specialize in luxury flagship builds, value engineering, fast-track delivery, and turnkey solutions for clients who can't afford anything less than perfect.",
    features: [
      "Luxury retail flagship builds (LV, Dior-level execution)",
      "Fast-track and deadline-critical delivery",
      "Value engineering and cost optimization",
      "Turnkey design-build solutions",
      "High-end residential finishes",
      "Historic restoration and preservation",
      "Custom architectural feature fabrication",
      "Owner's representative services",
    ],
    highlights: [
      { label: "Experience", value: "40+ Years" },
      { label: "Service Area", value: "All NYC Boroughs" },
      { label: "Estimate", value: "Free Consultation" },
    ],
    heroImage: "/images/project-louis-vuitton.png",
  },
  {
    slug: "building-performance",
    title: "Building Performance",
    tagline: "Smarter Buildings. Lower Costs.",
    description:
      "Benchmark helps property owners and developers improve the energy performance and efficiency of their buildings. From insulation upgrades to building envelope improvements, we reduce operating costs while meeting NYC's increasingly strict energy compliance requirements.",
    features: [
      "Building envelope air sealing and insulation",
      "Energy-efficient window and door installation",
      "High-efficiency HVAC upgrades",
      "NYC Local Law 97 compliance consulting",
      "Thermal bridging analysis and remediation",
      "Green roof and cool roof systems",
      "EV charging infrastructure",
      "LED lighting retrofits",
    ],
    highlights: [
      { label: "Experience", value: "40+ Years" },
      { label: "Service Area", value: "All NYC Boroughs" },
      { label: "Estimate", value: "Free Consultation" },
    ],
    heroImage: "/images/project-tech-campus.jpeg",
  },
  {
    slug: "compliance-safety",
    title: "Compliance & Safety",
    tagline: "Built Right. Built Safe.",
    description:
      "Navigating New York City's complex construction regulations requires expertise and experience. Benchmark ensures every project is fully permitted, inspected, and compliant with NYC DOB, OSHA, and SST requirements — protecting your investment from start to finish.",
    features: [
      "NYC DOB permit acquisition and management",
      "Site Safety Training (SST) certified crews",
      "OSHA 10 and 30 compliant supervision",
      "Certificate of Occupancy coordination",
      "Violation removal and correction",
      "Environmental compliance (asbestos, lead)",
      "Safety plan development",
      "Third-party inspection coordination",
    ],
    highlights: [
      { label: "Experience", value: "40+ Years" },
      { label: "Service Area", value: "All NYC Boroughs" },
      { label: "Estimate", value: "Free Consultation" },
    ],
    heroImage: "/images/project-landmark.jpeg",
  },
];

export const servicesBySlug = Object.fromEntries(
  servicesData.map((s) => [s.slug, s])
);

export const navServiceItems = servicesData.map((s) => ({
  label: s.title,
  href: `/services/${s.slug}`,
}));
