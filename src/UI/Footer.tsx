export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border mt-24"
      style={{ background: "var(--card)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span
            style={{
              fontFamily: "'DM Serif Display', serif",
              color: "var(--primary)",
            }}
            className="text-lg"
          >
            LUXE
          </span>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.18em",
            }}
            className="text-xs"
          >
            BOUTIQUE
          </span>
        </div>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "var(--muted-foreground)",
            fontSize: "0.8125rem",
          }}
        >
          © {year} Luxe Boutique. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
