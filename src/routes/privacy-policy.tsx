import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — DG Global Exim" },
      {
        name: "description",
        content:
          "Read the DG Global Exim privacy policy to learn how we collect, use, store, and protect your personal information.",
      },
      { property: "og:title", content: "Privacy Policy — DG Global Exim" },
      {
        property: "og:description",
        content:
          "How DG Global Exim collects, uses, and protects your personal information.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  const updated = "June 5, 2026";

  return (
    <>
      <section className="bg-warm">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: {updated}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-10 text-base leading-relaxed text-muted-foreground">
          <div>
            <p>
              DG Global Exim ("we", "our", or "us") respects your privacy and is
              committed to protecting the personal information you share with us.
              This Privacy Policy explains what information we collect, how we
              use it, and the rights you have over your data when you visit our
              website or interact with our business.
            </p>
          </div>

          <Section title="1. Information We Collect">
            <p>We collect the following types of information:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong className="text-foreground">Contact details</strong> —
                name, company name, email address, phone number, and country —
                when you fill out our inquiry or contact form.
              </li>
              <li>
                <strong className="text-foreground">Business details</strong> —
                products of interest, quantity requirements, and destination
                port, shared voluntarily for quotation purposes.
              </li>
              <li>
                <strong className="text-foreground">Technical data</strong> —
                IP address, browser type, device information, and pages visited
                — collected automatically through cookies and analytics tools.
              </li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information">
            <ul className="ml-5 list-disc space-y-2">
              <li>To respond to your inquiries, quotation requests, and emails.</li>
              <li>To process and fulfill export orders and shipments.</li>
              <li>To send product updates, offers, or business communications (only if you opt in).</li>
              <li>To improve our website, products, and overall customer experience.</li>
              <li>To comply with applicable legal, tax, and export regulations.</li>
            </ul>
          </Section>

          <Section title="3. Sharing of Information">
            <p>
              We do not sell, rent, or trade your personal information. We may
              share limited data with trusted third parties strictly to fulfill
              your order, such as:
            </p>
            <ul className="ml-5 list-disc space-y-2">
              <li>Shipping and logistics partners</li>
              <li>Customs and regulatory authorities</li>
              <li>Banking and payment processors</li>
              <li>IT and email service providers</li>
            </ul>
            <p>
              All such partners are bound by confidentiality and data protection
              obligations.
            </p>
          </Section>

          <Section title="4. Data Security">
            <p>
              We follow industry-standard security practices — including
              encrypted transmission (HTTPS), restricted access, and secure
              storage — to safeguard your information from unauthorized access,
              alteration, or disclosure.
            </p>
          </Section>

          <Section title="5. Cookies">
            <p>
              Our website uses cookies and similar tracking technologies to
              improve performance and analyze traffic. You can disable cookies
              in your browser settings, though some parts of the site may not
              function as intended.
            </p>
          </Section>

          <Section title="6. Your Rights">
            <p>You have the right to:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction or deletion of your information.</li>
              <li>Withdraw consent for marketing communications at any time.</li>
              <li>Request a copy of your data in a portable format.</li>
            </ul>
            <p>
              To exercise any of these rights, email us at{" "}
              <a
                href="mailto:dgglobalexim05@gmail.com"
                className="text-terracotta hover:underline"
              >
                dgglobalexim05@gmail.com
              </a>
              .
            </p>
          </Section>

          <Section title="7. Data Retention">
            <p>
              We retain your information only for as long as necessary to
              fulfill the purposes outlined in this policy, or as required by
              law and applicable export regulations.
            </p>
          </Section>

          <Section title="8. Third-Party Links">
            <p>
              Our website may contain links to third-party sites. We are not
              responsible for the privacy practices or content of those
              websites. We encourage you to review their respective policies.
            </p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with a revised "Last updated" date.
              Continued use of the website constitutes acceptance of the
              updated policy.
            </p>
          </Section>

          <Section title="10. Contact Us">
            <p>
              For any questions regarding this Privacy Policy or your personal
              data, please contact:
            </p>
            <div className="rounded-xl border border-border bg-card p-5 text-sm text-foreground">
              <p className="font-semibold">DG Global Exim</p>
              <p className="mt-1 text-muted-foreground">Maharashtra, India</p>
              <p className="mt-1 text-muted-foreground">
                Email:{" "}
                <a
                  href="mailto:dgglobalexim05@gmail.com"
                  className="text-terracotta hover:underline"
                >
                  dgglobalexim05@gmail.com
                </a>
              </p>
              <p className="mt-1 text-muted-foreground">Phone: +91 8459907676, +91 9175691865</p>
            </div>
          </Section>
        </div>
      </section>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
        {title}
      </h2>
      {children}
    </div>
  );
}
