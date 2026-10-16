import Reveal from "./Reveal";

export default function Story() {
  return (
    <section id="about" className="section story" aria-labelledby="story-title">
      <div className="container story__grid">
        <Reveal>
          <figure className="story__media">
            <img
              src="/images/brand-tech.jpg"
              alt="An HVAC technician carefully servicing residential heating and cooling equipment"
              loading="lazy"
              decoding="async"
              width={1400}
              height={1800}
            />
            <figcaption className="story__chip">Residential heating &amp; cooling, done with care.</figcaption>
          </figure>
        </Reveal>

        <Reveal delay={150}>
          <div>
            <p className="eyebrow">About JHI Services</p>
            <h2 id="story-title" className="story__title">
              Comfort Begins with the Details.
            </h2>
            <span className="story__rule" aria-hidden="true" />
            <p className="story__text">
              JHI Services LLC focuses on residential heating and cooling, looking after the systems that keep homes
              comfortable through every season, from a first call to the final check.
            </p>
            <div className="story__actions">
              <a className="text-link" href="#contact">
                Request Service
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
