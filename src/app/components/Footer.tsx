import { siteConfig } from "../data/siteConfig";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#coaching", label: "Coaching Program" },
  { href: "#approach", label: "My Approach" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark text-cream py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-cream/20 flex items-center justify-center">
                <span className="text-cream font-heading text-lg font-bold">D</span>
              </div>
              <div>
                <p className="font-heading text-lg font-semibold">{siteConfig.name}</p>
                <p className="text-sm text-sage-light">{siteConfig.title}</p>
              </div>
            </div>
            <p className="text-cream/80 text-sm leading-relaxed">
              Supporting your journey to whole-person wellness through
              compassionate, client-centered coaching.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/80 hover:text-cream transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-cream/80">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-cream transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-cream/80">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{siteConfig.location}</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-cream/10 rounded-lg">
              <p className="text-xs text-cream/60">
                Currently pursuing AAS in Integrative Health
                <br />
                Expected May 2026
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-cream/60">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p>Wellness coaching is not medical care, therapy, or counseling.</p>
        </div>
      </div>
    </footer>
  );
}
