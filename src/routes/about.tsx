import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Shield, Truck, Users, Eye, HeartHandshake, Award, CheckCircle, Quote } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — DG Global Exim" },
      { name: "description", content: "Learn about DG Global Exim, a trusted exporter and supplier of premium-quality agricultural and food products from India." },
      { property: "og:title", content: "About Us — DG Global Exim" },
      { property: "og:description", content: "Learn about DG Global Exim, a trusted exporter and supplier of premium-quality agricultural and food products from India." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-warm">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
            About DG Global Exim
          </h1>
        </div>
      </section>

      {/* About Intro */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Founded in 2025, DG Global Exim is a Maharashtra-based export company dedicated to delivering premium-quality, natural, and authentic Indian agricultural products to customers across the globe.
            </p>
            <p>
              At DG Global Exim, we believe that India is blessed with rich agricultural resources and traditional food products that deserve recognition in international markets. Our mission is to connect global consumers with the purity, quality, and nutritional value of products sourced directly from Indian farms.
            </p>
            <p>
              We specialize in the export of Jaggery Cubes, Jaggery Powder, Jaggery Dhep (Block Jaggery), Turmeric Powder, Moringa Powder, Onion Powder, and other agricultural products that meet international quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Company Tagline */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 text-center shadow-sm sm:p-10">
          <Quote className="mx-auto h-8 w-8 text-sage" />
          <p className="mt-4 font-display text-xl font-semibold italic text-foreground sm:text-2xl">
            From the Farms of India to the World – Delivering Purity, Quality, and Trust.
          </p>
        </div>
      </section>

      {/* Our Vision */}
      <section className="bg-warm">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3">
              <Eye className="h-7 w-7 text-sage" />
              <h2 className="font-display text-2xl font-bold text-foreground">
                Our Vision
              </h2>
            </div>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Our dream is to take the natural and pure food products of Maharashtra and India to every corner of the world while proudly representing India's agricultural excellence on the global stage.
              </p>
              <p>
                We are committed to building a strong international presence for Indian products and contributing to the growth of India's export sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment to Farmers */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3">
            <HeartHandshake className="h-7 w-7 text-sage" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Our Commitment to Farmers
            </h2>
          </div>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Farmers are the backbone of our nation. At DG Global Exim, we work towards creating better market opportunities for farmers by connecting their products with domestic and international buyers. Our goal is to help farmers receive fair value for their produce while promoting sustainable and long-term agricultural growth.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose DG Global Exim */}
      <section className="bg-warm">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3">
              <Award className="h-7 w-7 text-sage" />
              <h2 className="font-display text-2xl font-bold text-foreground">
                Why Choose DG Global Exim?
              </h2>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-sage" />
                  <span className="text-base text-muted-foreground">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base font-medium text-foreground">
            DG Global Exim is committed to building trusted partnerships worldwide by delivering quality, integrity, and excellence in every shipment.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-warm">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Our Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
              >
                <value.icon className="mx-auto h-10 w-10 text-sage" />
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const reasons = [
  "Premium Quality Agricultural Products",
  "Natural and Hygienically Processed Products",
  "Reliable Global Supply Chain",
  "Competitive Pricing",
  "Timely Deliveries",
  "Customer-Focused Service",
  "Strong Commitment to Farmers and Sustainable Growth",
];

const values = [
  {
    title: "Quality First",
    description: "Every product undergoes strict quality control to meet international standards.",
    icon: Shield,
  },
  {
    title: "Natural & Pure",
    description: "Chemical-free processing that preserves the natural goodness of our products.",
    icon: Leaf,
  },
  {
    title: "Reliable Delivery",
    description: "Efficient logistics ensuring timely and safe delivery to every corner of the globe.",
    icon: Truck,
  },
  {
    title: "Partnership",
    description: "Building lasting relationships with importers, distributors, and wholesalers worldwide.",
    icon: Users,
  },
];
