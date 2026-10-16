import { useEffect, useState } from "react";
import { NAV_ITEMS, PHONE_DISPLAY, PHONE_HREF } from "../data";

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    if (!menuOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 960) setMenuOpen(false);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const headerClass = [
    "site-header",
    solid && !menuOpen ? "is-solid" : "",
    menuOpen ? "is-menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={headerClass}>
        <div className="container site-header__inner">
          <a href="#home" className="brand" aria-label="JHI Services LLC, back to top" onClick={closeMenu}>
            <span className="brand__mark" aria-hidden="true">
              <span className="brand__jhi">JHI</span>
              <span className="brand__rest">SERVICES LLC</span>
            </span>
            <span className="brand__sub" aria-hidden="true">
              RESIDENTIAL COMFORT
            </span>
          </a>

          <nav className="nav" aria-label="Primary">
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <a className="header-phone" href={PHONE_HREF}>
              {PHONE_DISPLAY}
            </a>
            <a className="btn btn--terracotta btn--sm header-cta" href="#contact">
              Request Service
            </a>
            <a className="header-call" href={PHONE_HREF} aria-label={`Call JHI Services at ${PHONE_DISPLAY}`}>
              <PhoneIcon />
            </a>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
              <span className="menu-toggle__bars" aria-hidden="true">
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div id="site-menu" className={`menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div>
          <p className="menu__label">Menu</p>
          <nav className="menu__nav" aria-label="Mobile">
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
                    {item.label}
                    <ArrowIcon />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="menu__footer">
          <p className="menu__label">Speak with our team</p>
          <a className="menu__phone" href={PHONE_HREF} tabIndex={menuOpen ? 0 : -1}>
            {PHONE_DISPLAY}
          </a>
          <a className="btn btn--terracotta" href="#contact" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
            Request Service
          </a>
        </div>
      </div>
    </>
  );
}
