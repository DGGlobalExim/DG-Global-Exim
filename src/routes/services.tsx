import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  Globe2,
  Package,
  ShieldCheck,
  Truck,
  ClipboardList,
  Handshake,
  Leaf,
  Boxes,
  FileCheck2,
  Headphones,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — DG Global Exim" },
      {
        name: "description",
        content:
          "Export, sourcing, private labeling, custom packaging, and global logistics services for premium Indian agricultural products by DG Global Exim.",
      },
      { property: "og:title", content: "Our Services — DG Global Exim" },
      {
        property: "og:description",
        content:
          "End-to-end export services for jaggery, turmeric, moringa, and onion powders — sourcing, quality control, packaging, and worldwide shipping.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Globe2,
    title: "Global Export & Distribution",
    description:
      "We export premium Indian agricultural and food products to importers, distributors, wholesalers, and retail chains across the Middle East, Europe, North America, Africa, and Southeast Asia.",
    points: [
      "Door-to-door international shipping",
      "FOB, CIF, CFR & EXW terms",
      "Sea and air freight coordination",
      "End-to-end shipment tracking",
    ],
  },
  {
    icon: Package,
    title: "Bulk Supply & Sourcing",
    description:
      "Direct sourcing from trusted Indian farmers and certified processing units. We ensure consistent supply of jaggery, turmeric, moringa, and onion powder in bulk quantities at competitive prices.",
    points: [
      "Farm-direct procurement",
      "Year-round bulk availability",
      "Competitive wholesale pricing",
      "Sample dispatch on request",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Quality Control & Assurance",
    description:
      "Every batch undergoes strict quality testing — purity, moisture, color, aroma, and nutritional value — before it reaches our warehouse or the customer's port.",
    points: [
      "Lab-tested raw materials",
      "Hygienic processing standards",
      "Pre-shipment inspection",
      "Certificate of Analysis (COA)",
    ],
  },
  {
    icon: Boxes,
    title: "Custom Packaging & Private Labeling",
    description:
      "Flexible packaging options tailored to your brand and market. From retail pouches to industrial bulk bags, we deliver products ready for your shelves.",
    points: [
      "Retail packs (250g, 500g, 1kg)",
      "Bulk bags (5kg, 25kg, 50kg)",
      "Private label & OEM branding",
      "Custom artwork & barcodes",
    ],
  },
  {
    icon: Truck,
    title: "Logistics & Documentation",
    description:
      "We handle the complete export documentation and logistics — so you receive your order without paperwork hassles or customs delays.",
    points: [
      "Commercial invoice & packing list",
      "Phytosanitary & FSSAI certificates",
      "Bill of lading & origin certificates",
      "Customs clearance support",
    ],
  },
  {
    icon: Handshake,
    title: "Farmer Partnerships",
    description:
      "We work directly with Maharashtra's farming communities — offering fair prices, training, and stable buying contracts that empower rural livelihoods.",
    points: [
      "Fair-trade procurement",
      "Long-term buyer contracts",
      "Sustainable farming guidance",
      "Community-first sourcing",
    ],
  },
];

const process = [
  {
    icon: ClipboardList,
    title: "Inquiry & Quotation",
    description:
      "Share your product requirements, quantity, and destination port. We respond with a detailed quotation within 24 hours.",
  },
  {
    icon: Leaf,
    title: "Sourcing & Production",
    description:
      "Once confirmed, we source directly from farms and processing units, ensuring freshness and traceability of every batch.",
  },
  {
    icon: FileCheck2,
    title: "Quality Check & Packaging",
    description:
      "Each consignment is lab-tested and packed as per your specifications — retail, bulk, or private label.",
  },
  {
    icon: Truck,
    title: "Shipping & Delivery",
    description:
      "We arrange documentation, customs clearance, and shipping — and keep you updated until the cargo reaches your port.",
  },
];

function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-warm">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            End-to-end export solutions for premium Indian agricultural products
            — from farm sourcing to your doorstep, anywhere in the world.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-warm p-2">
                  <s.icon className="h-6 w-6 text-sage" />
                </div>
                <h2 className="font-display text-xl font-semibold text-foreground">
                  {s.title}
                </h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-warm">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              How We Work
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              A simple, transparent process from your first inquiry to final
              delivery.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, idx) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-terracotta font-display text-sm font-bold text-white">
                  {idx + 1}
                </div>
                <step.icon className="h-7 w-7 text-sage" />
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 text-center shadow-sm sm:p-12">
          <Headphones className="mx-auto h-10 w-10 text-sage" />
          <h2 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
            Dedicated Customer Support
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Our export team is available across time zones to assist with
            inquiries, samples, documentation, and shipment tracking. Whether
            you need a single container or a long-term supply contract — we
            tailor our service to your business.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-terracotta px-6 py-3 font-display text-sm font-semibold text-white shadow-sm transition-colors hover:bg-terracotta/90"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
