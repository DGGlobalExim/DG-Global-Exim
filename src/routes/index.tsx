import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, Leaf, Globe, Shield, Truck } from "lucide-react";

import heroFarm from "../assets/hero-farm.jpg";
import logoAsset from "../assets/logo.png.asset.json";
import jaggeryCubesAsset from "../assets/jaggery-cubes-real.jpg.asset.json";
import jaggeryPowderAsset from "../assets/jaggery-powder-real.jpg.asset.json";
import turmericPowderAsset from "../assets/turmeric-powder-real.jpg.asset.json";


const jaggeryCubes = jaggeryCubesAsset.url;
const jaggeryPowder = jaggeryPowderAsset.url;
const turmericPowder = turmericPowderAsset.url;
const logo = logoAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DG Global Exim — Premium Agricultural Exports from India" },
      { name: "description", content: "DG Global Exim is a trusted exporter and supplier of premium-quality agricultural and food products from India. Jaggery, turmeric, moringa, onion powder and more." },
      { property: "og:title", content: "DG Global Exim — Premium Agricultural Exports from India" },
      { property: "og:description", content: "Trusted exporter and supplier of premium-quality agricultural and food products from India." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroFarm}
            alt="Indian agricultural landscape"
            className="h-full w-full object-cover"
            width={1280}
            height={640}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <img
            src={logo}
            alt="DG Global Exim Logo"
            className="mb-6 h-28 w-auto rounded-2xl bg-white/90 p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:scale-110 sm:h-36"
          />
          <div className="max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sage/15 px-4 py-1.5 text-sm font-medium text-sage">
              <Leaf className="h-4 w-4" />
              <span>Pure & Natural from India</span>
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Premium Agricultural Products,{" "}
              <span className="text-terracotta">Exported Worldwide</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              DG Global Exim delivers natural, healthy, and sustainably sourced
              agricultural products from India to customers across the globe.
              Quality you can trust.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-lg bg-sage px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-sage/25 transition-all hover:bg-sage-dark hover:shadow-sage/40"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-accent"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              About DG Global Exim
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              DG Global Exim is a trusted exporter and supplier of premium-quality
              agricultural and food products from India. We are committed to delivering
              natural, healthy, and sustainably sourced products to customers worldwide.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our focus on quality, hygiene, and customer satisfaction has helped us
              build strong relationships across global markets. We carefully select our
              products from reliable farms and processing units to ensure superior
              quality, freshness, and nutritional value.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sage transition-colors hover:text-sage-dark"
            >
              Learn more about us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-card p-6 shadow-sm">
              <Globe className="h-8 w-8 text-sage" />
              <p className="mt-3 font-display text-2xl font-bold text-foreground">Global</p>
              <p className="text-sm text-muted-foreground">Export reach</p>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-sm">
              <Shield className="h-8 w-8 text-terracotta" />
              <p className="mt-3 font-display text-2xl font-bold text-foreground">Premium</p>
              <p className="text-sm text-muted-foreground">Quality products</p>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-sm">
              <Leaf className="h-8 w-8 text-sage" />
              <p className="mt-3 font-display text-2xl font-bold text-foreground">Natural</p>
              <p className="text-sm text-muted-foreground">Chemical-free</p>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-sm">
              <Truck className="h-8 w-8 text-terracotta" />
              <p className="mt-3 font-display text-2xl font-bold text-foreground">Timely</p>
              <p className="text-sm text-muted-foreground">Global deliveries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Our Vision
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            To make Indian natural food products globally recognized while empowering farmers with better market opportunities and sustainable growth.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-warm">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Our Products
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
              Carefully sourced and processed to preserve their natural goodness.
              Explore our range of premium agricultural exports.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ProductCard
              image={jaggeryCubes}
              title="Jaggery Cubes"
              description="Pure sugarcane jaggery without harmful chemicals. Rich in natural minerals."
            />
            <ProductCard
              image={jaggeryPowder}
              title="Jaggery Powder"
              description="Premium-quality powder with natural sweet taste and rich aroma."
            />
            <ProductCard
              image={turmericPowder}
              title="Turmeric Powder"
              description="High-quality turmeric with vibrant color and high curcumin content."
            />
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-accent"
            >
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            We go the extra mile to ensure quality, reliability, and customer satisfaction.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md"
            >
              <CheckCircle className="mx-auto h-8 w-8 text-sage" />
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-sage text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Ready to Partner With Us?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base opacity-90">
            We welcome inquiries from importers, distributors, wholesalers, and business
            partners worldwide. Contact us today to discuss your requirements.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-lg transition-all hover:bg-cream"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function ProductCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          width={768}
          height={768}
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

const whyChooseUs = [
  { title: "Premium Quality Products" },
  { title: "Natural & Chemical-Free" },
  { title: "Competitive Pricing" },
  { title: "Timely Global Deliveries" },
  { title: "Strict Quality Control" },
  { title: "Customer-Centric Approach" },
  { title: "Reliable Export Services" },
  { title: "Sustainable Sourcing" },
];
