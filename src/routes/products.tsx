import { createFileRoute } from "@tanstack/react-router";

import jaggeryCubesAsset from "../assets/jaggery-cubes-real.jpg.asset.json";
import jaggeryPowderAsset from "../assets/jaggery-powder-real.jpg.asset.json";
import jaggeryDhepAsset from "../assets/jaggery-dhep-real.jpg.asset.json";
import turmericPowderAsset from "../assets/turmeric-powder-real.jpg.asset.json";
import moringaPowderAsset from "../assets/moringa-real.jpg.asset.json";
import onionPowderAsset from "../assets/onion-powder-real.jpg.asset.json";
import jaggeryJarAsset from "../assets/jaggery-jar.jpg.asset.json";
import moringaBowlAsset from "../assets/moringa-powder-bowl.jpg.asset.json";
import jaggeryBlocksAsset from "../assets/jaggery-blocks-new.jpg.asset.json";
import jaggeryBlocksCupsAsset from "../assets/jaggery-blocks-cups.jpg.asset.json";
import onionBowlAsset from "../assets/onion-powder-bowl.jpg.asset.json";

const jaggeryCubes = jaggeryCubesAsset.url;
const jaggeryPowder = jaggeryPowderAsset.url;
const jaggeryDhep = jaggeryDhepAsset.url;
const turmericPowder = turmericPowderAsset.url;
const moringaPowder = moringaPowderAsset.url;
const onionPowder = onionPowderAsset.url;

const gallery = [
  { src: jaggeryJarAsset.url, title: "Packed Jaggery Cubes", caption: "Retail-ready jaggery cubes in food-grade jars" },
  { src: moringaBowlAsset.url, title: "Pure Moringa Powder", caption: "Finely ground moringa leaf powder, export grade" },
  { src: jaggeryBlocksCupsAsset.url, title: "Jaggery Cup Blocks", caption: "Hand-molded jaggery cups, factory packed" },
  { src: onionBowlAsset.url, title: "Premium Onion Powder", caption: "Dehydrated red onion powder with rich aroma and flavor" },
];

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Our Products — DG Global Exim" },
      { name: "description", content: "Explore DG Global Exim's range of premium agricultural exports from India: jaggery cubes, jaggery powder, turmeric, moringa, onion powder and more." },
      { property: "og:title", content: "Our Products — DG Global Exim" },
      { property: "og:description", content: "Explore DG Global Exim's range of premium agricultural exports from India." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-warm">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
            Our Products
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Premium-quality agricultural and food products, naturally sourced and
            carefully processed for global markets.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={768}
                  height={768}
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {product.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <ul className="mt-4 space-y-1">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Authentic Product Gallery */}
      <section className="bg-warm">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Straight From Our Facility
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
              Real photos of our products, packed and ready for global shipment.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <figure
                key={item.title}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <figcaption className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const products = [
  {
    title: "Jaggery Cubes",
    image: jaggeryCubes,
    description:
      "Our Jaggery Cubes are made from pure sugarcane juice without harmful chemicals or artificial additives. They are rich in natural minerals and provide a healthier alternative to refined sugar. Ideal for tea, coffee, desserts, and daily consumption.",
    features: [
      "Pure sugarcane juice",
      "No artificial additives",
      "Rich in natural minerals",
      "Healthier than refined sugar",
    ],
  },
  {
    title: "Jaggery Powder",
    image: jaggeryPowder,
    description:
      "DG Global Exim offers premium-quality Jaggery Powder with a natural sweet taste and rich aroma. It dissolves easily and is widely used in beverages, confectionery, bakery products, and traditional recipes.",
    features: [
      "Natural sweet taste",
      "Rich aroma",
      "Dissolves easily",
      "Versatile for cooking & baking",
    ],
  },
  {
    title: "Jaggery Dhep (Block Jaggery)",
    image: jaggeryBlocksAsset.url,
    description:
      "Our traditional Jaggery Dhep is produced using authentic methods that preserve its natural nutrients and flavor. It is widely consumed for its health benefits and is suitable for household and industrial use.",
    features: [
      "Authentic traditional method",
      "Preserves natural nutrients",
      "Rich natural flavor",
      "Household & industrial use",
    ],
  },
  {
    title: "Turmeric Powder",
    image: turmericPowder,
    description:
      "We supply high-quality Turmeric Powder made from carefully selected turmeric roots. Known for its vibrant color, rich aroma, and high curcumin content, our turmeric powder is ideal for culinary, medicinal, and industrial applications.",
    features: [
      "High curcumin content",
      "Vibrant golden color",
      "Rich aroma",
      "Culinary & medicinal grade",
    ],
  },
  {
    title: "Moringa Powder",
    image: moringaPowder,
    description:
      "Our Moringa Powder is produced from premium moringa leaves and is packed with essential vitamins, minerals, antioxidants, and plant-based nutrients. It is widely used in health supplements, beverages, and wellness products.",
    features: [
      "Premium moringa leaves",
      "Rich in vitamins & minerals",
      "High antioxidant content",
      "Wellness & supplement grade",
    ],
  },
  {
    title: "Onion Powder",
    image: onionPowder,
    description:
      "DG Global Exim provides finely processed Onion Powder with excellent flavor and aroma. It is widely used in food processing, seasoning blends, snacks, soups, sauces, and ready-to-eat products.",
    features: [
      "Finely processed",
      "Excellent flavor & aroma",
      "Long shelf life",
      "Food processing grade",
    ],
  },
];
