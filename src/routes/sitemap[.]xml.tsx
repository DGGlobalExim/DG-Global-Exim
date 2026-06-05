import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const BASE_URL = "https://id-preview--88105b59-9846-4979-9ed6-135032c93965.lovable.app";

        const pages = [
          { loc: "/", changefreq: "weekly", priority: "1.0" },
          { loc: "/about", changefreq: "monthly", priority: "0.8" },
          { loc: "/products", changefreq: "weekly", priority: "0.9" },
          { loc: "/contact", changefreq: "monthly", priority: "0.7" },
        ];

        const urls = pages
          .map(
            (page) =>
              `  <url>\n    <loc>${BASE_URL}${page.loc}</loc>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
