import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — DG Global Exim" },
      { name: "description", content: "Get in touch with DG Global Exim for inquiries about our premium agricultural exports from India." },
      { property: "og:title", content: "Contact Us — DG Global Exim" },
      { property: "og:description", content: "Get in touch with DG Global Exim for inquiries about our premium agricultural exports from India." },
    ],
  }),
  component: ContactPage,
});

const RECIPIENT_EMAIL = "dgglobalexim05@gmail.com";
const RECIPIENT_PHONE = "918459907676"; // WhatsApp international format

const inquirySchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(1, "Please enter a subject").max(150),
  message: z.string().trim().min(1, "Please enter a message").max(1000),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
  };

  const buildBody = (data: z.infer<typeof inquirySchema>) =>
    `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`;

  const handleEmail = () => {
    const parsed = inquirySchema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check your inputs");
      return;
    }
    setError(null);
    const subject = encodeURIComponent(`[Inquiry] ${parsed.data.subject}`);
    const body = encodeURIComponent(buildBody(parsed.data));
    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const handleWhatsApp = () => {
    const parsed = inquirySchema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check your inputs");
      return;
    }
    setError(null);
    const text = encodeURIComponent(`Inquiry: ${parsed.data.subject}\n\n${buildBody(parsed.data)}`);
    window.open(`https://wa.me/${RECIPIENT_PHONE}?text=${text}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <>
      <section className="bg-warm">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            We welcome inquiries from importers, distributors, wholesalers, and business partners worldwide.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">Get in Touch</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Whether you have questions about our products, want to discuss bulk orders, or are interested in a
              partnership, we are here to help.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-sage/10 p-3"><Phone className="h-5 w-5 text-sage" /></div>
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <p className="mt-1 text-sm text-muted-foreground">+91 8459907676</p>
                  <p className="text-sm text-muted-foreground">+91 9175691865</p>
                </div>
              </div>
              <a href={`mailto:${RECIPIENT_EMAIL}`} className="flex items-start gap-4">
                <div className="rounded-xl bg-sage/10 p-3"><Mail className="h-5 w-5 text-sage" /></div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{RECIPIENT_EMAIL}</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-sage/10 p-3"><MapPin className="h-5 w-5 text-sage" /></div>
                <div>
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="mt-1 text-sm text-muted-foreground">India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-sage/10 p-3"><Clock className="h-5 w-5 text-sage" /></div>
                <div>
                  <h3 className="font-semibold text-foreground">Response Time</h3>
                  <p className="mt-1 text-sm text-muted-foreground">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); handleEmail(); }}
            className="rounded-2xl border border-border bg-card p-8 shadow-sm"
          >
            <h3 className="font-display text-xl font-semibold text-foreground">Send an Inquiry</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in your details and we will get back to you shortly.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground">Your Name</label>
                <input type="text" value={form.name} onChange={update("name")} maxLength={100} placeholder="Enter your name"
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground">Email Address</label>
                <input type="email" value={form.email} onChange={update("email")} maxLength={255} placeholder="Enter your email"
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground">Subject</label>
                <input type="text" value={form.subject} onChange={update("subject")} maxLength={150} placeholder="What is this about?"
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground">Message</label>
                <textarea rows={4} value={form.message} onChange={update("message")} maxLength={1000} placeholder="Tell us about your requirements..."
                  className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage" />
              </div>

              {error && <p className="text-sm text-destructive" role="alert">{error}</p>}
              {sent && !error && (
                <p className="text-sm text-sage">Your inquiry is ready in your email/WhatsApp app — just hit send.</p>
              )}

              <div className="grid gap-3 sm:grid-cols-2">
                <button type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sage px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-sage/25 transition-all hover:bg-sage-dark">
                  <Send className="h-4 w-4" /> Send via Email
                </button>
                <button type="button" onClick={handleWhatsApp}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-accent">
                  <MessageCircle className="h-4 w-4" /> Send via WhatsApp
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
