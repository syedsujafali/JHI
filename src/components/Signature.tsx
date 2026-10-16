import Reveal from "./Reveal";

export default function Signature() {
  return (
    <section id="comfort" className="section signature" aria-labelledby="signature-title">
      <div className="container">
        <div className="signature__head">
          <div>
            <p className="eyebrow">Year-Round Comfort</p>
            <h2 id="signature-title" className="signature__title" style={{ marginTop: 22 }}>
              Every Season. <em>A More Comfortable Home.</em>
            </h2>
          </div>
          <p className="signature__note">
            Warm winter mornings, cool summer evenings and steady air in between. Good heating and cooling should feel
            effortless, working quietly in the background of everyday life.
          </p>
        </div>

        <div className="signature__grid">
          <Reveal className="signature__fig--a">
            <figure className="signature__fig" style={{ margin: 0 }}>
              <img
                src="/images/interior-sofa.jpg"
                alt="Modern digital smart thermostat installed for precision residential climate control"
                loading="lazy"
                decoding="async"
                width={2000}
                height={1400}
              />
            </figure>
          </Reveal>

          <Reveal delay={200} className="signature__fig--b">
            <figure className="signature__fig" style={{ margin: 0 }}>
              <img
                src="/images/interior-light.jpg"
                alt="Certified HVAC technician using precision diagnostic tools to test airflow and system performance"
                loading="lazy"
                decoding="async"
                width={2000}
                height={1300}
              />
            </figure>
          </Reveal>
        </div>

        <Reveal className="signature__strip">
          <img
            src="/images/interior-wood.jpg"
            alt="High-performance residential HVAC mechanical systems and clean ductwork installation"
            loading="lazy"
            decoding="async"
            width={2400}
            height={1200}
          />
        </Reveal>
        <p className="signature__caption">Precision heating, ventilation, and air conditioning craftsmanship.</p>
      </div>
    </section>
  );
}
