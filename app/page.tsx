const TELEGRAM_LINK = "https://t.me/UsmanPriceActionLab";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsBar />
        <FeaturesSection />
        <AboutSection />
        <CTASection />
        <FAQSection />
        <Footer />
      </main>
    </div>
  );
}

function TelegramButton({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "outline" }) {
  const base = "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 text-sm sm:text-base";
  const styles = {
    primary: "bg-accent text-black hover:bg-accent-dark px-8 py-4 animate-pulse-glow",
    outline: "border border-accent text-accent hover:bg-accent/10 px-6 py-3",
  };
  return (
    <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className={`${base} ${styles[variant]}`}>
      {children}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
            <span className="text-accent text-xs font-extrabold tracking-tight">UPL</span>
          </div>
          <span className="text-sm font-bold tracking-tight text-white">
            <span className="sm:hidden">PRICE ACTION LAB</span>
            <span className="hidden sm:inline">USMAN PRICE ACTION LAB</span>
          </span>
        </div>
        <TelegramButton variant="outline">
          Join Channel
        </TelegramButton>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-24 pb-12 sm:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.08)_0%,_transparent_60%)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Live Signals Active
          </div>
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-5 sm:mb-6 rounded-2xl bg-gradient-to-br from-accent/30 to-accent/10 border border-accent/30 flex items-center justify-center">
            <span className="text-accent text-xl sm:text-2xl font-extrabold tracking-tight">UPL</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white mb-4 sm:mb-5">
            Trade XAUUSD Like a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Professional</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10">
            Daily free XAUUSD signals with proven accuracy. Expert account management for serious traders.
            Join 10,000+ members already growing their portfolio.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <TelegramButton>
            Join Free Channel
          </TelegramButton>
          <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors px-6 py-3">
            Learn More
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { value: "10,000+", label: "Members" },
    { value: "87%", label: "Win Rate" },
    { value: "500+", label: "Signals Sent" },
    { value: "4.9★", label: "Community Rating" },
  ];
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((s, i) => (
          <div key={i} className="rounded-xl bg-surface border border-white/5 p-4 sm:p-5 text-center">
            <div className="text-lg sm:text-2xl font-extrabold text-accent">{s.value}</div>
            <div className="text-xs sm:text-sm text-muted mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: "Daily Free Signals",
      description: "Get XAUUSD signals every day with clear entry, SL, and TP levels. Fully free — no subscription needed.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: "Account Management",
      description: "Professional account management for investors. Hands-free growth with risk-managed strategies tailored to your capital.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      ),
      title: "Market Analysis",
      description: "In-depth technical & fundamental analysis. Support and resistance levels, trend analysis, and market sentiment updates.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Community & Support",
      description: "Join a community of 10,000+ traders. Get real-time support, share insights, and grow together with fellow members.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
          Why Join Usman Price Action Lab?
        </h2>
        <p className="text-sm sm:text-base text-muted max-w-lg mx-auto">
          Everything you need to trade gold with confidence — completely free.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        {features.map((f, i) => (
          <div key={i} className="rounded-xl bg-surface border border-white/5 p-5 sm:p-6 hover:border-accent/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-accent/15 text-accent flex items-center justify-center mb-4">{f.icon}</div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2">{f.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
      <div className="rounded-2xl bg-gradient-to-br from-surface to-surface-light border border-white/5 overflow-hidden">
        <div className="grid sm:grid-cols-2">
          <div className="p-6 sm:p-8 md:p-10">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-5">
              <span className="text-accent font-extrabold text-lg">UPL</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-3">
              About the Channel
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-4">
              Usman Price Action Lab is the largest free gold trading signals channel on Telegram. We provide
              daily XAUUSD signals, market analysis, and professional account management services
              to traders worldwide.
            </p>
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-6">
              Our strategies are backed by years of experience in XAUUSD trading, combining
              technical analysis with fundamental insights to deliver consistent results.
            </p>
            <TelegramButton>Join Free Channel</TelegramButton>
          </div>
          <div className="relative hidden sm:flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.1)_0%,_transparent_60%)]">
            <div className="text-center">
              <div className="text-5xl font-extrabold text-accent mb-2">#1</div>
              <div className="text-sm text-muted">Free XAUUSD Signals<br />Channel on Telegram</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
      <div className="rounded-2xl bg-gradient-to-br from-accent/20 via-accent/10 to-transparent border border-accent/20 p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
        <div className="relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
            Ready to Start Trading?
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-md mx-auto mb-8">
            Join 10,000+ traders receiving free daily signals. No strings attached.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <TelegramButton>
              Join Price Action Lab Now
            </TelegramButton>
            <span className="text-xs text-muted">Free &bull; No spam &bull; Daily signals</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    { q: "Is the channel really free?", a: "Yes, 100% free. All signals and analysis are shared openly in the channel with no subscription required." },
    { q: "What instruments do you trade?", a: "We specialize in XAUUSD (Gold) — the most traded commodity pair. We occasionally share analysis on other major pairs." },
    { q: "How many signals per day?", a: "We post 2-5 signals daily with clear entry price, stop loss, and take profit levels." },
    { q: "Do you offer account management?", a: "Yes, we provide professional account management for investors. Contact us on Telegram for details." },
  ];
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
      <h2 className="text-xl sm:text-2xl font-extrabold text-white text-center mb-8 sm:mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <details key={i} className="rounded-xl bg-surface border border-white/5 group open:border-accent/30 transition-colors">
            <summary className="px-5 py-4 text-sm sm:text-base font-semibold text-white cursor-pointer list-none flex items-center justify-between gap-4 select-none">
              {f.q}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-muted group-open:rotate-180 transition-transform">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <div className="px-5 pb-4 text-sm text-muted leading-relaxed">{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-muted">
        <span>&copy; 2026 Usman Price Action Lab. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <span>Forex trading involves risk.</span>
          <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Telegram</a>
        </div>
      </div>
    </footer>
  );
}
