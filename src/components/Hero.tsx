import { PHONE_DISPLAY, PHONE_HREF } from "../data";

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__media">
        <img
          src="/images/hero-home.jpg"
          alt="Modern commercial rooftop HVAC climate control system, chillers, and air handling equipment with city skyline at sunset"
          width={2400}
          height={1500}
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow eyebrow--light">Residential Heating &amp; Cooling</p>
          <h1 id="hero-title" className="hero__title">
            Comfort, <em>Thoughtfully</em> Delivered.
          </h1>
          <p className="hero__lede">
            Year-round comfort for the home you love, cared for with clear communication and attention to every
            system.
          </p>
          <div className="hero__actions">
            <a className="btn btn--terracotta" href="#contact">
              Request Service
            </a>
            <a className="btn btn--ghost" href={PHONE_HREF}>
              Call Now · {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      <a className="hero__scroll" href="#services">
        Explore
      </a>
    </section>
  );
}
