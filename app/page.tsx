const TELEGRAM_LINK = "https://t.me/UsmanPriceActionLab";
const TELEGRAM_HANDLE = "t.me/UsmanPriceActionLab";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background sm:items-center sm:justify-center sm:bg-desk sm:p-6">
      <PhoneFrame>
        <AppBar />
        <ProfileHeader />
        <InfoList />
        <JoinButton />
        <FinePrint />
      </PhoneFrame>
    </div>
  );
}

/** Full-bleed on phones; a device bezel once there's room for one. */
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-1 flex-col bg-background sm:h-[min(812px,calc(100dvh-3rem))] sm:w-[390px] sm:flex-none sm:overflow-hidden sm:rounded-[2.75rem] sm:border-[10px] sm:border-[#1c1c1e] sm:shadow-[0_30px_60px_-12px_rgba(16,24,40,0.4)]">
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-0 z-20 hidden h-[26px] w-[140px] -translate-x-1/2 rounded-b-[14px] bg-[#1c1c1e] sm:block"
      />
      <div className="flex flex-1 flex-col sm:overflow-y-auto">{children}</div>
    </div>
  );
}

/** Decorative chrome — the chevron and overflow dots aren't real controls. */
function AppBar() {
  return (
    <div className="sticky top-0 z-10 border-b border-separator bg-card/95 backdrop-blur-sm">
      <div className="flex items-center justify-between px-3 py-3 sm:pt-9">
        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
          <path d="m15 18-6-6 6-6" />
        </svg>
        <span className="text-[17px] font-semibold tracking-tight">Channel</span>
        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-muted">
          <circle cx="12" cy="5" r="1.7" /><circle cx="12" cy="12" r="1.7" /><circle cx="12" cy="19" r="1.7" />
        </svg>
      </div>
    </div>
  );
}

function ProfileHeader() {
  return (
    <section className="animate-fade-in-up border-b border-separator bg-card px-6 pb-7 pt-7 text-center">
      <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-b from-accent-light to-accent text-2xl font-semibold tracking-wide text-white">
        UPL
      </div>
      <h1 className="text-[22px] font-semibold leading-tight tracking-tight">
        Usman Price Action Lab
      </h1>
      <p className="mt-1 text-[15px] text-muted">10,000+ subscribers</p>
    </section>
  );
}

function InfoList() {
  return (
    <section className="px-4 pt-6">
      <h2 className="px-3 pb-2 text-[13px] uppercase tracking-wide text-muted">Info</h2>
      <div className="overflow-hidden rounded-xl bg-card">
        <div className="flex gap-3 px-4 py-3.5">
          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-muted">
            <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
          </svg>
          <div>
            <p className="text-[15px] leading-snug">
              Daily free XAUUSD signals with proven accuracy. Expert account
              management for serious traders.
            </p>
            <p className="mt-1 text-[13px] text-muted">Description</p>
          </div>
        </div>
        <div className="ml-[50px] h-px bg-separator" />
        <a
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3.5 active:bg-background"
        >
          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-muted">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[15px] text-accent">{TELEGRAM_HANDLE}</p>
            <p className="mt-1 text-[13px] text-muted">Link</p>
          </div>
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-separator">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
}

function JoinButton() {
  return (
    <div className="px-4 pt-6">
      <a
        href={TELEGRAM_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-xl bg-accent text-[15px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-dark active:bg-accent-dark"
      >
        <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 2 11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" />
        </svg>
        Join Channel
      </a>
    </div>
  );
}

function FinePrint() {
  return (
    <footer className="mt-auto px-6 pb-7 pt-8 text-center">
      <p className="text-[11px] leading-relaxed text-muted">
        Trading XAUUSD involves substantial risk of loss. Signals are
        educational and not financial advice.
      </p>
      <p className="mt-2 text-[11px] text-muted">
        &copy; 2026 Usman Price Action Lab
      </p>
    </footer>
  );
}
