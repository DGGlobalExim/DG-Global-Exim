import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — DG Global Exim" },
      {
        name: "description",
        content:
          "Insights, guides, and stories on Indian agricultural exports — jaggery, turmeric, moringa, onion powder, and the global spice trade.",
      },
      { property: "og:title", content: "Blog — DG Global Exim" },
      {
        property: "og:description",
        content:
          "Insights, guides, and stories on Indian agricultural exports from DG Global Exim.",
      },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    slug: "health-benefits-of-jaggery",
    title: "The Health Benefits of Natural Jaggery You Should Know",
    excerpt:
      "Jaggery is more than a sweetener — it's a traditional Indian superfood packed with iron, minerals, and natural energy. Here's why the world is rediscovering it.",
    category: "Product Insights",
    date: "May 28, 2026",
    readTime: "5 min read",
    content: [
      "For centuries, jaggery has been a staple in Indian households — used in cooking, sweets, and traditional medicine. Unlike refined sugar, jaggery retains the natural minerals of sugarcane: iron, magnesium, potassium, and antioxidants.",
      "Regular consumption supports digestion, helps cleanse the liver, boosts immunity, and provides a steady release of energy without the spike-and-crash of processed sugar. It's especially popular in winter for its warming properties.",
      "At DG Global Exim, we export jaggery in multiple forms — cubes, powder, and traditional dhep (block) — all produced from farm-fresh sugarcane in Maharashtra without chemicals or artificial additives.",
    ],
  },
  {
    slug: "turmeric-the-golden-spice",
    title: "Turmeric: The Golden Spice Driving Global Demand",
    excerpt:
      "From wellness shots to luxury skincare, turmeric is now a global ingredient. Learn what makes Indian turmeric the gold standard for export markets.",
    category: "Market Trends",
    date: "May 14, 2026",
    readTime: "6 min read",
    content: [
      "India produces nearly 80% of the world's turmeric, and the global appetite continues to grow — driven by demand in food, nutraceuticals, cosmetics, and pharma industries.",
      "What sets Indian turmeric apart is its high curcumin content — the active compound responsible for its anti-inflammatory and antioxidant properties. Premium varieties like Salem, Erode, and Nizamabad consistently test above 3% curcumin, making them favorites in export markets.",
      "Our turmeric powder is sourced directly from trusted farms, sun-dried, and stone-ground to preserve aroma, color, and nutritional integrity. Every batch is lab-tested before shipment.",
    ],
  },
  {
    slug: "moringa-the-miracle-tree",
    title: "Moringa: The Miracle Tree Powering the Superfood Boom",
    excerpt:
      "Moringa oleifera is one of the most nutrient-dense plants on earth. Here's why it's becoming a must-have ingredient for global wellness brands.",
    category: "Product Insights",
    date: "April 30, 2026",
    readTime: "5 min read",
    content: [
      "Moringa leaves contain over 90 nutrients — including 7x the vitamin C of oranges, 4x the calcium of milk, and complete plant protein. It's no surprise that wellness brands across the US, Europe, and the Middle East are scaling moringa-based products.",
      "Indian moringa, grown in the dry climates of Maharashtra and Tamil Nadu, is considered among the most potent in the world. Our moringa powder is shade-dried at low temperatures to retain maximum nutrient density.",
      "We supply both retail-ready packs and bulk industrial-grade powder for nutraceutical manufacturers worldwide.",
    ],
  },
  {
    slug: "exporting-from-india-guide",
    title: "Exporting Food Products from India: A Buyer's Guide",
    excerpt:
      "Thinking of importing from India? Here's a practical overview of certifications, documentation, and quality standards to look for.",
    category: "Export Guide",
    date: "April 18, 2026",
    readTime: "8 min read",
    content: [
      "India is one of the world's largest exporters of agricultural commodities — but navigating the export process can feel complex for first-time buyers. The key is choosing a partner who handles documentation, certifications, and logistics end-to-end.",
      "Look for suppliers with FSSAI registration, APEDA membership, and the ability to issue Phytosanitary and COA certificates. These ensure your shipment clears customs in any destination country.",
      "At DG Global Exim, we manage the full documentation cycle — commercial invoice, packing list, bill of lading, certificate of origin, and customs clearance — so your shipment moves smoothly from our warehouse to your port.",
    ],
  },
  {
    slug: "sustainable-farming-partnerships",
    title: "Empowering Farmers Through Sustainable Partnerships",
    excerpt:
      "Behind every shipment is a farmer. Discover how DG Global Exim works directly with rural communities to build a fairer, more sustainable supply chain.",
    category: "Sustainability",
    date: "April 5, 2026",
    readTime: "4 min read",
    content: [
      "Sustainability isn't a marketing claim for us — it's the foundation of our supply chain. We work directly with smallholder farmers across Maharashtra, offering fair prices, training, and long-term contracts.",
      "This direct-sourcing model removes layers of middlemen, ensures traceability, and gives farmers the stability they need to invest in better practices — like organic cultivation, drip irrigation, and soil regeneration.",
      "When you buy from DG Global Exim, you're not just getting premium products. You're supporting a sustainable ecosystem that benefits Indian farmers and global consumers alike.",
    ],
  },
  {
    slug: "onion-powder-applications",
    title: "Why Onion Powder is a Kitchen and Industry Essential",
    excerpt:
      "Convenient, long-lasting, and flavor-packed — onion powder is a workhorse ingredient for restaurants, food manufacturers, and home cooks.",
    category: "Product Insights",
    date: "March 22, 2026",
    readTime: "4 min read",
    content: [
      "Onion powder offers all the flavor of fresh onion without the prep — making it indispensable for seasoning blends, sauces, snacks, soups, and ready-to-eat meals.",
      "Our onion powder is produced from premium white onions, dehydrated at controlled temperatures and milled to a fine, uniform texture. The result is a free-flowing powder with a sharp, authentic onion aroma.",
      "Available in food-service bulk packs and private-label retail formats for distributors and food manufacturers worldwide.",
    ],
  },
];

function BlogPage() {
  return (
    <>
      <section className="bg-warm">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-card shadow-sm">
            <BookOpen className="h-6 w-6 text-sage" />
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl">
            The DG Global Exim Blog
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Insights, product stories, and export guides from the world of
            premium Indian agriculture.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10">
          <span className="inline-flex items-center rounded-full bg-warm px-3 py-1 text-xs font-semibold text-terracotta">
            Featured
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
            {posts[0].title}
          </h2>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {posts[0].date}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {posts[0].readTime}
            </span>
            <span className="rounded-full bg-secondary px-2.5 py-0.5">
              {posts[0].category}
            </span>
          </div>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {posts[0].content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>
      </section>

      {/* All Posts */}
      <section className="bg-warm">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Latest Articles
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(1).map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="inline-flex w-fit items-center rounded-full bg-warm px-2.5 py-0.5 text-xs font-semibold text-terracotta">
                  {post.category}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <div className="mt-5 space-y-3 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                  {post.content.slice(0, 2).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 text-center shadow-sm sm:p-12">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Interested in our products?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Explore our range of premium agricultural exports or get in touch
            with our team for a personalized quote.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-lg bg-terracotta px-6 py-3 font-display text-sm font-semibold text-white shadow-sm transition-colors hover:bg-terracotta/90"
            >
              View Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-6 py-3 font-display text-sm font-semibold text-foreground transition-colors hover:bg-warm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
