import { NAV_ITEMS, PHONE_DISPLAY, PHONE_HREF } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <a href="#home" className="brand" aria-label="JHI Services LLC, back to top">
              <span className="brand__mark" aria-hidden="true">
                <span className="brand__jhi">JHI</span>
                <span className="brand__rest">SERVICES LLC</span>
              </span>
              <span className="brand__sub" aria-hidden="true">
                RESIDENTIAL HEATING &amp; COOLING
              </span>
            </a>
            <p className="footer__tagline">
              Residential heating and cooling care for New Jersey homes, delivered with clarity and attention to detail.
            </p>
          </div>

          <div>
            <h2 className="footer__heading">Navigate</h2>
            <ul className="footer__links">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer__heading">Speak with us</h2>
            <a className="footer__phone" href={PHONE_HREF}>
              {PHONE_DISPLAY}
            </a>
          </div>

          <div>
            <h2 className="footer__heading">Service area</h2>
            <p className="footer__area">New Jersey. Exact service area pending confirmation.</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} JHI Services LLC. All rights reserved.</p>
          <a href="#home">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
