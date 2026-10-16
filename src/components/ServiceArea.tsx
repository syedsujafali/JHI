import { PHONE_DISPLAY, PHONE_HREF } from "../data";
import Reveal from "./Reveal";

const RING_COUNT = 8;

export default function ServiceArea() {
  const rings = Array.from({ length: RING_COUNT }, (_, i) => i);

  return (
    <section id="service-area" className="section area" aria-labelledby="area-title">
      <div className="container area__grid">
        <div>
          <p className="eyebrow">Service Area</p>
          <h2 id="area-title" className="area__title">
            Rooted in New Jersey.
          </h2>
          <p className="area__text">
            JHI Services LLC is based in New Jersey. Our exact service area is being confirmed, so please call us to ask
            whether we can help at your address.
          </p>

          <dl className="area__facts">
            <div>
              <dt>Location</dt>
              <dd>New Jersey</dd>
            </div>
            <div>
              <dt>Service area</dt>
              <dd>Exact boundaries pending confirmation</dd>
            </div>
            <div>
              <dt>Telephone</dt>
              <dd>
                <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
              </dd>
            </div>
          </dl>
        </div>

        <Reveal className="area__graphic" delay={100}>
          <img
            src="/images/nj-service-map.jpg"
            alt="New Jersey HVAC Service Area Map showing response regions and coverage"
            className="area__map-image"
            loading="lazy"
            decoding="async"
            width={600}
            height={600}
          />
          <div className="area__caption">
            <span className="area__label">New Jersey</span>
            <span>Serving North, Central &amp; South Jersey communities.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
