import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logoAsset from "../assets/logo.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img src={logoAsset.url} alt="DG Global Exim logo" className="h-10 w-10 object-contain" width={40} height={40} />
              <span className="font-display text-lg font-bold text-foreground">
                DG Global Exim
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A trusted exporter and supplier of premium-quality agricultural and
              food products from India. Committed to quality, hygiene, and
              customer satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base font-semibold text-foreground">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/products", label: "Our Products" },
                { to: "/services", label: "Services" },
                { to: "/blog", label: "Blog" },
                { to: "/contact", label: "Contact Us" },
                { to: "/privacy-policy", label: "Privacy Policy" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-terracotta"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-semibold text-foreground">
              Contact
            </h4>
            <ul className="mt-3 space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                <div className="flex flex-col text-sm text-muted-foreground">
                  <span>+91 8459907676</span>
                  <span>+91 9175691865</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                <span className="text-sm text-muted-foreground">dgglobalexim05@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                <span className="text-sm text-muted-foreground">India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} DG Global Exim. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
